import { Box, Typography } from '@mui/material';
import ImageMiniCommerceCard from './ImageMiniCommerceCard';
import { commerceImage } from '@/app/actions/commerces-actions';


interface CommerceMiniCardProps {
  id: string;
  name: string;

}

export default async function CommerceMiniCard({
  id,
  name,
}: CommerceMiniCardProps) {

  const urlImage = (imageName: string) => {
    return `http://localhost:9002/images/products/${imageName}`;
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
