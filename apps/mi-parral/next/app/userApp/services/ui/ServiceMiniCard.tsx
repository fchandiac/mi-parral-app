import { serviceImage } from '@/app/actions/services-actions';
import { Box, Skeleton, Typography } from '@mui/material';
import ImageMiniServiceCard from './ImageMiniServiceCard';
import { Suspense } from 'react';
const imagesUrl = process.env.NEXT_PUBLIC_IMAGES_BACKEND_URL;

interface ServiceMiniCardProps {
  id: string;
  name: string;
  price: number;
  categoryName?: string;
}

export default async function ServiceMiniCard({
  id,
  name,
  price,
  categoryName,
}: ServiceMiniCardProps) {
  const urlImage = (imageName: string) => {
    return `${imagesUrl}/images/services/${imageName}`;
  };

  const image = await serviceImage(id);

  return (
    <ImageMiniServiceCard imageUrl={urlImage(image.image)} serviceId={id}>
      <Box
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.4)', // Fondo oscuro semitransparente
  
          textAlign: 'left',
        }}
      >
  
        <Box
          sx={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            backgroundColor: '#1d1d1d', // Fondo rojo
            borderRadius: '20px', // Bordes redondeados
            padding: '5px 10px', // Espaciado interno
          }}
        >
          <Typography fontSize={12} color="white">
            {categoryName}
          </Typography>
        </Box>
      </Box>


      <Box
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.4)', // Fondo oscuro semitransparente
          padding: '10px',
          textAlign: 'left',

        }}
      >
        {/* Nombre del servicio */}
        <Typography fontSize={14}>{name}</Typography>
        {/* Precio con formato CLP */}
        {/* <Typography fontSize={16}>
          {price.toLocaleString('es-CL', {
            style: 'currency',
            currency: 'CLP',
          })}
        </Typography> */}
      </Box>
    </ImageMiniServiceCard>
  );
}
