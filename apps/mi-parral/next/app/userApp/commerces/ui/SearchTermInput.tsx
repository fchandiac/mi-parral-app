'use client';

import { Grid, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { Suspense } from 'react';

export default function SearchTermInput() {
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
      <Grid container spacing={0} direction={'column'} padding={1}>
        <Grid item>
          <TextField
            id="searchTerm"
            variant="outlined"
            fullWidth
            size="small"
            placeholder="Buscar..."
            autoComplete="off"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            onChange={(e) => updateSearchParam('searchTerm', e.target.value)}
          />
        </Grid>
      </Grid>
    </Suspense>
  );
}
