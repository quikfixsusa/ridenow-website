'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  EmailAuthProvider, 
  reauthenticateWithCredential, 
  deleteUser 
} from 'firebase/auth';
import { Input, Button, TextField, Label } from '@heroui/react';
import { auth } from '@/shared/services/firebase';
import { IconRideNow, SpinLoader } from '@/shared';
import { useLanguage } from '@/shared/hooks';
import { DeleteUserFormProps } from './types';

export const DeleteUserForm: React.FC<DeleteUserFormProps> = ({ onSuccess }) => {
  const { t } = useLanguage();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMessage('');
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');

    if (!formData.email || !formData.password) {
      setMessage(t('auth.deleteUser.errorInvalid'));
      return;
    }

    setLoading(true);
    try {
      const user = auth.currentUser;
      if (!user) {
        throw new Error('No user logged in');
      }

      // Reauthenticate user before deletion
      const credential = EmailAuthProvider.credential(formData.email, formData.password);
      await reauthenticateWithCredential(user, credential);
      
      // Delete user
      await deleteUser(user);
      
      setSuccess(true);
      if (onSuccess) onSuccess();
    } catch (error: unknown) {
      console.error('Delete user error:', error);
      const firebaseError = error as { code?: string };
      
      if (firebaseError.code === 'auth/wrong-password' || firebaseError.code === 'auth/user-not-found' || firebaseError.code === 'auth/invalid-email') {
        setMessage(t('auth.deleteUser.errorInvalid'));
      } else if (firebaseError.code === 'auth/requires-recent-login') {
        setMessage(t('auth.deleteUser.errorGeneric'));
      } else {
        setMessage(t('auth.deleteUser.errorGeneric'));
      }
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-surface/50 border-divider animate-in fade-in zoom-in w-full max-w-[450px] rounded-3xl border p-8 shadow-2xl backdrop-blur-md duration-500">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="mb-2 flex h-20 w-20 items-center justify-center rounded-full bg-red-500/10 text-red-500">
            <span className="material-symbols-rounded text-5xl">
              delete_forever
            </span>
          </div>
          <div>
            <h2 className="font-display mb-2 text-2xl font-bold text-foreground">
              {t('auth.deleteUser.successTitle')}
            </h2>
            <p className="text-gray-400">
              {t('auth.deleteUser.successDescription')}
            </p>
          </div>
          <Button
            size="lg"
            onPress={() => router.push('/')}
            className="bg-primary h-12 w-full font-bold text-white"
          >
            {t('auth.deleteUser.backToHome')}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-surface/50 border-divider animate-in fade-in slide-in-from-bottom-8 w-full max-w-[450px] rounded-3xl border p-8 shadow-2xl backdrop-blur-md duration-700">
      <div className="flex flex-col items-center gap-2 pb-8 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500 text-white shadow-lg shadow-red-500/20">
          <IconRideNow size={32} />
        </div>
        <h1 className="font-display text-3xl font-bold text-foreground">
          {t('auth.deleteUser.title')}
        </h1>
        <p className="text-sm text-gray-400">
          {t('auth.deleteUser.description')}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <TextField className="flex flex-col gap-2">
          <Label className="text-foreground/80 text-sm font-medium">
            {t('auth.deleteUser.email')}
          </Label>
          <Input
            name="email"
            type="email"
            placeholder={t('auth.deleteUser.emailPlaceholder')}
            value={formData.email}
            onChange={handleChange}
            className="bg-default-100/50 border-divider focus:ring-red-500 h-12 w-full rounded-xl px-4 text-foreground outline-none focus:ring-2"
          />
        </TextField>

        <TextField className="flex flex-col gap-2">
          <Label className="text-foreground/80 text-sm font-medium">
            {t('auth.deleteUser.password')}
          </Label>
          <div className="relative flex items-center">
            <Input
              name="password"
              placeholder={t('auth.deleteUser.passwordPlaceholder')}
              type={isVisible ? 'text' : 'password'}
              value={formData.password}
              onChange={handleChange}
              className="bg-default-100/50 border-divider focus:ring-red-500 h-12 w-full rounded-xl px-4 pr-12 text-foreground outline-none focus:ring-2"
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
        </TextField>

        <div className="rounded-xl bg-red-500/10 border border-red-500/20 p-4">
          <div className="flex gap-3">
            <span className="material-symbols-rounded text-red-500 text-xl shrink-0">
              warning
            </span>
            <p className="text-xs text-red-500/90 leading-relaxed">
              {t('auth.deleteUser.warning')}
            </p>
          </div>
        </div>

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
          className="bg-red-500 hover:bg-red-600 h-12 font-medium tracking-wider text-white uppercase transition-colors"
        >
          {loading ? (
            <div className="scale-50">
              <SpinLoader />
            </div>
          ) : (
            t('auth.deleteUser.submit')
          )}
        </Button>

        <p className="mt-2 text-center text-sm text-gray-500">
          <button
            type="button"
            onClick={() => router.push('/')}
            className="font-bold text-foreground hover:underline"
          >
            {t('auth.deleteUser.backToHome')}
          </button>
        </p>
      </form>
    </div>
  );
};

export default DeleteUserForm;
