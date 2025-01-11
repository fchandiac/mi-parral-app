'use client'
import React from 'react';
import { Box, Typography, Container, IconButton } from '@mui/material';
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ComingSoonPage() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        px: 2,

      }}
    >
      {/* Logo */}
      <Box
        component="img"
        src="/logoBlack.svg"
        alt="MiParral Logo"
        sx={{
          width: { xs: 150, sm: 200, md: 250 },
          mb: 4,
        }}
      />

      {/* Message */}
      <Container maxWidth="sm">
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 2,
          }}
        >
          ¡Próximamente en miparral.app!
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '1rem', sm: '1.125rem' },
            lineHeight: 1.8,
            mb: 3,
          }}
        >
          Estamos trabajando para que pronto puedas disfrutar de todos los beneficios de 
          <strong> miparral.app</strong>. Descubre descuentos personalizados, ofertas 
          increíbles, productos únicos y servicios de calidad en tu localidad. Conecta 
          con los mejores comercios y haz tus días más fáciles y emocionantes.
        </Typography>

        {/* Gratitude Message */}
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '1rem', sm: '1.125rem' },
            lineHeight: 1.8,
          }}
        >
          Gracias por completar tu registro. Nos aseguraremos de mantenerte informado sobre 
          las actualizaciones y novedades de <strong>miparral.app</strong>. Muy pronto 
          recibirás más detalles en tu correo electrónico.
        </Typography>
       
      </Container>
        <Box
           sx={{
             height: '60px',
             display: 'flex',
             justifyContent: 'center',
             alignItems: 'center',
             width: '100%',
             //backgroundColor: 'background.default', // Color de fondo, ajusta según tus necesidades
        color: 'white',
      
             bottom: 0,
             left: 0,
             zIndex: 1000, // Asegura que el `Box` esté en la parte superior de otros elementos
           }}
         >
           <IconButton
             sx={{ color: 'white' }}

             onClick={() => {
               window.open('https://www.facebook.com/miparralapp?mibextid=wwXIfr&rdid=K3em7VEMEshcqkk2&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19nTLJVGA5%2F%3Fmibextid%3DwwXIfr', '_blank');
             }}
           >
             <FontAwesomeIcon
             fontSize={40}
              icon={faFacebook} />
           </IconButton>
           {/* <IconButton
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
           </IconButton> */}
         </Box>
    </Box>
  );
}
