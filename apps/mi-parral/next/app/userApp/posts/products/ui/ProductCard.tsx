'use server';
import { Box, Card, CardContent, Typography } from '@mui/material';
import ImageSlider from  './ImageSlider'
import { findProductImages } from '@/app/actions/products-actions';
import DescriptionIcon from '@mui/icons-material/Description';
import WspButton from '@/components/WspButton';
import AddImageButton from './AddImageButton';
import DeleteProductButton from './DeleteProductButton';
import EditProductButton from './EditProductbutton';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  whatsapp: string;
  category: string;
}

// Exportando como una función declarada en lugar de una constante
export async function ProductCard({
  id,
  name,
  description,
  price,
  whatsapp,
  category,
}: ProductCardProps){

  const images = await findProductImages(id);

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '70vh',
          borderRadius: '1rem',
          border: '1px solid',
          boxShadow: '0 4px 4px rgba(0, 0, 0, 0.4)',
          color: 'black',
          textAlign: 'center',
        }}
      >
        <Box
          sx={{
            borderBottom: '1px solid',
            width: '100%',
            alignItems: 'left',
          }}
        >
          <Box
            display={'flex'}
            justifyContent={'space-between'}
            px={1}
            alignItems={'center'}
            my={1}
          >
            <Typography
              fontSize={16}
              fontWeight={'bold'}
              textAlign={'left'}
              maxWidth={'60%'}
            >
              {name}
            </Typography>
            <Box display={'inline-block'}>
              <AddImageButton serviceId={id} />
              <EditProductButton productId={id} name={name} description={description} whatsapp={whatsapp} price={price} />
              <DeleteProductButton productId={id} productName={name} />
            </Box>
          </Box>
        </Box>

        <ImageSlider images={images} />

        <Box borderTop={'1px solid'} sx={{ padding: 1 }}>
          <Box>
            <Typography fontSize={14} textAlign={'justify'}>
              <DescriptionIcon fontSize="small" /> {description}
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              marginTop: 1, // Margen entre el texto y los íconos
            }}
          >
            <Box flexGrow={1}>
              <Typography  fontSize={14} textAlign={'justify'}>
                {price.toLocaleString('es-Cl', {
                  style: 'currency',
                  currency: 'CLP',
                })}
              </Typography>
              <Typography fontSize={14} textAlign={'justify'}>
                <strong>{category}</strong>
                
              </Typography>
            </Box>

            <Box sx={{ marginLeft: 1 }}>
              <WspButton phoneNumber={whatsapp ?? ''} />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
