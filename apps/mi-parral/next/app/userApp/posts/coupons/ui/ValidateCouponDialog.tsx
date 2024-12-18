import React from 'react';
import { Box, Dialog, DialogTitle, Typography } from '@mui/material';
import moment from 'moment';
import QRCode from 'react-qr-code';
import { revalidateMyCoupons } from '@/app/actions/coupons-actions';

const imagesUrl = process.env.NEXT_PUBLIC_IMAGES_BACKEND_URL;

interface ValidateCouponDialogProps {
  open: boolean;
  onClose: () => void;
  id: string;
  image: string;
  discount: number;
  referenceName: string;
  rules: string;
  expire: Date;
}

const ValidateCouponDialog: React.FC<ValidateCouponDialogProps> = ({
  open,
  onClose,
  id,
  image,
  discount,
  referenceName,
  rules,
  expire,
}) => {

  const handleValidateCoupon = async () => {
    await revalidateMyCoupons();
    onClose();
  }
  return (
    <Dialog open={open} onClose={handleValidateCoupon} maxWidth="sm" fullWidth>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 2,
        }}
      >
          <Typography fontSize={10} color="text.secondary" gutterBottom>
            Presenta este código QR para validar tu cupón de Descuento.
          </Typography>
        <Box sx={{ height: '60%', marginBottom:2 }}>
          <QRCode value={id} size={200} />
        </Box>

        {/* Imagen del cupón */}
        <Box
          component="img"
          src={image}
          alt={referenceName}
          sx={{ width: '100%', borderRadius: 2, marginBottom: 2 }}
        />

        {/* Información del cupón */}
        <Typography fontSize={14} fontWeight="bold">
          {referenceName}
        </Typography>
        <Typography fontSize={12} color="text.secondary">
          {rules}
        </Typography>
        <Typography fontSize={14} color="primary" fontWeight="bold">
          {discount}% de Descuento
        </Typography>
        <Typography fontSize={12} color="text.secondary">
          Vence: {moment(expire).format('DD-MM-YYYY')}
        </Typography>
      </Box>
¡
    
    </Dialog>
  );
};

export default ValidateCouponDialog;
