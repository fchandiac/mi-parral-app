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
import { deleteService } from '@/app/actions/services-actions';

interface DeleteServiceButtonProps {
  serviceId: string;
  serviceName: string;
}

export default function DeleteServiceButton({
  serviceName,
  serviceId,
}: DeleteServiceButtonProps) {
  const [openDeleteServiceDialog, setOpenDeleteServiceDialog] = useState(false);

  const handleClick = async() => {
    await deleteService(serviceId);
    setOpenDeleteServiceDialog(false);

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
        onClick={() => setOpenDeleteServiceDialog(true)}
      >
        <DeleteIcon
          sx={{
            fontSize: 20,
          }}
        />
      </IconButton>

      <Dialog
        open={openDeleteServiceDialog}
        onClose={() => setOpenDeleteServiceDialog(false)}
        fullWidth
      >
        <Box p={1}>
          <Typography variant="h5" align="left" pb={2}>
            Eliminar Servicio
          </Typography>
          <Alert severity="error">
            ¿Estás seguro que deseas eliminar el servicio "{serviceName}"?
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
