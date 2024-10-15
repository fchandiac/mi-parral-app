import { Box, Typography } from '@mui/material';
import ImageMiniProductCard from './ImageMiniProductCard';
import { productImage } from '@/app/actions/products-actions';


interface ProductMiniCardProps {
  id: string;
  name: string;
  price: number;
}

export default async function ProductMiniCard({
  id,
  name,
  price,
}: ProductMiniCardProps) {

  const urlImage = (imageName: string) => {
    return `http://localhost:9002/images/products/${imageName}`;
  };

  const image = await productImage(id);

  return (
    <ImageMiniProductCard
      imageUrl={urlImage(image.image)}
      productId={id}
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
    </ImageMiniProductCard>
  );
}
