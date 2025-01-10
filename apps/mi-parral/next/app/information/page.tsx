import React from 'react';
import { Box, Typography, Container } from '@mui/material';

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
    </Box>
  );
}
