"use client";

import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Providers, Header, Footer } from "@/shared";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const clashDisplay = localFont({
  src: [
    {
      path: "../../public/fonts/ClashDisplay-Extralight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/ClashDisplay-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/ClashDisplay-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/ClashDisplay-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/ClashDisplay-Semibold.otf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-clash",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${clashDisplay.variable} h-full antialiased`}
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
