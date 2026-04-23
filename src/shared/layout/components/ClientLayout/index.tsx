'use client';

import { usePathname } from 'next/navigation';
import { Header, Footer } from '@/shared/layout/components/organisms';
import { Providers } from '@/shared/components/templates';

interface ClientLayoutProps {
  children: React.ReactNode;
  lang: string;
}

export const ClientLayout = ({ children, lang }: ClientLayoutProps) => {
  const pathname = usePathname();
  const isFacePage = pathname?.startsWith('/face');

  return (
    <Providers initialLang={lang}>
      {!isFacePage && <Header />}
      <main className="grow">{children}</main>
      {!isFacePage && <Footer />}
    </Providers>
  );
};
