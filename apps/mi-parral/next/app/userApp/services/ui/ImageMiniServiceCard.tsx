'use client';
import { Box } from '@mui/material';
import React from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

export interface ImageMiniServiceCardType {
  serviceId: string;
  imageUrl: string;
  children: React.ReactNode;
}

const ImageMiniServiceCard: React.FC<ImageMiniServiceCardType> = ({
  serviceId,
  imageUrl,
  children,
}) => {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  // Función para actualizar los parámetros de búsqueda
  const updateSearchParam = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString()); // Asegúrate de convertir query a cualquier tipo necesario
    // Añadir el nuevo parámetro 'showService'
    params.set('showService', 'true');

    if (value !== '' && value !== null) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    // Reemplaza la URL sin recargar la página
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Box
      onClick={() => updateSearchParam('serviceId', serviceId)}
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
  );
};

export default ImageMiniServiceCard;


