import HorizontalScroll from '@/components/HorizontalScroll';
import { Button, Box } from '@mui/material';
import { findAllServices } from '@/app/actions/services-actions';
import ServiceMiniCard from './ui/ServiceMiniCard';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const services = await findAllServices();

  const items = services.map((service: any) => (
    <ServiceMiniCard
      name={service.name}
      price={service.price}
      id={service.id}
    />
  ));

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          backgroundColor: 'background.default'
          //backgroundColor: 'primary.main',
        }}
      >
        <Box
          sx={{
            mt: '60px',
            height: '50vh',
            justifyContent: 'center',
            alignItems: 'center',
            pb: 'auto',
            px: { xs: 0, sm: 0, md: '30vw', lg: '30vw' }, // Optional padding for header}
            //backgroundColor: 'background.default',
            //backgroundColor: 'primary.main', // Optional background color for header
          }}
        >
          {children}
        </Box>

        <Box
          sx={{
            width: '100%',
            backgroundColor: 'background.default',
            //backgroundColor: 'primary.main', // Optional background color for footer
            marginTop: 'auto',
            mb: '60px',
          }}
        >
          <HorizontalScroll listItems={items} />
        </Box>
      </Box>
    </>
  );
}
