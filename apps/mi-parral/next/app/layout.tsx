import type { Metadata } from 'next';
import './globals.css';
import './skeleton.css';
import { SessionProvider } from 'next-auth/react';
import MuiApp from '@/mui/MuiApp';
import { Box } from '@mui/material';
import { Suspense } from 'react';

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
      <Suspense fallback={<div>Cargando...</div>}>
        <SessionProvider>
          <body>
            <MuiApp>
              <Box minHeight={'700px'}>{children}</Box>
            </MuiApp>
          </body>
        </SessionProvider>
      </Suspense>
    </html>
  );
}
