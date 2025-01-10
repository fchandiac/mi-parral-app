import { Box, IconButton, Typography } from '@mui/material';
import React from 'react';
import { DiscountStatus } from '@/app/actions/campaigns-actions';
import { getUserById } from '@/app/actions/auth-actions';
import { deleteCoupon } from '@/app/actions/coupons-actions';
import moment from 'moment';
import DeleteIcon from '@mui/icons-material/Delete';
import { revalidatePath } from 'next/cache';
import DeleteCouponButton from './DeleteCouponButton';

interface CouponToCard {
  id: string;
  status: number;
  userId: string | null;
  validationUserId: string | null;
  validationDate: Date | null;
  updatedAt: Date;
  deletedAt: Date | null;
}

export default async function CouponMiniCard(coupon: CouponToCard) {
  const userCoupon = coupon.userId? await getUserById(coupon.userId): 'N/A';
  const userValidation = coupon.validationUserId
    ? await getUserById(coupon.validationUserId)
    : 'N/A';
  const validationDate = coupon.validationDate ? coupon.validationDate : 'N/A';

  const getStatusText = (status: DiscountStatus) => {
    switch (status) {
      case DiscountStatus.CREATED:
        return 'Disponible';
      case DiscountStatus.TAKEN:
        return 'Tomado';
      case DiscountStatus.REDEEMED:
        return 'Canjeado';
      case DiscountStatus.EXPIRED:
        return 'Expirado';
      case DiscountStatus.DELETED:
        return 'Eliminado';
      default:
        return 'N/A';
    }
  };

  const getStatusColor = (status: DiscountStatus) => {
    switch (status) {
      case DiscountStatus.CREATED:
        return '#4caf50';
      case DiscountStatus.TAKEN:
        return '#ffff00';
      case DiscountStatus.REDEEMED:
        return '#448aff';
      case DiscountStatus.EXPIRED:
        return 'red';
      case DiscountStatus.DELETED:
        return 'gray';
      default:
        return 'black';
    }
  };

  const handleDeleteCoupon = async () => {
    const deletedCoupon = await deleteCoupon(coupon.id);

    return deletedCoupon;
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 2,
        border: '1px solid',
        boxShadow: '0 4px 4px rgba(0, 0, 0, 0.4)',
        color: 'black',
        textAlign: 'left',
        padding: 1,
        backgroundColor: '#fce4ec',
      }}
    >
      <Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'left',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              width: 15,
              height: 15,
              backgroundColor: getStatusColor(coupon.status),
              borderRadius: '50%',
            }}
          />
          <Typography fontSize={12} paddingLeft={1}>
            {getStatusText(coupon.status)}
          </Typography>
        </Box>
        <Typography fontSize={9}>Usuario: {userCoupon.name}</Typography>
        <Typography fontSize={9}>Validador: {userValidation}</Typography>
        <Typography fontSize={9}>
          Fecha de validación:{' '}
          {coupon.validationDate
            ? moment(coupon.validationDate).format('DD-MM-YYYY HH:mm:ss')
            : 'N/A'}
        </Typography>
        {/* <DeleteCouponButton id={coupon.id} /> */}
      </Box>
    </Box>
  );
}
