import { AuthContextProvider } from '@/contexts/AuthContext'

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
        <AuthContextProvider>
            <body >{children}</body>
        </AuthContextProvider>
    </html>
  );
}