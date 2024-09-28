import { Box, IconButton, Typography } from '@mui/material';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

// backgroundColor:  pathname === '/userApp/services' ? 'background.default' : '',

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        height: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        //backgroundColor: 'background.default', // Color de fondo, ajusta según tus necesidades
        backgroundColor: 'primary.main',
        position: 'fixed',
        bottom: 0,
        left: 0,
        zIndex: 1000, // Asegura que el `Box` esté en la parte superior de otros elementos
      }}
    >
      <IconButton
        sx={{ color: 'white' }}
        onClick={() => {
          window.open('https://www.facebook.com/miparral', '_blank');
        }}
      >
        <FontAwesomeIcon icon={faFacebook} />
      </IconButton>
      <IconButton
        sx={{ color: 'white' }}
        onClick={() => {
          window.open('https://www.instagram.com/miparral', '_blank');
        }}
      >
        <FontAwesomeIcon icon={faInstagram} />
      </IconButton>
      <IconButton
        sx={{ color: 'white' }}
        onClick={() => {
          window.open('https://wa.me/1234567890', '_blank');
        }}
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </IconButton>
    </Box>
  );
};

export default Footer;
