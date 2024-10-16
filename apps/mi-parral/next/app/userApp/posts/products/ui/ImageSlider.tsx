'use client';
import { useState } from 'react';
import { Box, Button, IconButton, Skeleton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ImageSkeleton from '@/components/ImageSkeleton';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import DeleteIcon from '@mui/icons-material/Delete';
import { setPrincipalProductImage, deleteProductImage } from '@/app/actions/products-actions';
const imagesUrl = process.env.NEXT_PUBLIC_IMAGES_BACKEND_URL;


interface Image {
  id: string;
  productId: string;
  image: string;
  principal: boolean;
}

interface ImageSliderProps {
  images: Image[];
}


const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const urlImage = (imageName: string) => {
    return `${imagesUrl}/images/products/${imageName}`;
  };

  const setPrincipalIamage = async (productId: string, imageId: string) => {
    const update = await setPrincipalProductImage(productId, imageId);
  }

  const deleteImage = async (imageId: string) => {
    const deleted = await deleteProductImage(imageId);
  }


  // Avanzar al siguiente slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  // Retroceder al slide anterior
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      {images.length === 0 ? (
        // Mostrar Skeleton cuando no hay imágenes
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
            }}
          >
            {/* Imagen actual */}
            <Box
              component="img"
              src={urlImage(images[currentIndex].image)} // Accede a la URL de la imagen
              alt={`Slide ${currentIndex + 1}`}
              sx={{
                width: '100%', // Asegura que la imagen ocupe todo el ancho del contenedor
                height: '100%', // Asegura que la imagen ocupe toda la altura del contenedor
                objectFit: 'cover', // Ajusta la imagen para cubrir todo el contenedor, recortando si es necesario
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

          <IconButton
          size="small"
          onClick={() => setPrincipalIamage(images[currentIndex].productId, images[currentIndex].id)}
          sx={{
            position: 'absolute',
            right:  0,
            bottom: 0,
            mr: 7,
            mb: 1,
            backgroundColor: 'rgba(0,0,0,0.2)',
            color: 'white',
            '&:hover': {
              backgroundColor: 'rgba(0,0,0,0.7)',
            }
          }}
          >
            {images[currentIndex].principal ? <StarIcon /> : <StarBorderIcon />}
          </IconButton>

          <IconButton
          size='small'
          onClick={() => deleteImage(images[currentIndex].id)}
          sx={{
            position: 'absolute',
            right:  0,
            bottom: 0,
            mr: 1,
            mb: 1,
            backgroundColor: 'rgba(0,0,0,0.2)',
            color: 'white',
            '&:hover': {
              backgroundColor: 'rgba(0,0,0,0.7)',
            },
          }}
          >
            <DeleteIcon />
          </IconButton>
        </>
      )}
    </Box>
  );
};

export default ImageSlider;
