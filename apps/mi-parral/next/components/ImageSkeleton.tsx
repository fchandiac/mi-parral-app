import { Box, Skeleton } from '@mui/material';
import React from 'react';

export default function BinaryStarSkeleton() {
  return (
    <Box
      sx={{
        position: 'relative',
         // Fondo blanco del marco
        //borderRadius: 2, // Bordes suaves
        //boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)', // Sombra clásica de Polaroid
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '1rem',
        //border: '1px solid #DDD', // Bordes finos para darle más realismo
   
        margin: 'auto',
      }}
    >
      {/* Área de la imagen */}
      <Box
        sx={{
          width: '100%',
          //height: '30vh', // Altura del área de la "foto"
          backgroundColor: '#E0E0E0', // Color de fondo del "esqueleto"
          position: 'relative',
          borderRadius: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* Contenedor de estrellas binarias */}
        <Box
          sx={{
            position: 'relative',
            height: '20vh',
          }}
        >
          {/* Primera estrella */}
          <Skeleton
            variant="circular"
            width={'6vh'}
            height={'6vh'}
            sx={{
              borderRadius: '50%',
              position: 'absolute',
              top: '30%',
              left: '50%',
              transform: 'translateX(-50%)',
              animation: 'spinClockwise 3s linear infinite',
            }}
          />

          {/* Segunda estrella */}
          <Skeleton
            variant="circular"
            width={'2vh'}
            height={'2vh'}
    
            sx={{
              position: 'absolute',
              bottom: '50%',
              left: '50%',
              transform: 'translateX(-770%)',
              animation: 'spinClockwise 3s linear infinite',
            }}
          />
        </Box>
      </Box>

      {/* Pie de foto como en las Polaroid */}
      <Box
        sx={{
          height:'5vh',
          width: '100%',
          marginTop: '1rem',
          justifyContent: 'right',
          alignItems: 'right',
          color: '#555',
          fontFamily: 'Arial, sans-serif',
          display: 'flex',
        }}
      >

      
         <Skeleton
          variant={'rounded'}
          width={'20vh'}
          height={'2vh'}
          
       
       
        />
      </Box>

      {/* Animaciones CSS */}
      <style jsx>{`
        @keyframes spinClockwise {
          0% {
            transform: translateX(-50%) rotate(0deg) translateY(-50%);
          }
          100% {
            transform: translateX(-50%) rotate(360deg) translateY(-50%);
          }
        }

        @keyframes spinCounterClockwise {
          0% {
            transform: translateX(-50%) rotate(0deg) translateY(-50%);
          }
          100% {
            transform: translateX(-50%) rotate(-360deg) translateY(-50%);
          }
        }
      `}</style>
    </Box>
  );
}
