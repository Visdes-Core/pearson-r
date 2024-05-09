import { AuthContextProvider } from '@/contexts/AuthContext'
import { OnboardingContextProvider } from '@/contexts/OnboardingContext'

export default function SignupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
        <OnboardingContextProvider>
            <AuthContextProvider>
                <body >{children}</body>
            </AuthContextProvider>
        </OnboardingContextProvider>
    </html>
  );
}