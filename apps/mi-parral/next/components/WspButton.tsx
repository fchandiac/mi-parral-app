'use client';
import { Button, Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

interface WspButtonProps {
  phoneNumber: string;
}

const WspButton: React.FC<WspButtonProps> = ({ phoneNumber }) => {
  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, '_blank');
  };

  return (
    <Box
    onClick={openWhatsApp}
    sx={{
      backgroundColor: 'primary.main', // Fondo color primario
      color: '#88C200', // Color del ícono
      borderRadius: 2, // Bordes redondeados
      width: '3rem', // Ancho cuadrado
      height: '3rem', // Altura cuadrada
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer', // Cambiar el cursor al pasar el mouse
      '&:hover': {
        backgroundColor: 'primary.dark', // Color de fondo al pasar el mouse
      },
    }}
  >
    <FontAwesomeIcon icon={faWhatsapp} size='xl' />
  </Box>
  );
};

export default WspButton;
