import {
  findProfileByUser,
  isProfileComplete,
} from '@/app/actions/profile-actions';
import { Box, Alert } from '@mui/material';
import ProfileForm from './ui/ProfileForm';
import { Suspense } from 'react';

export default async function page() {
  const profile = await findProfileByUser();
  const isComplete = await isProfileComplete(profile.id);

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
          {isComplete && (
            <Box mb={3}>
              <Alert severity="success">
                <strong>¡Perfil completo!</strong>
                <br />
                Tu perfil está completo, ya puedes acceder a todas las opciones
                exclusivas, incluyendo descuentos especiales y promociones
                personalizadas. ¡Gracias por ser parte de nuestra comunidad!
              </Alert>
            </Box>
          )}

          <ProfileForm
            userId={profile.userId}
            profileId={profile.id}
            birthdate={profile.birthdate}
            gender={profile.gender}
            neighborhood={profile.neighborhood}
          />
        </Box>
      </>
    </Suspense>
  );
}
