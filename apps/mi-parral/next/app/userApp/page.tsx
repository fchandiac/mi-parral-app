import { SessionProvider } from 'next-auth/react';
import MultiBands from './ui/multiBands/MultiBands';
import { Box } from '@mui/material';
import { Suspense } from 'react';

export default function UserAppHomePage({
  searchParams,
}: {
  searchParams: any;
}) {
  const { serviceId, showService, productId, showProduct, commerceId, showCommerce } = searchParams;

  return (
    <SessionProvider>
      <Box mt={7} mb={10} minWidth={'330px'}>
        <MultiBands
          serviceId={serviceId}
          showService={showService == 'true' ? true : false}
          productId={productId}
          showProduct={showProduct == 'true' ? true : false}
          commerceId={commerceId}
          showCommerce={showCommerce == 'true' ? true : false}
        />
      </Box>
    </SessionProvider>
  );
}
