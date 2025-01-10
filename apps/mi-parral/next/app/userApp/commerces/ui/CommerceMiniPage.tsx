import { Box, Typography } from '@mui/material';
import CommerceImagesButton from './CommerceImagesButton'; // Asegúrate de que este componente exista
import CommerceWspButton from './CommerceWspButton'; // Asegúrate de que este componente exista
import MapButton from './MapButton'; // Asegúrate de que este componente exista

export interface CommerceMiniPageProps {
  id: string | undefined | null; // ID del comercio
  image: string | undefined | null; // Imagen del comercio
  name: string | undefined | null; // Nombre del comercio
  address?: string | null; // Dirección del comercio
  category?: {
    name: string; // Nombre de la categoría
  } | null; // Información de la categoría (puede ser null)
  description?: string | null; // Descripción del comercio
  whatsapp?: string | null; // Número de WhatsApp del comercio
  location?: string | null; // URL de Google Maps o ubicación
}

export default function CommerceMiniPage({
  id,
  image= '',
  name,
  category,
  description,
  address= '',
  whatsapp= '',
  location = '',
}: CommerceMiniPageProps) {
  const urlImage = (img: string | null) => {
    return img ? `${process.env.NEXT_PUBLIC_IMAGES_BACKEND_URL}/images/commerces/${img}` : '';
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '54vh', // Ajusta la altura según tus necesidades
        backgroundImage: `url(${urlImage(image)})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          bottom: -2,
          width: '100%',
          height: '70%',
          zIndex: 2,
        }}
      ></Box>

      <Box sx={{ position: 'relative', zIndex: 2, height: '100%' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '93%',
            padding: '16px',
            color: 'white',
          }}
        >
          <Box display={'flex'}>
            <Box flexGrow={1}>
              <Typography
                component="div"
                sx={{
                  fontSize: 18,
                  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.9)',
                  maxWidth: '70%',
                }}
              >
                {name}
              </Typography>
        
              <Typography
                component="div"
                sx={{
                  fontSize: 14,
                  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.9)',
                }}
              >
                {category ? category.name : 'Sin categoría'}
              </Typography>
            </Box>
            <Box display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
              <CommerceImagesButton />
              <CommerceWspButton number={whatsapp} />
              <MapButton googleMapsUrl={location} />
            </Box>
          </Box>

          <Typography
            component="div"
            sx={{
              fontSize: 12,
              marginTop: 'auto',
              padding: '8px',
              borderRadius: '5px',
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
            }}
          >
            {description || 'No description available'}
            {address}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
