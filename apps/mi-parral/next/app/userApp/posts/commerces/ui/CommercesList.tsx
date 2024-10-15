import { revalidatePath } from 'next/cache';
// import { ServiceCard } from './ServiceCard';
import { Alert, Grid } from '@mui/material';
import { listUserCommerces } from '@/app/actions/commerces-actions';
import CommerceCard from './CommerceCard';
import { CommerceType } from '@/app/actions/commerces-actions';

export default async function CommercesList() {
  const commercesList = await listUserCommerces();

  if (commercesList.length === 0) {
    return (
      <>
        <Alert severity="info">
          ¡Bienvenido a la sección de Comercios! Aquí puedes crear y gestionar
          tus comercios que aparecerán tanto en el Home de la app como en la
          sección Comercios. Actualmente no tienes ningún servicio creado.
          Comienza ahora agregando tu primer comercio para visibilizarlo en
          nuestra plataforma.
        </Alert>
      </>
    );
  }

  return (
    <>
      <Grid container spacing={1}>
        {commercesList.map((commerce: CommerceType) => (
          <Grid item xs={12} sm={12} md={6} lg={6} key={commerce.id}>
            <CommerceCard
              id={commerce.id}
              name={commerce.name}
              description={commerce.description}
              address={commerce.address}
              whatsapp={commerce.whatsapp}
              location={commerce.location}
              category={commerce.category}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
