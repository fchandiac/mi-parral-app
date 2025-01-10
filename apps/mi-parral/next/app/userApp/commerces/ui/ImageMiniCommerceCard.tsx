'use client';
import { Box } from '@mui/material';
import React, { Suspense } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

export interface ImageMiniCommerceCardType {
  commerceId: string;
  imageUrl: string;
  children: React.ReactNode;
}

const ImageMiniCommerceCard: React.FC<ImageMiniCommerceCardType> = ({
  commerceId,
  imageUrl,
  children,
}) => {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  // Función para actualizar los parámetros de búsqueda
  const updateSearchParam = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString()); // Asegúrate de convertir query a cualquier tipo necesario
    if (value !== '' && value !== null) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    // Reemplaza la URL sin recargar la página
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <Box
        onClick={() => updateSearchParam('commerceId', commerceId)}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          height: '20vh',
          width: '20vh',

          borderRadius: 3,
          backgroundImage: `url(${imageUrl})`, // Usa la propiedad image para el background
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          color: '#fff',
          overflow: 'hidden',
          ml: 1,
          my: 1,
        }}
      >
        {children}
      </Box>
    </Suspense>
  );
};

export default ImageMiniCommerceCard;
