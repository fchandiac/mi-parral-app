import { listUserCampaigns } from '@/app/actions/campaigns-actions';
import { Alert, Grid } from '@mui/material';
import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  AwaitedReactNode,
} from 'react';
import CampaingCard from './CampaingCard';

export default async function CampaignsList() {
  const campaignsList = await listUserCampaigns();

  if (campaignsList.length === 0) {
    return (
      <>
        <Alert severity="info">
          ¡Bienvenido a la sección de Campañas! Aquí puedes crear y gestionar
          tus campañas de descuentos! Comienza creando tu primera campaña.
        </Alert>
      </>
    );
  }

  return (
    <>
      <Grid container spacing={1}>
        {campaignsList.map((campaign: any) => {
      
          return (
            <Grid item key={campaign.id} xs={12} sm={6}>
              <CampaingCard 
              name={campaign.name}
              type={campaign.type}
              referenceId={campaign.referenceId}
              quanty={campaign.coupons.length}
              minAge={campaign.minAge}
              maxAge={campaign.maxAge}
              gender={campaign.gender}
              neighborhood={campaign.neighborhood}
              discount={campaign.coupons[0].discount}
              expire={campaign.expire}
              rules={campaign.coupons[0].rules}
              coupons={campaign.coupons}
              reference={campaign.reference}
               />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
