import { Box, Typography } from '@mui/material';
import ImageMiniCommerceCard from './ImageMiniCommerceCard';
import { commerceImage } from '@/app/actions/commerces-actions';
const imagesUrl = process.env.NEXT_PUBLIC_IMAGES_BACKEND_URL;


interface CommerceMiniCardProps {
  id: string;
  name: string;

}

export default async function CommerceMiniCard({
  id,
  name,
}: CommerceMiniCardProps) {

  const urlImage = (imageName: string) => {
    return `${imagesUrl}/images/products/${imageName}`;
  };

  const image = await commerceImage(id);

  return (
    <ImageMiniCommerceCard
      imageUrl={urlImage(image.image)}
      commerceId={id}
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
      </Box>
    </ImageMiniCommerceCard>
  );
}
