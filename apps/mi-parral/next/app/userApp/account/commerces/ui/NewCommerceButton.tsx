'use client';
import { Box, Button, Dialog, Divider, Typography } from '@mui/material';
import React, { useState } from 'react';
import NewCommerceForm from './NewCommerceForm';
// import NewServiceForm from './NewServiceForm';
// import { refreshImagesServices } from '@/app/actions/services-actions';

export default function NewCommerceButton() {
  const [openNewServiceFormDialog, setOpenNewServiceFormDialog] =
    useState(false);

  const handleClose = async () => {
    setOpenNewServiceFormDialog(false);
  };
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setOpenNewServiceFormDialog(true)}
        sx={{
          mb: 2,
        }}
      >
        Nuevo Comercio
      </Button>

      <Dialog
        open={openNewServiceFormDialog}
        onClose={() => setOpenNewServiceFormDialog(false)}
        fullWidth
      >
        <Box p={1}>
          <Typography variant="h5" align="left" pb={2}>
            Nuevo Comercio
          </Typography>
          <NewCommerceForm onClose={handleClose} />
        </Box>
      </Dialog>
    </>
  );
}
