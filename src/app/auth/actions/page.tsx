'use client';

import { Suspense, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { verifyPasswordResetCode } from 'firebase/auth';
import { auth } from '@/shared/services/firebase';
import { SpinLoader, ErrorView } from '@/shared';
import { ResetPassword, VerifyEmail } from '@/features/auth';
import { useLanguage } from '@/shared/hooks';

export const runtime = 'edge';

function ActionsContent() {
  const { t } = useLanguage();
  const router = useRouter();
  const searchParams = useSearchParams();
  const mode = searchParams.get('mode') || '';
  const actionCode = searchParams.get('oobCode') || '';

  const [asyncLoading, setAsyncLoading] = useState(true);
  const [asyncError, setAsyncError] = useState('');
  const [emailUser, setEmailUser] = useState('');

  // Derived state to avoid synchronous setState in useEffect
  const isInvalidMode = !mode || (mode !== 'resetPassword' && mode !== 'recoverEmail' && mode !== 'verifyEmail');
  const isMissingCode = !actionCode;

  // Actual display state
  const loading = asyncLoading && !isInvalidMode && !isMissingCode;
  const tokenError = (isMissingCode && !isInvalidMode) ? t('auth.verifyEmail.errorInvalid') : asyncError;

  useEffect(() => {
    if (isInvalidMode) {
      router.push('/');
      return;
    }

    // If we have an error or are missing the code, we don't need to call Firebase
    if (isMissingCode) return;

    if (mode === 'resetPassword' || mode === 'recoverEmail') {
      verifyPasswordResetCode(auth, actionCode)
        .then((email) => {
          setEmailUser(email);
          setAsyncLoading(false);
        })
        .catch((error) => {
          setAsyncError(error.message);
          setAsyncLoading(false);
        });
    } else {
      // For other modes like verifyEmail, we just stop loading
      setAsyncLoading(false);
    }
  }, [mode, actionCode, router, isInvalidMode, isMissingCode]);

  return (
    <main className="bg-background relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="bg-primary/10 absolute top-[-20%] left-[-10%] h-[600px] w-[600px] rounded-full blur-3xl" />
      <div className="bg-foreground/5 absolute right-[-10%] bottom-[-20%] h-[800px] w-[800px] rounded-full blur-3xl" />

      <div className="relative z-10 flex min-h-[70vh] w-full flex-col items-center justify-center py-20 px-4">
      {loading && (
        <div className="flex flex-col items-center gap-4">
          <SpinLoader />
          <p className="text-gray-400 font-medium animate-pulse">{t('auth.actions.validating')}</p>
        </div>
      )}
      
      {!loading && tokenError === '' && (
        <>
          {mode === 'resetPassword' && (
            <ResetPassword actionCode={actionCode} emailUser={emailUser} />
          )}
          {mode === 'verifyEmail' && (
            <VerifyEmail actionCode={actionCode} />
          )}
        </>
      )}

      {tokenError !== '' && <ErrorView />}
      </div>
    </main>
  );
}

export default function Actions() {
  return (
    <Suspense fallback={
      <div className="flex min-h-[70vh] items-center justify-center">
        <SpinLoader />
      </div>
    }>
      <ActionsContent />
    </Suspense>
  );
}
