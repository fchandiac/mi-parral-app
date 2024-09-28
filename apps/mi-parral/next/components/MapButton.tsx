'use client';
import { Box } from '@mui/material'; // Importamos el ícono de mapa
import LocationOnIcon from '@mui/icons-material/LocationOn';

interface MapButtonProps {
  googleMapsUrl: string | null;
}

const MapButton: React.FC<MapButtonProps> = ({ googleMapsUrl }) => {
  const openMap = () => {
    if (googleMapsUrl) {
      window.open(googleMapsUrl, '_blank');
    }
  };

  return (
    <Box
      onClick={openMap}
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
        <LocationOnIcon />
    </Box>
  );
};

export default MapButton;
