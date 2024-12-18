import { Box } from '@mui/material';
import React from 'react';
import ServicesList from './ui/ServicesList';
import NewServiceButton from './ui/NewServiceButton';
// import { findAllCategories } from '@/app/actions/categories-actions';

export default async function page() {
  // const categories = await findAllCategories();


  return (
    <>
      <Box
        px={{ xs: '2vw', sm: '16vw', md: '12vw' }}
        mt={7}
        mb={10}
        minWidth={'330px'}
        pt={2}
      >
        {/* <NewServiceButton categories={categories} /> */}
        <ServicesList />
      </Box>
    </>
  );
}
