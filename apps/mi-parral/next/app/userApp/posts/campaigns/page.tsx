import { listUserProducts } from '../../../actions/products-actions';
import { listUserCommerces } from '@/app/actions/commerces-actions';
import { listUserServices } from '@/app/actions/services-actions';
import NewCampaignButtonButton from './ui/NewCampaignButton';
import { Box } from '@mui/material';

export default async function CampaignPage() {
    const UserServices =  await listUserServices();
    const UserCommerces = await listUserCommerces();
    const UserPrducts = await listUserProducts();

  return <>
  <Box
      px={{ xs: '2vw', sm: '16vw', md: '12vw' }}
      mt={7}
      mb={10}
      minWidth={'330px'}
      pt={2}
    >
        <NewCampaignButtonButton UserServices={UserServices} UserCommerces={UserCommerces} UserPrducts={UserPrducts} />
    </Box>
    

  </>;
}
