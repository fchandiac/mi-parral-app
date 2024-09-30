import { Box } from '@mui/material';
import NewProductButton from './ui/NewProductButton';

export default function ProductPage() {
  return (
    <Box
      px={{ xs: '2vw', sm: '16vw', md: '12vw' }}
      mt={7}
      mb={10}
      minWidth={'330px'}
      pt={2}
    >
      <NewProductButton />
    </Box>
  );
}
