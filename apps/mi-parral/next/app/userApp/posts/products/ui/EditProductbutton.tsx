'use client';
import { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { Dialog, IconButton, Box, Typography } from '@mui/material';
import EditProductForm from './EditProductForm';


interface EditProductButtonProps {
  productId: string;
  name: string | null;
  description: string | null;
  whatsapp: string | null;
  price: number | null;
}

export default function EditProductButton({
  productId,
  name,
  description,
  whatsapp,
  price,
}: EditProductButtonProps) {
  const [openEditDialog, setOpenEditDialog] = useState(false);
  return (
    <>
      <IconButton
        aria-label="edit"
        color="primary"
        size="small"
        sx={{
          border: '1px solid',
          borderColor: 'rgba(0, 0, 0, 0.5)',
          ml: 1.5,
        }}
        onClick={() => setOpenEditDialog(true)}
      >
        <EditIcon
          sx={{
            fontSize: 20,
          }}
        />
      </IconButton>
      <Dialog open={openEditDialog} onClose={() => setOpenEditDialog(false)}     fullWidth>
        <Box p={1}>
          <Typography variant="h5" align="left" pb={2}>
            Editar Servicio {name}
          </Typography>
        <EditProductForm 
          productId={productId}
          initialData={{name, description, whatsapp, price}}
          onClose={() => setOpenEditDialog(false)}
        />
        </Box>
      </Dialog>
    </>
  );
}
