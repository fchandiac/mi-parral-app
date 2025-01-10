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
import { deleteCommerce } from '@/app/actions/commerces-actions';

interface DeleteCommerceButtonProps {
  commerceId: string;
  commerceName: string | null;
}

export default function DeleteCommerceButton({
  commerceName,
  commerceId,
}: DeleteCommerceButtonProps) {
  const [openDeleteCommerceDialog, setOpenDeleteCommerceDialog] = useState(false);

  const handleClick = async() => {
    await deleteCommerce(commerceId);
    setOpenDeleteCommerceDialog(false);

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
        onClick={() => setOpenDeleteCommerceDialog(true)}
      >
        <DeleteIcon
          sx={{
            fontSize: 20,
          }}
        />
      </IconButton>

      <Dialog
        open={openDeleteCommerceDialog}
        onClose={() => setOpenDeleteCommerceDialog(false)}
        fullWidth
      >
        <Box p={1}>
          <Typography variant="h5" align="left" pb={2}>
            Eliminar Servicio
          </Typography>
          <Alert severity="error">
            ¿Estás seguro que deseas eliminar el commercio "{commerceName}"?
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
