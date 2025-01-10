'use client';
import { useState } from 'react';
import { Box, Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIos';
import ImageSkeleton from '../../../../components/ImageSkeleton';
const imagesUrl = process.env.NEXT_PUBLIC_IMAGES_BACKEND_URL;

interface Image {
  id: string;
  productId: string;
  image: string; // URL de la imagen
}

interface ImageSliderProps {
  images: Image[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const urlImage = (imageName: string) => {
    return `${imagesUrl}/images/products/${imageName}`;
  };

  // Avanzar al siguiente slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Retroceder al slide anterior
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      {images.length === 0 ? (
        <ImageSkeleton />
      ) : (
        <>
          {/* Contenedor de Imagen */}
          <Box
            sx={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              
              // px: { xs: 0, sm: 0, md: '30vw', lg: '30vw' },
            }}
          >
            {/* Imagen actual */}
            <Box
              component="img"
              src={urlImage(images[currentIndex].image)} // Accede a la URL de la imagen
              alt={`Slide ${currentIndex + 1}`}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover', // Mantiene el aspecto sin recortar la imagen
              }}
            />
          </Box>

          {/* Botón para retroceder */}
          <Button
            onClick={prevSlide}
            sx={{
              position: 'absolute',
              top: '50%',
              left: '10px',
              transform: 'translateY(-50%)',
              zIndex: 1,
              backgroundColor: 'rgba(0,0,0,0.2)',
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.7)',
              },
            }}
          >
            <ArrowBackIosNewIcon />
          </Button>

          {/* Botón para avanzar */}
          <Button
            onClick={nextSlide}
            sx={{
              position: 'absolute',
              top: '50%',
              right: '10px',
              transform: 'translateY(-50%)',
              zIndex: 1,
              backgroundColor: 'rgba(0,0,0,0.2)',
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.7)',
              },
            }}
          >
            <ArrowForwardIosIcon />
          </Button>
        </>
      )}
    </Box>
  );
};

export default ImageSlider;
