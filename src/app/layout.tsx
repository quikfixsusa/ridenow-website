import { Poppins } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import { ClientLayout } from '@/shared/layout/components';
import { cookies } from 'next/headers';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const clashDisplay = localFont({
  src: [
    {
      path: '../../public/fonts/ClashDisplay-Extralight.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ClashDisplay-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ClashDisplay-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ClashDisplay-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ClashDisplay-Semibold.otf',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-clash',
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const lang = cookieStore.get('ridenow-lang')?.value || 'en';

  return (
    <html
      lang={lang}
      className={`${poppins.variable} ${clashDisplay.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <title>RideNow</title>
        <meta
          name="description"
          content="Safe, reliable, and comfortable rides anywhere, anytime. Your premium transportation partner."
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block" />
      </head>
      <body
        className="uppercase-none flex min-h-full flex-col"
        suppressHydrationWarning
      >
        <ClientLayout lang={lang}>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}

