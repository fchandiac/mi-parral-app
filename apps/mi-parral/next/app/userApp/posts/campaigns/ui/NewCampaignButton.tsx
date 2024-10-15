'use client';
import { Box, Button, Dialog, Divider, Typography } from '@mui/material';
import React, { useState } from 'react';
import NewCampaignForm from './NewCampaignForm';


interface NewCampaignButtonProps {
  UserServices: any;
  UserCommerces: any;
  UserPrducts: any;

}

export default function NewCampaignButtonButton({ 
    UserServices,
    UserCommerces,
    UserPrducts,
 }: NewCampaignButtonProps) {
  const [openNewCampaignFormDialog, setOpenNewCampaignFormDialog] = useState(false);

  const handleClose = async () => {
    setOpenNewCampaignFormDialog(false);
  };
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setOpenNewCampaignFormDialog(true)}
        sx={{
          mb: 2,
        }}
      >
        Nueva Campaña de Descuentos
      </Button>

      <Dialog
        open={openNewCampaignFormDialog}
        onClose={() => setOpenNewCampaignFormDialog(false)}
        fullWidth
      >
        <Box p={1}>
          <Typography variant="h5" align="left" pb={2}>
          Nueva Campaña de Descuentos
          </Typography>
          <NewCampaignForm UserServices={UserServices} UserCommerces={UserCommerces} UserProducts={UserPrducts} />
          
          
        </Box>
      </Dialog>
    </>
  );
}
