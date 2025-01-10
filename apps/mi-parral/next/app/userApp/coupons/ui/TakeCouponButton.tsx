'use client'
import React from 'react'
import Button from '@mui/material/Button'
import { updateCouponStatus } from '@/app/actions/coupons-actions';

export default function TakeCouponButton(
    { status, id }: { status: number; id: string }
) {

    const handleTakeCoupon = async () => {
        await updateCouponStatus(id, 1);
    }
  return (
    <Button
    variant="contained"
    onClick={handleTakeCoupon}
    sx={{
      position: 'absolute',
      top: 10,
      right: 10,
      padding: '5px 10px',
      borderRadius: '12px',
      backgroundColor: '#cddc39', // Color de fondo verde si status es 0
      color: 'black', // Color de texto negro
      '&:hover': {
        backgroundColor: '#e6ee9c', // Color cuando se pasa el mouse
      },
    }}
  >
    Atrapalo
  </Button>
  )
}
