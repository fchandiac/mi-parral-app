import { Box, Typography } from '@mui/material';
import ImageMiniCommerceCard from './ImageMiniCommerceCard';
import { commerceImage } from '@/app/actions/commerces-actions';
const imagesUrl = process.env.NEXT_PUBLIC_IMAGES_BACKEND_URL;


interface CommerceMiniCardProps {
  id: string;
  name: string;
  categoryName?: string;
}

export default async function CommerceMiniCard({
  id,
  name,
  categoryName,
}: CommerceMiniCardProps) {

  const urlImage = (imageName: string) => {
    return `${imagesUrl}/images/commerces/${imageName}`;
  };

  const image = await commerceImage(id);

  return (
    <ImageMiniCommerceCard
      imageUrl={urlImage(image.image)}
      commerceId={id}
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
      </Box>
    </ImageMiniCommerceCard>
  );
}
