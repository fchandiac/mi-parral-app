'use client';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { Grid, TextField, Box, Button, Typography, Alert, Dialog } from '@mui/material';
import { useRouter } from 'next/navigation';
import FormSkeleton from './FormSkeleton';
import RecoveryPassDialog from './RecoveryPassDialog';

export default function LoginForm() {
  const [error, setError] = useState(null);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [openRecoveryPassDialog, setOpenRecoveryPassDialog] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');

    await new Promise(resolve => setTimeout(resolve, 2000));

    const response = await signIn('credentials', {
      email: email,
      password: password,
      redirect: false,
    });

    if (response.error) {
      setError('Credenciales incorrectas');
      setLoading(false);
    } else {
      router.push('/userApp'); // Redirige a la página principal
    }

    // Redirige a la página principal
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    await signIn('google', { callbackUrl: '/' });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    router.push('/register');
    
  }



  return (
    <>
      <Box
        sx={{
          display: 'inline-flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100vw',
          px: {
            xs: '10vw',
            sm: '15vw',
            md: '20vw',
            lg: '35vw',
            xl: '0vw',
          }, // Padding ajustable para diferentes tamaños de pantalla
          py: '10vh', // Márgenes ajustables para diferentes tamaños de pantalla
          boxSizing: 'border-box', // Asegura que el padding no afecte el ancho total
        }}
      >
        <img src="/logoBlack.svg" alt="Mi Parral" width={'80%'} />
      </Box>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100vw',
            px: {
              xs: '0vw',
              sm: '20vw',
              md: '25vw',
              lg: '35vw',
              xl: '40vw',
            }, // Padding ajustable para diferentes tamaños de pantalla
            boxSizing: 'border-box', // Asegura que el padding no afecte el ancho total
          }}
        >
          <Grid container spacing={1} direction={'column'} p={1}>
            <Grid item>
              <TextField
                label="Correo"
                variant="outlined"
                name="email"
                fullWidth
                type="email"
                required
              />
            </Grid>
            <Grid item>
              <TextField
                label="Contraseña"
                variant="outlined"
                name="password"
                fullWidth
                type="password"
                required
              />
            </Grid>
            <Grid item>
              {error && (
                <Alert
                  severity="error"
                  sx={{
                    border: '1.5px solid red',
                    borderRadius: 1,
                    color: '#1d1d1d',
                  }}
                >
                  {error}
                </Alert>
              )}
            </Grid>
            <Grid item  container justifyContent={'space-between'}>
            <Button variant="text" size="small"
              disabled={loading}
              onClick={() =>{setOpenRecoveryPassDialog(true)}}
              >
                recuperar contraseña
              </Button>
              <Button variant="text" size="small"
              disabled={loading}
              onClick={handleRegister}
              >
                Registrarse
              </Button>
            </Grid>
            <Grid item>
              <Button
              disabled={loading}
                variant="contained"
                fullWidth
                type="submit"
                sx={{
                  height: 45,
                }}
              >
                Ingresar
              </Button>
            </Grid>
            <Grid item>
              <Button
                disabled={loading}
                fullWidth
                variant="outlined"
                type="button"
                sx={{
                  height: 45,
                }}
                onClick={handleGoogleSignIn}
              >
                <img src="/google.svg" alt="Google" width={30} />
                <Box ml={1}>Ingresa con Google</Box>
              </Button>
            </Grid>
          </Grid>
        </Box>
      </form>
      <RecoveryPassDialog open={openRecoveryPassDialog} onClose={() =>{setOpenRecoveryPassDialog(false)}} />

    </>
  );
}
