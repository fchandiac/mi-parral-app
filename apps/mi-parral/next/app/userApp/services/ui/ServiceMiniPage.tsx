import { Box, Typography } from '@mui/material';
import React from 'react';
import ServiceImagesButton from './ServiceImagesButton';
import ServiceWspButton from './ServiceWspButton';

export interface ServiceMiniPageProps {
  id: string | undefined | null;
  image: string | undefined | null;
  name: string | undefined | null;
  price: number | undefined | null;
    categoryName: string | undefined | null;
  description: string | undefined | null;
  whatsapp: string | undefined | null;
}

export default function ServiceMiniPage({
  id,
  image,
  name,
  price,
  categoryName,
  description,
  whatsapp,
}: ServiceMiniPageProps) {


  const urlImage = (imageName: string) => {
    return `http://localhost:3002/images/services/${imageName}`;
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '50vh', // Ajusta la altura según tus necesidades
        backgroundImage: image ? `url(${urlImage(image)})` : 'none',
        backgroundSize: 'cover', // Asegura que la imagen cubra todo el contenedor
        backgroundPosition: 'center', // Centra la imagen
        backgroundRepeat: 'no-repeat', // Evita que la imagen se repita
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          bottom: -2,
          width: '100%',
          height: '70%',
          //background: 'linear-gradient(to top, #88C200 10%, transparent 30%)',
          zIndex: 2, // Asegura que el gradiente esté encima de la imagen de fondo
        }}
      ></Box>
      {/* Contenido de la página */}
      <Box sx={{ position: 'relative', zIndex: 2, height: '100%' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '93%', // O ajusta la altura según sea necesario
            padding: '16px', // Ajusta el padding según tus necesidades
            color: 'white', // Color del texto
            //backgroundColor: 'rgba(0, 0, 0, 0.4)', // Fondo oscuro semitransparente
          }}
        >
          <Box display={'flex'}>
            <Box flexGrow={1}>
              {/* Nombre del servicio */}
              <Typography
                component="div"
                sx={{
                  fontSize: 18, // Ajusta el tamaño de fuente
                  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.9)', // Agrega sombra al texto
                  maxWidth: '70%', // Limita el ancho del texto
                }}
              >
                {name}
              </Typography>
              {/* Precio del servicio */}
              <Typography
                component="div"
                sx={{
                  fontSize: 14, // Ajusta el tamaño de fuente
                  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.9)', // Agrega sombra al texto
                  flexGrow: 1,
                }}
              >
                {price?.toLocaleString('es-CL', {
                  style: 'currency',
                  currency: 'CLP',
                })}
              </Typography>
              <Typography
                component="div"
                sx={{
                  fontSize: 14, // Ajusta el tamaño de fuente
                  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.9)', // Agrega sombra al texto
                }}
              >
                {categoryName ? categoryName : 'Sin categoría'}
              </Typography>
            </Box>
            <Box
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'space-between'}
            >
              <ServiceImagesButton />
              <ServiceWspButton number={whatsapp? whatsapp: ''} />
            </Box>
          </Box>

          <Typography
            component="div"
            sx={{
              fontSize: 12, // Ajusta el tamaño de fuente
              //textShadow: '2px 2px 2px rgba(0, 0, 0, 0.6)',
              marginTop: 'auto', // Agrega sombra al texto
              padding: '8px', // Ajusta el padding según tus necesidades
              borderRadius: '5px', // Ajusta el radio de borde

              backgroundColor: 'rgba(0, 0, 0, 0.4)', // Fondo oscuro semitransparente
            }}
          >
            {description || 'No description available'}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
