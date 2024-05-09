import type { Metadata } from "next";

import { Poppins } from 'next/font/google';
import "./globals.css";
import { AuthContextProvider } from "@/contexts/AuthContext";
import { OnboardingContextProvider } from "@/contexts/OnboardingContext";

const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
  });

export const metadata: Metadata = {
  title: "MatchMajor",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
        <OnboardingContextProvider>
            <AuthContextProvider>
                <body className={`${poppins.variable}`}>{children}</body>
            </AuthContextProvider>
        </OnboardingContextProvider>
    </html>
  );
}