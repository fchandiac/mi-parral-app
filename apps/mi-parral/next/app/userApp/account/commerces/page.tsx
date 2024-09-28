import { Box } from '@mui/material';
import NewCommerceButton from './ui/NewCommerceButton';
import CommercesList from './ui/CommercesList';

export default function CommercePage() {
  return (
    
    <Box
      px={{ xs: '2vw', sm: '16vw', md: '12vw' }}
      mt={7}
      mb={10}
      minWidth={'330px'}
      pt={2}
    >
      <NewCommerceButton />
      <CommercesList />
     
    </Box>
  );
}
