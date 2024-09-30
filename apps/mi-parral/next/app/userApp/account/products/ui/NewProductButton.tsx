'use client';
import { Box, Button, Dialog, Typography } from '@mui/material';
import React, { useState } from 'react';
// Asegúrate de crear este componente para el formulario

export default function NewProductButton() {
  const [openNewProductFormDialog, setOpenNewProductFormDialog] = useState(false);

  const handleClose = async () => {
    setOpenNewProductFormDialog(false);
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setOpenNewProductFormDialog(true)}
        sx={{
          mb: 2,
        }}
      >
        Nuevo Producto
      </Button>

      <Dialog
        open={openNewProductFormDialog}
        onClose={() => setOpenNewProductFormDialog(false)}
        fullWidth
      >
        <Box p={1}>
          <Typography variant="h5" align="left" pb={2}>
            Nuevo Producto
          </Typography>
            {/* Asegúrate de crear este componente para el formulario */}
            {/* <NewProductForm onClose={handleClose} /> */}
        </Box>
      </Dialog>
    </>
  );
}
