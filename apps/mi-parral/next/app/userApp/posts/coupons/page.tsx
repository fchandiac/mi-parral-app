import React from 'react';
import { findAllCouponsByUserId } from '@/app/actions/coupons-actions';
import { Box, Grid } from '@mui/material';
import CouponCard from './ui/CouponCard';

export default async function CouponsUserPage() {
  const coupons = await findAllCouponsByUserId();


  return (
    <>
      <Box
        px={{ xs: '2vw', sm: '16vw', md: '12vw' }}
        mt={7}
        mb={10}
        minWidth={'330px'}
        pt={2}
      >
        <Grid container spacing={1}>
          {coupons.map((coupon: any) => (
            <Grid item key={coupon.id} xs={12} sm={6} md={4}>
              <CouponCard
                id={coupon.id}
                status={coupon.status}
                expire={coupon.expire}
                rules={coupon.rules}
                discount={coupon.discount}
                image={coupon.reference.image}
                referenceName={coupon.reference.name}
                referenceType={coupon.reference.type}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
