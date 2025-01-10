import React from 'react';
import { Box, Typography } from '@mui/material';
import moment from 'moment';
import ChangeCouponButton from './ChangeCouponButton';

// Obtener la URL base de las imágenes desde las variables de entorno
const imagesUrl = process.env.NEXT_PUBLIC_IMAGES_BACKEND_URL;

// Interfaz para definir las propiedades del componente
interface CouponCardProps {
  id: string;
  status: number;
  expire: Date;
  rules: string;
  discount: number;
  image: string;
  referenceName: string;
  referenceType: number;
}

const CouponCard: React.FC<CouponCardProps> = ({
  id = 'fe5d3ad6-8de3-4a72-bafd-2258fb7c5b7c',
  status = 0,
  expire = new Date(),
  rules = 'Sin Reglas',
  discount = 0,
  image = 'default.jpg',
  referenceName = 'Sin Referencia',
  referenceType = 0,
}) => {
  // Función para obtener la URL de la imagen en base al tipo de referencia
  const getImageUrl = (imageName: string) => {
    switch (referenceType) {
      case 0:
        return `${imagesUrl}/images/services/${imageName}`;
      case 1:
        return `${imagesUrl}/images/products/${imageName}`;
      case 2:
        return `${imagesUrl}/images/commerces/${imageName}`;
      default:
        return `${imagesUrl}/images/default/${imageName}`;
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: '23vh',
        borderRadius: 2,
      }}
    >
      <Box
        sx={{
          width: '40%',
          height: '100%',
          borderRadius: '8px 0 0 8px',
          backgroundImage: `url(${getImageUrl(image)})`,
          backgroundSize: 'cover',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'center', // Centra horizontalmente
          position: 'relative',
        }}
      >
        {/* Contenedor con la información del cupón */}
        <Box
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
            width: '100%',
            height: '100%',
            borderRadius: '8px 0 0 8px',
            textAlign: 'center',
          }}
        >
          <Typography fontSize={14} fontWeight="bold" p={1}>
            {referenceName}
          </Typography>
          <Box
            sx={{
              height: 20,
              width: '80%',
              backgroundColor: 'yellow',
              marginLeft: '10%',
              color: '#1D1D1D',
            }}
          >
            <Typography fontSize={12}>{discount}% de Descuento</Typography>
          </Box>

          <Box
            sx={{
              padding: 0.5,
              height: '40%',
            }}
          >
            <Typography fontSize={12}>{rules}</Typography>
          </Box>

          <Typography fontSize={12}>
            Vence: {moment(expire).format('DD-MM-YYYY')}
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          width: '60%',
          height: '100%',
          borderRadius: '0 8px 8px 0',
          backgroundImage: `url(${getImageUrl(image)})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'center', // Centra horizontalmente
          position: 'relative',
          filter: status !== 1 ? 'grayscale(100%)' : 'none',
        }}
      >
        {status == 1 && (
          <ChangeCouponButton
            id={id}
            image={getImageUrl(image)}
            discount={discount}
            referenceName={referenceName}
            rules={rules}
            expire={expire}
          />
        )}

        {status == 2 && (
          <Box
            sx={{
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              color: 'white',
              width: '100%',
              height: '100%',
              borderRadius: '0 8px 8px 0',
              textAlign: 'center',
            }}
          >
      
            <Box
              sx={{
                height: 20,
                width: '80%',
                backgroundColor: 'yellow',
                marginLeft: '10%',
                color: '#1D1D1D',
                marginTop:'70%'
              }}
            >
              <Typography fontSize={12}>Descuento Utilizado</Typography>
            </Box>

          
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default CouponCard;
