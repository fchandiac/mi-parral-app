import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import moment from 'moment';
import TakeCouponButton from './TakeCouponButton';

const imagesUrl = process.env.NEXT_PUBLIC_IMAGES_BACKEND_URL;

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

export default function CouponCard({
  id = 'fe5d3ad6-8de3-4a72-bafd-2258fb7c5b7c',
  status = 0,
  expire = new Date(),
  rules = 'Sin Reglas',
  discount = 0,
  image = 'default.jpg',
  referenceName = 'Sin Referencia',
  referenceType = 0,
}: CouponCardProps) {
  // Función para obtener la URL de la imagen en base al tipo de referencia
  const getImageUrl = (imageName: string) => {
    if (referenceType === 0) return `${imagesUrl}/images/services/${imageName}`;
    if (referenceType === 1) return `${imagesUrl}/images/products/${imageName}`;
    if (referenceType === 2)
      return `${imagesUrl}/images/commerces/${imageName}`;
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
      {/* Parte izquierda con información del cupón */}
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
          alignItems: 'center',
          position: 'relative',
        }}
      >
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

      {/* Parte derecha con el botón para tomar el cupón */}
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
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <TakeCouponButton status={status} id={id} />
      </Box>
    </Box>
  );
}
