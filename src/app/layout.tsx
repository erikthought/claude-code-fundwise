import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ClerkClientProvider from '@/components/ClerkClientProvider';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fundwise - AI-Powered VC Screening",
  description: "Automated startup pitch screening and analysis for venture capital investors",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClerkClientProvider>
          {children}
        </ClerkClientProvider>
      </body>
    </html>
  );
}
