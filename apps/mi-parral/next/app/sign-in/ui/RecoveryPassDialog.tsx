import { Alert, Box, Button, Dialog, TextField, Typography } from '@mui/material'
import React, {useState} from 'react'
import { recoveryPassEmail } from '@/app/actions/auth-actions';

interface RecoveryPassDialogProps {
    open: boolean;
    onClose: () => void;
    }



export default function RecoveryPassDialog(
    {open, onClose}: RecoveryPassDialogProps
) {

  const [email, setEmail] = useState('');

  return (
    <>
    <Dialog 
        open={open}
        onClose={onClose}
    >
        <Box
            p={1}
        >
            <Typography variant="h5" align="left" pb={2}>
                Recuperar contraseña
            </Typography>

            <Alert severity="warning"
            sx={{mb: 2}}
            >
            Solo podemos recuperar tu contraseña si te registraste directamente en nuestra App. Si iniciaste sesión con Google, deberás seguir el proceso de recuperación de contraseña a través de Google.
            </Alert>
            <Alert severity="info">
                Ingresa tu correo electrónico para recuperar tu contraseña.
            </Alert>
            <form onSubmit={async (e) => {
                e.preventDefault();
                await recoveryPassEmail(email);
                onClose();
            }
            }>
            <Box>
                <TextField
                    label="Correo electrónico"
                    variant="outlined"
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    margin="normal"
                    required
                />
            </Box>
            <Box textAlign="right" pt={2}>
                <Button variant="contained" color="primary" type='submit'>
                    Enviar
                </Button>
            </Box>
            </form>
        </Box>
    </Dialog>
    </>
  )
}
