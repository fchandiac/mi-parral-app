'use client';
import { Box, IconButton } from '@mui/material'; // Importamos el ícono de mapa
import LocationOnIcon from '@mui/icons-material/LocationOn';

interface MapButtonProps {
  googleMapsUrl: string | null;
}

export default function MapButton(
    { googleMapsUrl }: MapButtonProps
) {

    const openMap = () => {
        if (googleMapsUrl) {
        window.open(googleMapsUrl, '_blank');
        }
    };


  return (
    <>
    <IconButton
      onClick={() => {
       openMap();
      }} 
    sx={{
      mt: 1,
      backgroundColor: 'primary.main',
      color: 'background.default',
      ':hover': {
        backgroundColor: 'primary.main',
        color: 'white',
      },
      
    }}
    >
        <LocationOnIcon />
    </IconButton>
    </>
  )
}
