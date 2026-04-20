"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers, Header, Footer } from "@/shared";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <title>RideNow</title>
        <meta
          name="description"
          content="Safe, reliable, and comfortable rides anywhere, anytime. Your premium transportation partner."
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className="min-h-full flex flex-col uppercase-none"
        suppressHydrationWarning
      >
        <Providers>
          <Header />
          <main className="grow">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
