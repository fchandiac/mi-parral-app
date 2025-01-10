'use client';
import { Box, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';
import { deleteCoupon } from '@/app/actions/coupons-actions';

type DeleteCouponButtonProps = {
  id: string;
};

export default function DeleteCouponButton({ id }: DeleteCouponButtonProps) {

  return (
    <Box textAlign={'right'}>
      <IconButton size="small" 
        onClick={async () => {
            console.log('Deleting coupon with id:', id);
          await deleteCoupon(id);
        }}  
      >
        <DeleteIcon />
      </IconButton>
    </Box>
  );
}
