import React, { Suspense } from 'react';
import {
  findProfileByUser,
  isProfileComplete,
} from '@/app/actions/profile-actions';
import { Alert, Box, Grid } from '@mui/material';
import { couponsSelection } from '@/app/actions/coupons-actions';
import CouponCard from './ui/CouponCard';
import moment from 'moment';

export default async function CouponsPage() {
  const profile = await findProfileByUser();
  const isComplete = await isProfileComplete(profile.id);

  const calculteAge: any = (birthDate: string) => {
    const birthDateMoment = moment(birthDate, 'YYYY-MM-DD');
    const today = moment();
    const age = today.diff(birthDateMoment, 'years');
    return age;
  };
  const age = calculteAge(profile.birthdate);
  const coupons = await couponsSelection(age);
  

  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <>
        <Box
          px={{ xs: '2vw', sm: '16vw', md: '12vw' }}
          mt={7}
          mb={10}
          minWidth={'330px'}
          pt={2}
        >
          {!isComplete && (
            <Box mb={3}>
              <Alert severity="warning">
                <strong>
                  ¡Completa tu perfil para disfrutar de más beneficios!
                </strong>
                Al completar tu perfil, podrás acceder a opciones exclusivas
                como descuentos especiales, promociones personalizadas y una
                experiencia mejorada dentro de la plataforma. ¡No te pierdas la
                oportunidad de aprovechar todas las ventajas que tenemos para
                ti!
              </Alert>
            </Box>
          )}
          {/* {isComplete && (
            <Box mb={3}>
              <Alert severity="success">
                <strong>¡Perfil completo!</strong>
                <br />
                Tu perfil está completo, ya puedes acceder a todas las opciones
                exclusivas, incluyendo descuentos especiales y promociones
                personalizadas. ¡Gracias por ser parte de nuestra comunidad!
              </Alert>
            </Box>
          )} */}
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
    </Suspense>
  );
}
