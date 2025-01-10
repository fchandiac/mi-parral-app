'use client';
import { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { Dialog, IconButton, Box, Typography } from '@mui/material';
import EditCommerceForm from './EditCommerceForm';


interface EditCommerceButtonProps {
    commerceId: string;
    commerceName: string | null;
    whatsapp: string | null;
    address: string | null;
    location: string | null;
    description: string | null;
  }

export default function EditCommerceButton({
    commerceName,
    commerceId,
    whatsapp,
    address,
    location,
    description,
  
}: EditCommerceButtonProps) {
  const [openEditCommerceDialog, setOpenEditCommerceDialog] = useState(false);
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
        onClick={() => setOpenEditCommerceDialog(true)}
      >
        <EditIcon
          sx={{
            fontSize: 20,
          }}
        />
      </IconButton>

      <Dialog
        open={openEditCommerceDialog}
        onClose={() => setOpenEditCommerceDialog(false)}
        fullWidth
      >
        <Box p={1}>
          <Typography variant="h5" align="left" pb={2}>
            Editar Comercio {commerceName}
          </Typography>
          <EditCommerceForm
            commerceId={commerceId}
            onClose={() => setOpenEditCommerceDialog(false)}
            initialData={
              {
                name: commerceName,
                description: description,
                whatsapp: whatsapp,
                address: address,
                location: location,
              }
            }
          />
        </Box>
      </Dialog>
    </>
  );
}
