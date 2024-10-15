'use client';
import ImageSlider from './ImageSlider'
import CollectionsIcon from '@mui/icons-material/Collections';
import { Box, Button, Dialog, IconButton } from '@mui/material';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { findCommerceImages } from '@/app/actions/commerces-actions';

export default function CommerceImagesButton() {
  const [openImagesDialog, setOpenImagesDialog] = useState(false);
  const searchParams = useSearchParams();
  const commerceId = searchParams.get('commerceId');
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const images = await findCommerceImages(commerceId as string);
    setImages(images);
  };

  return (
    <>
      <IconButton
        onClick={() => {
          getImages();
          setOpenImagesDialog(true);
        }}
        sx={{
          backgroundColor: 'primary.main',
          color: 'background.default',
          ':hover': {
            backgroundColor: 'primary.main',
            color: 'white',
          },
        }}
      >
        <CollectionsIcon />
      </IconButton>
      <Dialog
        open={openImagesDialog}
        onClose={() => setOpenImagesDialog(false)}
        fullScreen
        sx={{
            '& .MuiDialog-paper': {
              backgroundColor: 'rgba(0, 0, 0, 0.7)', // Fondo oscuro con transparencia
            },
            '& .MuiBackdrop-root': {
              backgroundColor: 'rgba(0, 0, 0, 0.7)', // Fondo de la capa de respaldo oscuro
            },
          }}
        

    
      >
        <Box
          sx={{
        
            direction: 'column',
            justifyContent: 'center',
            height: '50vh',
            mt: '20vh',
            textAlign: 'center',
          }}
        >
          <ImageSlider images={images} />
          <Button
            onClick={() => setOpenImagesDialog(false)}
            variant='text'
            sx={{
              color: 'white',
            }}  
            >
            Cerrar
            </Button>

        </Box>
      </Dialog>
    </>
  );
}
