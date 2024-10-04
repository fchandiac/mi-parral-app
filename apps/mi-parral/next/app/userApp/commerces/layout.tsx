import React from 'react';
import { Box } from '@mui/material';

export default function Layout({
  children,
 
}: {
  children: React.ReactNode;
}) {
  
  return (
    <>
      <Box
        sx={{
          mt: '60px',
          height: '54vh',
          justifyContent: 'center',
          alignItems: 'center',
          //pb: 'auto',
          px: { xs: 0, sm: 0, md: '30vw', lg: '30vw' }, // Optional padding for header}
          //backgroundColor: 'background.default',
          //backgroundColor: 'primary.main', // Optional background color for header
        }}
      >
        {children}
      </Box>


    </>
  );
}
