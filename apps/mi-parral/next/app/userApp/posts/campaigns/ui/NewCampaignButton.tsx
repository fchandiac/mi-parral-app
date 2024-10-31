'use client';
import { Box, Button, Dialog, Divider, Typography } from '@mui/material';
import React, { Suspense, useState } from 'react';
import NewCampaignForm from './NewCampaignForm';
import {
  DiscountType,
  refresCampaignsPage,
} from '@/app/actions/campaigns-actions';

import { useRouter } from 'next/navigation';
import { Router } from 'express';

interface NewCampaignButtonProps {
  UserServices: any;
  UserCommerces: any;
  UserPrducts: any;
  userDiscountsTypesList: DiscountType[];
}

export default function NewCampaignButtonButton({
  UserServices,
  UserCommerces,
  UserPrducts,
  userDiscountsTypesList,
}: NewCampaignButtonProps) {
  const [openNewCampaignFormDialog, setOpenNewCampaignFormDialog] =
    useState(false);

  const router = useRouter();

  const handleClose = async () => {
    setOpenNewCampaignFormDialog(false);
    router.push('/userApp/posts/campaigns');
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
          <NewCampaignForm
            UserServices={UserServices}
            UserCommerces={UserCommerces}
            UserProducts={UserPrducts}
            userDiscountsTypesList={userDiscountsTypesList}
            afterSubmit={() => {
              handleClose();
            }}
          />
        </Box>
      </Dialog>
    </>
  );
}
