'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { confirmPasswordReset } from 'firebase/auth';
import { Input, Button, TextField, Label } from '@heroui/react';
import { auth } from '@/shared/services/firebase';
import { validatePassword } from '../../../utils';
import { IconRideNow, SpinLoader } from '@/shared';
import { useLanguage } from '@/shared/hooks';

interface ResetPasswordProps {
  actionCode: string;
  emailUser: string;
}

export const ResetPassword: React.FC<ResetPasswordProps> = ({
  actionCode,
  emailUser,
}) => {
  const { t } = useLanguage();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const [formData, setFormData] = useState({
    newPassword: '',
    confirmNewPassword: '',
  });

  const [errors, setErrors] = useState<{
    newPassword?: string;
    confirmNewPassword?: string;
  }>({});

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMessage('');

    const updatedData = {
      ...formData,
      [name]: value,
    };

    setFormData(updatedData);
    setErrors(
      validatePassword(updatedData.newPassword, updatedData.confirmNewPassword)
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');

    const validationErrors = validatePassword(
      formData.newPassword,
      formData.confirmNewPassword
    );
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setMessage(t('auth.resetPassword.errorGeneric'));
      return;
    }

    if (!formData.newPassword) {
      setMessage(t('auth.resetPassword.errorGeneric'));
      return;
    }

    setLoading(true);
    try {
      await confirmPasswordReset(auth, actionCode, formData.newPassword);
      setSuccess(true);
    } catch (error: unknown) {
      console.error('Password reset error:', error);

      const firebaseError = error as { code?: string; message?: string };
      let errorMsg = t('auth.resetPassword.errorGeneric');

      if (firebaseError.code === 'auth/expired-action-code')
        errorMsg = t('auth.resetPassword.errorExpired');
      if (firebaseError.code === 'auth/invalid-action-code')
        errorMsg = t('auth.resetPassword.errorInvalid');
      if (firebaseError.code === 'auth/weak-password')
        errorMsg = t('auth.resetPassword.errorWeak');

      setMessage(errorMsg);
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-surface/50 border-divider animate-in fade-in zoom-in w-full max-w-[450px] rounded-3xl border p-8 shadow-2xl backdrop-blur-md duration-500">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="mb-2 flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10 text-green-500">
            <span className="material-symbols-rounded text-5xl">
              check_circle
            </span>
          </div>
          <div>
            <h2 className="font-display mb-2 text-2xl font-bold text-foreground">
              {t('auth.resetPassword.successTitle')}
            </h2>
            <p className="text-gray-400">
              {t('auth.resetPassword.successDescription')}
            </p>
          </div>
          <Button
            size="lg"
            onPress={() => router.push('/login')}
            className="bg-primary h-12 w-full font-bold text-white"
          >
            {t('auth.resetPassword.goToLogin')}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-surface/50 border-divider animate-in fade-in slide-in-from-bottom-8 w-full max-w-[450px] rounded-3xl border p-8 shadow-2xl backdrop-blur-md duration-700">
      <div className="flex flex-col items-center gap-2 pb-8 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400 text-black shadow-lg">
          <IconRideNow size={32} />
        </div>
        <h1 className="font-display text-3xl font-bold text-foreground">
          {t('auth.resetPassword.title')}
        </h1>
        <p className="text-sm text-gray-400">
          {t('auth.resetPassword.description', { email: emailUser })}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <TextField
          isInvalid={!!errors.newPassword}
          className="flex flex-col gap-2"
        >
          <Label className="text-foreground/80 text-sm font-medium">
            {t('auth.resetPassword.newPassword')}
          </Label>
          <div className="relative flex items-center">
            <Input
              name="newPassword"
              placeholder={t('auth.resetPassword.newPasswordPlaceholder')}
              type={isVisible ? 'text' : 'password'}
              value={formData.newPassword}
              onChange={handleChange}
              className="bg-default-100/50 border-divider focus:ring-primary h-12 w-full rounded-xl px-4 pr-12 text-foreground outline-none focus:ring-2"
            />
            <button
              className="absolute right-4 focus:outline-none"
              type="button"
              onClick={toggleVisibility}
            >
              <span className="material-symbols-rounded text-default-400 select-none text-2xl">
                {isVisible ? 'visibility' : 'visibility_off'}
              </span>
            </button>
          </div>
          {errors.newPassword && (
            <span className="text-danger text-xs">{errors.newPassword}</span>
          )}
        </TextField>

        <TextField
          isInvalid={!!errors.confirmNewPassword}
          className="flex flex-col gap-2"
        >
          <Label className="text-foreground/80 text-sm font-medium">
            {t('auth.resetPassword.confirmPassword')}
          </Label>
          <Input
            name="confirmNewPassword"
            placeholder={t('auth.resetPassword.confirmPasswordPlaceholder')}
            type={isVisible ? 'text' : 'password'}
            value={formData.confirmNewPassword}
            onChange={handleChange}
            className="bg-default-100/50 border-divider focus:ring-primary h-12 rounded-xl px-4 text-foreground outline-none focus:ring-2"
          />
          {errors.confirmNewPassword && (
            <span className="text-danger text-xs">
              {errors.confirmNewPassword}
            </span>
          )}
        </TextField>

        {message && (
          <p className="rounded-xl border border-red-500/20 bg-red-500/10 p-3 text-center text-sm text-red-500">
            {message}
          </p>
        )}

        <Button
          type="submit"
          size="lg"
          isDisabled={loading}
          fullWidth
          className="bg-primary h-12 font-medium tracking-wider text-white uppercase"
        >
          {loading ? (
            <div className="scale-50">
              <SpinLoader />
            </div>
          ) : (
            t('auth.resetPassword.submit')
          )}
        </Button>

        <p className="mt-2 text-center text-sm text-gray-500">
          {t('auth.resetPassword.cancelPrompt')}{' '}
          <button
            type="button"
            onClick={() => router.push('/')}
            className="font-bold text-foreground hover:underline"
          >
            {t('auth.resetPassword.backToHome')}
          </button>
        </p>
      </form>
    </div>
  );
};

export default ResetPassword;
