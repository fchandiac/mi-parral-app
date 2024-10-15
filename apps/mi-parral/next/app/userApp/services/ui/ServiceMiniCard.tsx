import { serviceImage } from '@/app/actions/services-actions';
import { Box, Typography } from '@mui/material';
import ImageMiniServiceCard from './ImageMiniServiceCard';
const imagesUrl = process.env.NEXT_PUBLIC_IMAGES_BACKEND_URL;

interface ServiceMiniCardProps {
  id: string;
  name: string;
  price: number;
}

export default async function ServiceMiniCard({
  id,
  name,
  price,
}: ServiceMiniCardProps) {
  const urlImage = (imageName: string) => {
    return `${imagesUrl}/images/services/${imageName}`;
  };

  const image = await serviceImage(id);

  return (
    <ImageMiniServiceCard
      imageUrl={urlImage(image.image)}
      serviceId={id}
    >
      <Box
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.4)', // Fondo oscuro semitransparente
          padding: '10px',
          textAlign: 'left',
        }}
      >
        {/* Nombre del servicio */}
        <Typography  fontSize={14}>
          {name}
        </Typography>
        {/* Precio con formato CLP */}
        <Typography fontSize={16}>
          {price.toLocaleString('es-CL', {
            style: 'currency',
            currency: 'CLP',
          })}
        </Typography>
      </Box>
    </ImageMiniServiceCard>
  );
}
