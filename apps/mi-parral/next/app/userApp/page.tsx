import { SessionProvider } from 'next-auth/react';
import MultiBands from './ui/multiBands/MultiBands';
import { Box } from '@mui/material';

export default function UserAppHomePage({
  searchParams,
}: {
  searchParams: any;
}) {
  const {serviceId} = searchParams;

  return (
    <SessionProvider>
      <Box mt={7} mb={10} minWidth={'330px'}>
        <MultiBands  serviceId={serviceId}/>
      </Box>
    </SessionProvider>
  );
}
