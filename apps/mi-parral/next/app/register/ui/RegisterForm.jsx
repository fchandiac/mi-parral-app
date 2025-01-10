'use client';
import { Grid, TextField, Box, Button, Alert } from '@mui/material';
import { useRegister } from '@/app/hooks/useRegister';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

export default function RegisterForm() {
  const { loading, error, register,  } = useRegister();
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      router.push('/sign-in');
    }
  }, [session]);



  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const name = formData.get('name');
    const confirmPassword = formData.get('confirmPassword');

    

    await register(name, email, password, confirmPassword);
    const login = await signIn('credentials', {
      email: email,
      password: password,
      redirect: false,
    });

  };

  return (
    <>
      <Box
        sx={{
          display: 'inline-flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100vw',
          px: {
            xs: '20vw',
            sm: '25vw',
            md: '30vw',
            lg: '35vw',
            xl: '40vw',
          }, // Padding ajustable para diferentes tamaños de pantalla
          py: '10vh', // Márgenes ajustables para diferentes tamaños de pantalla
          boxSizing: 'border-box', // Asegura que el padding no afecte el ancho total
        }}
      >
        <img src="/logoBlack.svg" alt="Mi Parral" width={'80%'} />
      </Box>

      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
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
                label="Nombre"
                variant="outlined"
                name="name"
                fullWidth
                type="text"
                required
              />
            </Grid>
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
              <TextField
                label="Confirma contraseña"
                variant="outlined"
                name="confirmPassword"
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
                Registrarse
              </Button>
            </Grid>
          </Grid>
        </Box>
      </form>
    </>
  );
}
