'use client';

import React from 'react';
import { useLanguage } from '@/shared/hooks';
import { IconRideNow } from '@/shared/components/atoms';
import { Button } from '@heroui/react';
import Link from 'next/link';

export const LoginPage = () => {
  const { t } = useLanguage();

  return (
    <main className="bg-background relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="bg-primary/10 absolute top-[-20%] left-[-10%] h-[600px] w-[600px] rounded-full blur-3xl" />
      <div className="bg-foreground/5 absolute right-[-10%] bottom-[-20%] h-[800px] w-[800px] rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto flex max-w-md flex-col items-center px-4 text-center">
        <div className="text-background mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-yellow-400 shadow-2xl">
          <IconRideNow size={48} />
        </div>

        <h1 className="text-foreground mb-4 text-4xl font-black tracking-tight sm:text-5xl">
          {t('auth.login.title')}
        </h1>

        <div className="border-primary/30 bg-primary/10 mb-6 inline-block rounded-full border px-4 py-1.5 backdrop-blur-sm">
          <span className="text-primary text-sm font-bold tracking-wider uppercase">
            {t('auth.login.comingSoon')}
          </span>
        </div>

        <p className="text-foreground/70 mb-10 text-lg">
          {t('auth.login.description')}
        </p>

        <Link href={'/'}>
          <Button
            size="lg"
            className="bg-foreground text-background px-8 font-bold"
          >
            {t('header.home')}
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default LoginPage;
