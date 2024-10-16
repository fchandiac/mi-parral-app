'use client';
import { Suspense, useEffect } from 'react';
import { Box, Button, Grid } from '@mui/material';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      setTimeout(() => {
        router.push('/userApp');
      }, 6000);
    } else {
      setTimeout(() => {
        router.push('/sign-in');
      }, 6000);
    }
  }, [session]);

  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <>
        <Box
          sx={{
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100vw',
            height: '70vh', // Ajusta según sea necesario
            px: { xs: '10vw', sm: '15vw', md: '20vw' }, // Márgenes ajustables para diferentes tamaños de pantalla
            boxSizing: 'border-box', // Asegura que el padding no afecte el ancho total
          }}
        >
          <img className="moving-image" src="/logo.svg" alt="Mi Parral" />
        </Box>
        <Box
          sx={{
            display: 'inline-flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100vw',
            animation: 'appearBox',
            animationDelay: '1s',
          }}
        >
          <Grid
            container
            spacing={2}
            direction={'column'}
            sx={{
              paddingLeft: { xs: '10vw', sm: '15vw', md: '35vw' },
              paddingRight: { xs: '10vw', sm: '15vw', md: '35vw' },
            }}
          ></Grid>
        </Box>

        <Box className="dots-container">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </Box>
      </>
    </Suspense>
  );
}
