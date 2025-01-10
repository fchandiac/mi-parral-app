import { Box, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import {
  DiscountType,
  Gender,
  Neighborhoods,
  DiscountStatus,
} from '@/app/actions/campaigns-actions';
import EditCampaingButton from './EditCampaingButton';
import CouponMiniCard from './CouponMiniCard';
const imagesUrl = process.env.NEXT_PUBLIC_IMAGES_BACKEND_URL;

// id: '838aa71b-19bf-451d-a3d3-02dd51b573c4',
// status: 0,
// userId: null,
// validationUserId: null,
// validationDate: null,
// expire: '2024-12-08',
// rules: 'Valido por la compra de un Cafe Expreso.',
// discount: 10,
// createdAt: '2024-12-05T02:17:43.866Z',
// updatedAt: '2024-12-05T02:17:43.866Z',
// deletedAt: null

interface CouponToCard {
  id: string;
  status: number;
  userId: string | null;
  validationUserId: string | null;
  validationDate: Date | null;
  updatedAt: Date;
  deletedAt: Date | null;
}

type CampaingCardProps = {
  name: string; // Nombre de la campaña
  type: DiscountType; // Tipo de descuento
  referenceId: string | null; // ID de referencia
  quanty: number; // Cantidad de cupones
  minAge: number; // Edad mínima
  maxAge: number; // Edad máxima
  gender?: Gender; // Género objetivo
  neighborhood?: Neighborhoods; // Barrio objetivo
  discount: number; // Porcentaje de descuento
  expire: Date; // Fecha de expiración
  rules: string; // Reglas de la campaña
  coupons: CouponToCard[];
  reference: any;
};

export default function CampaingCard({
  name = 'Campaña',
  type = DiscountType.SERVICE,
  referenceId,
  quanty = 0,
  minAge,
  maxAge,
  gender,
  neighborhood,
  discount,
  expire,
  rules,
  coupons,
  reference,
}: CampaingCardProps) {
  // Función para convertir enums a texto legible

  const urlImage = (imageName: string) => {
    if (type === 0) return `${imagesUrl}/images/services/${imageName}`;
    if (type === 1) return `${imagesUrl}/images/products/${imageName}`;
    if (type === 2) return `${imagesUrl}/images/commerces/${imageName}`;
  };

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

  const getDiscountTypeText = (type: DiscountType) => {
    switch (type) {
      case DiscountType.SERVICE:
        return 'Servicio';
      case DiscountType.PRODUCT:
        return 'Producto';
      case DiscountType.COMMERCE:
        return 'Comercio';
      default:
        return 'N/A';
    }
  };

  const getGenderText = (gender?: Gender) => {
    switch (gender) {
      case Gender.MALE:
        return 'Hombres';
      case Gender.FEMALE:
        return 'Mujeres';
      case Gender.OTHER:
        return 'Otros';
      case Gender.ALL:
        return 'Todos';
      default:
        return 'N/A';
    }
  };

  const getNeighborhoodText = (neighborhood?: Neighborhoods) => {
    switch (neighborhood) {
      case Neighborhoods.ALL:
        return 'Todos los barrios';
      case Neighborhoods.CENTRO:
        return 'Centro';
      case Neighborhoods.BUENOS_AIRES:
        return 'Buenos Aires';
      case Neighborhoods.ARRAU_MENDEZ:
        return 'Arrau Méndez';
      case Neighborhoods.IGUALDAD_SUR:
        return 'Igualdad Sur';
      case Neighborhoods.LOS_OLIVOS:
        return 'Los Olivos';
      case Neighborhoods.VIÑA_DEL_MAR:
        return 'Viña del Mar';
      case Neighborhoods.CAMINO_A_CATILLO:
        return 'Camino a Catillo';
      case Neighborhoods.CAMINO_A_BULLILEO:
        return 'Camino a Bullileo';
      case Neighborhoods.TALQUITA:
        return 'Talquita';
      case Neighborhoods.OTROS:
        return 'Otros';
      default:
        return 'N/A';
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '70vh',
        borderRadius: '1rem',
        border: '1px solid',
        boxShadow: '0 4px 4px rgba(0, 0, 0, 0.4)',
        color: 'black',
        textAlign: 'center',

        opacity: 1,
      }}
    >
      {/* Header */}
      <Box
        sx={{
          borderBottom: '1px solid',
          width: '100%',
          alignItems: 'left',
          backgroundColor: '#transparent',
        }}
      >
        {' '}
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          px={1}
          alignItems={'center'}
          my={1}
        >
          <Typography
            fontSize={16}
            fontWeight={'bold'}
            textAlign={'left'}
            flexGrow={1}
            maxWidth={'60%'}
          >
            {name}
          </Typography>

          {/* <Box display={'inline-block'}>
            <EditCampaingButton />
          </Box> */}
        </Box>
      </Box>
      {/* Body */}

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
        }}
      >
        <Box sx={{ padding: '1rem', textAlign: 'left' }}>
          <Typography fontSize={12} lineHeight={1} gutterBottom>
            <strong>Tipo de descuento:</strong> {getDiscountTypeText(type)}
          </Typography>
          <Typography fontSize={12} lineHeight={1} gutterBottom>
            <strong>Cantidad de cupones:</strong> {quanty}
          </Typography>
          <Typography fontSize={12} lineHeight={1} gutterBottom>
            <strong>Edad objetivo:</strong> {minAge} - {maxAge} años
          </Typography>
          <Typography fontSize={12} lineHeight={1} gutterBottom>
            <strong>Género:</strong> {getGenderText(gender)}
          </Typography>
          <Typography fontSize={12} lineHeight={1} gutterBottom>
            <strong>Barrio objetivo:</strong>{' '}
            {getNeighborhoodText(neighborhood)}
          </Typography>
          <Typography fontSize={12} lineHeight={1} gutterBottom>
            <strong>Porcentaje de descuento:</strong> {discount}%
          </Typography>
          <Typography fontSize={12} lineHeight={1} gutterBottom>
            <strong>Expira el:</strong> {new Date(expire).toLocaleDateString()}
          </Typography>
          <Typography fontSize={12} lineHeight={1} gutterBottom>
            <strong>Reglas:</strong> {rules}
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100%',
            backgroundImage: `url(${urlImage(reference?.image)})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 1,
        }}
      >
        <Typography fontSize={12} lineHeight={1} gutterBottom>
          <strong>Referencia:</strong> {reference?.name}
        </Typography>
      </Box>

      <Divider
        sx={{
          borderColor: 'black',
        }}
      />

      <Typography fontSize={12} lineHeight={1} gutterBottom marginTop={2}>
        <strong>Cupones</strong>
      </Typography>
      {
        <Box sx={{ overflowY: 'auto', height: '100%' }}>
          <Grid container spacing={1} sx={{ padding: 1 }}>
            {coupons.map((coupon) => (
              //NEcesito hacer un box con slider
              <Grid item key={coupon.id} xs={6} sm={4}>
                <CouponMiniCard {...coupon} />
              </Grid>
            ))}
          </Grid>
        </Box>
      }
    </Box>
  );
}
