import { Box, Skeleton } from '@mui/material';
import React from 'react';

export default function MiniCardSkeleton() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        height: '20vh',
        width: '20vh',
        borderRadius: 3,
        position: 'relative',
        overflow: 'hidden',
        ml: 1,
        my: 1,
      }}
    >
      <Skeleton
        variant="rectangular"
        sx={{
          height: '100%',
          width: '100%',
          borderRadius: 3,
        }}
      />
    </Box>
  );
}
