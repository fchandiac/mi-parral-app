
import { listUserProducts } from '../../../actions/products-actions';
import { listUserCommerces } from '@/app/actions/commerces-actions';
import { listUserServices } from '@/app/actions/services-actions';
import { userDiscountsTypes } from '@/app/actions/campaigns-actions';
import NewCampaignButtonButton from './ui/NewCampaignButton';
import { Box } from '@mui/material';
import { Suspense } from 'react';
import CampaignsList from './ui/CampaignsList';

export default async function CampaignPage() {
  const UserServices = await listUserServices();
  const UserCommerces = await listUserCommerces();
  const UserPrducts = await listUserProducts();
  const userDiscountsTypesList = await userDiscountsTypes();

  return (
    <>
      <Box
        px={{ xs: '2vw', sm: '16vw', md: '12vw' }}
        mt={7}
        mb={10}
        minWidth={'330px'}
        pt={2}
      >
        <NewCampaignButtonButton
          UserServices={UserServices}
          UserCommerces={UserCommerces}
          UserPrducts={UserPrducts}
          userDiscountsTypesList={userDiscountsTypesList}
        />

        <Suspense fallback={<div>Loading...</div>}>
          <CampaignsList />
        </Suspense>
      </Box>
    </>
  );
}
