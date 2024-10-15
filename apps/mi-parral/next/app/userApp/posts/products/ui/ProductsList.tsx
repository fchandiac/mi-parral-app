import { revalidatePath } from 'next/cache';
// import { ServiceCard } from './ServiceCard';
import { Alert, Grid } from '@mui/material';
import { Suspense } from 'react';

import { listUserProducts } from '@/app/actions/products-actions';
import { ProductCard } from './ProductCard';

export default async function ProductsList() {
  const productsList = await listUserProducts();


  if (productsList.length === 0) {
    return (
      <>
        <Alert severity="info">
          ¡Bienvenido a la sección de Servicios! Aquí puedes crear y gestionar
          los servicios que aparecerán tanto en el Home de la app como en la
          sección Servicios. Actualmente no tienes ningún servicio creado.
          Comienza ahora agregando tu primer servicio para ofrecerlo a tus
          clientes y visibilizarlo en nuestra plataforma.
        </Alert>
      </>
    );
  }

  return (
    <>
      <Grid container spacing={1}>
        {productsList.map((service: any) => (
          <Grid item xs={12} sm={12} md={6} lg={6} key={service.id}>
              <ProductCard
                id={service.id}
                name={service.name}
                description={service.description}
                price={service.price}
                whatsapp={service.whatsapp}
                category={service.category? service.category.name : ''}
              />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
