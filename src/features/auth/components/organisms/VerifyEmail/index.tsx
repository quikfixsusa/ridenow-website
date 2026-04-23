'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { httpsCallable } from 'firebase/functions';
import { Button } from '@heroui/react';
import { functions } from '@/shared/services/firebase';
import { IconRideNow, SpinLoader } from '@/shared';
import { useLanguage } from '@/shared/hooks';

interface VerifyEmailProps {
  actionCode: string;
}

export const VerifyEmail: React.FC<VerifyEmailProps> = ({ actionCode }) => {
  const { t } = useLanguage();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        // Call the Cloud Function
        const verifyEmailFn = httpsCallable(functions, 'verifyEmail');
        const result = await verifyEmailFn({ actionCode });
        
        const data = result.data as { success: boolean; message?: string };
        
        if (data.success) {
          setSuccess(true);
        } else {
          throw new Error(data.message || t('auth.verifyEmail.errorGeneric'));
        }
      } catch (err: unknown) {
        console.error('Verification error:', err);
        
        // Handle Firebase Functions error structure
        const functionsError = err as { code?: string; message?: string };
        
        // Map common error messages to our translations if needed
        let errorMsg = functionsError.message || t('auth.verifyEmail.errorGeneric');
        
        if (functionsError.message?.includes('invalid or has expired')) {
          errorMsg = t('auth.verifyEmail.errorInvalid');
        }
        
        setError(errorMsg);
      } finally {
        setLoading(false);
      }
    };

    if (actionCode) {
      verifyEmail();
    }
  }, [actionCode, t]);

  if (loading) {
    return (
      <div className="flex flex-col items-center gap-4 animate-in fade-in duration-500">
        <SpinLoader />
        <p className="text-gray-400 font-medium animate-pulse text-center">
          {t('auth.verifyEmail.verifying')}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-surface/50 border-divider animate-in fade-in zoom-in w-full max-w-[450px] rounded-3xl border p-8 shadow-2xl backdrop-blur-md duration-500">
      <div className="flex flex-col items-center gap-6 text-center">
        {success ? (
          <>
            <div className="mb-2 flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10 text-green-500">
              <span className="material-symbols-rounded text-5xl">
                check_circle
              </span>
            </div>
            <div>
              <h2 className="font-display mb-2 text-2xl font-bold text-white">
                {t('auth.verifyEmail.successTitle')}
              </h2>
              <p className="text-gray-400">
                {t('auth.verifyEmail.successDescription')}
              </p>
            </div>
            <Button
              size="lg"
              onPress={() => router.push('/login')}
              className="bg-primary h-12 w-full font-bold text-white"
            >
              {t('auth.verifyEmail.goToLogin')}
            </Button>
          </>
        ) : (
          <>
            <div className="mb-2 flex h-20 w-20 items-center justify-center rounded-full bg-red-500/10 text-red-500">
              <span className="material-symbols-rounded text-5xl">
                error
              </span>
            </div>
            <div>
              <h2 className="font-display mb-2 text-2xl font-bold text-white">
                {t('auth.verifyEmail.errorTitle')}
              </h2>
              <p className="text-gray-400">
                {error || t('auth.verifyEmail.errorInvalid')}
              </p>
            </div>
            <Button
              size="lg"
              onPress={() => router.push('/')}
              className="bg-foreground text-background h-12 w-full font-bold"
            >
              {t('auth.verifyEmail.backToHome')}
            </Button>
          </>
        )}

        <div className="mt-4 flex items-center justify-center gap-2 opacity-50">
          <IconRideNow size={24} />
          <span className="text-xs font-bold uppercase tracking-widest text-white">RideNow</span>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
