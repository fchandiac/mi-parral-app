'use client';
import { Box, Button, Dialog, Divider, Typography } from '@mui/material';
import React, { useState } from 'react';
import NewServiceForm from './NewServiceForm';
import { refreshImagesServices } from '@/app/actions/services-actions';


export default function NewServiceButton({ categories }: any) {
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
        Nuevo Servicio
      </Button>

      <Dialog
        open={openNewServiceFormDialog}
        onClose={() => setOpenNewServiceFormDialog(false)}
   
        fullWidth
      >
        <Box p={1}
    
        >
          <Typography variant="h5" align="left" pb={2} >
            Nuevo Servicio
          </Typography>
          <NewServiceForm onClose={handleClose} categories={categories}/>
        </Box>
      </Dialog>
    </>
  );
}
