import { Box, Typography } from '@mui/material';
import React from 'react';

type CampaingCardProps = {
    name: string;
    rules?: string; // Opcional
  };

export default function CampaingCard( {name,rules}: CampaingCardProps) {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '70vh',
          borderRadius: '1rem',
          border: '1px solid',
          boxShadow: '0 4px 4px rgba(0, 0, 0, 0.4)',
          color: 'black',
          textAlign: 'center',
        }}
      >
        <Box
          sx={{
            borderBottom: '1px solid',
            width: '100%',
            alignItems: 'left',
          }}
        >
          <Box
            display={'flex'}
            justifyContent={'space-between'}
            px={1}
            alignItems={'center'}
            my={1}
          >
            <Typography
              fontSize={16}
              fontWeight={'bold'}
              textAlign={'left'}
              flexGrow={1}
              maxWidth={'60%'}
            >
                {name}
            </Typography>
          </Box>
        </Box>

        <Box borderTop={'1px solid'} sx={{ padding: 1 }}>
          <Box>
            <Typography fontSize={14} textAlign={'justify'}>
              {rules}
            </Typography>
          </Box>    
        </Box>
      </Box>
    </>
  );
}
