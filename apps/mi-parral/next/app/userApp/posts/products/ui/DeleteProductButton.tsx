'use client';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Dialog,
  IconButton,
  Box,
  Typography,
  Alert,
  Button,
} from '@mui/material';
import { deleteProduct } from '@/app/actions/products-actions';

interface DeleteProductButtonProps {
  productId: string;
  productName: string;
}

export default function DeleteProductButton({
  productId,
  productName
}: DeleteProductButtonProps) {
  const [openDeleteProductDialog, setOpenDeleteProductDialog] = useState(false);

  const handleClick = async() => {
    await deleteProduct(productId);
    setOpenDeleteProductDialog(false);

  };
  return (
    <>
      <IconButton
        aria-label="edit"
        color="primary"
        size="small"
        sx={{
          border: '1px solid',
          borderColor: 'rgba(0, 0, 0, 0.5)',
          ml: 0.4,
        }}
        onClick={() => setOpenDeleteProductDialog(true)}
      >
        <DeleteIcon
          sx={{
            fontSize: 20,
          }}
        />
      </IconButton>

      <Dialog
        open={openDeleteProductDialog}
        onClose={() => setOpenDeleteProductDialog(false)}
        fullWidth
      >
        <Box p={1}>
          <Typography variant="h5" align="left" pb={2}>
            Eliminar Servicio
          </Typography>
          <Alert severity="error">
            ¿Estás seguro que deseas eliminar el servicio "{productName}"?
          </Alert>
          <Box textAlign={'right'}>
            <Button variant="contained" color="primary" sx={{ mt: 2 }}
                onClick={handleClick}
            >
              Eliminar
            </Button>
          </Box>
        </Box>
      </Dialog>
    </>
  );
}
