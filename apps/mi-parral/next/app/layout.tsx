import type { Metadata } from 'next';
import './globals.css';
import './skeleton.css';
import { SessionProvider } from 'next-auth/react';
import MuiApp from '@/mui/MuiApp';
import { Box } from '@mui/material';
import { Suspense } from 'react';
//update the metadata object with the title and description of your app

export const metadata: Metadata = {
  title: 'MiParral App',
  description: 'MiParral App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <SessionProvider>
        <body>
          <Suspense fallback={<div>Loading...</div>}>
            <MuiApp>
              <Box minHeight={'700px'}>{children}</Box>
            </MuiApp>
          </Suspense>
        </body>
      </SessionProvider>
    </html>
  );
}
