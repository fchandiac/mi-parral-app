import { Box, Typography } from '@mui/material';
import ImageMiniProductCard from './ImageMiniProductCard';
import { productImage } from '@/app/actions/products-actions';
const imagesUrl = process.env.NEXT_PUBLIC_IMAGES_BACKEND_URL;

interface ProductMiniCardProps {
  id: string;
  name: string;
  price: number;
  categoryName?: string;
}

export default async function ProductMiniCard({
  id,
  name,
  price,
  categoryName,
}: ProductMiniCardProps) {
  const urlImage = (imageName: string) => {
    return `${imagesUrl}/images/products/${imageName}`;
  };

  const image = await productImage(id);

  return (
    <ImageMiniProductCard imageUrl={urlImage(image.image)} productId={id}>
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
        <Typography fontSize={14}>{name}</Typography>
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
