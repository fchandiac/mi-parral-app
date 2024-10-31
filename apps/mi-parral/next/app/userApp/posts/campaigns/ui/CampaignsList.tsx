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

  console.log(campaignsList);

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
              rules={campaign.rules}
               />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
