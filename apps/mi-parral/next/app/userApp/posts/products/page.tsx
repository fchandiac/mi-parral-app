import { Box } from '@mui/material';
import NewProductButton from './ui/NewProductButton';
import { findAllCategories } from '@/app/actions/categories-actions';
import ProductsList from './ui/ProductsList';

export default async function ProductPage() {
  const categories = await findAllCategories();
  return (
    <Box
      px={{ xs: '2vw', sm: '16vw', md: '12vw' }}
      mt={7}
      mb={10}
      minWidth={'330px'}
      pt={2}
    >
      <NewProductButton categories={categories} />
      <ProductsList />
    </Box>
  );
}
