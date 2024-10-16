'use client';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { Box, IconButton } from '@mui/material';


export default function ExpandCommercesButton() {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const showCommerce = searchParams.get('showCommerce') === 'true';

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
    <>
      <Box>
        <IconButton
          sx={{
            color: 'white',
          }}
          onClick={() => {
            updateSearchParam(
              'showCommerce',
              showCommerce === true ? 'false' : 'true',
            );
          }}
        >
          {showCommerce === true ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
      </Box>
    </>
  );
}
