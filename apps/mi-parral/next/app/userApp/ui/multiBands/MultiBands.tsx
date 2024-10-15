import { Box, Grid, Typography } from '@mui/material';
import {
  findAllServices,
  findOneService,
  serviceImage,
} from '@/app/actions/services-actions';
import HorizontalScroll from '@/components/HorizontalScroll';
import ServiceMiniCard from '../../services/ui/ServiceMiniCard';
import ServiceMiniPage from '../../services/ui/ServiceMiniPage';
import HorizontalAutoScroll from '@/components/HorizontalAutoScroll';

import {
  findAllProducts,
  findOneProduct,
  productImage,
} from '@/app/actions/products-actions';
import ExpandServicesButton from './ExpandServicesButton';

export interface MultiBandsProps {
  serviceId: string;
  showService: boolean;
}

export default async function MultiBands({
  serviceId,
  showService,
}: MultiBandsProps) {
  //SERVICES
  const services = await findAllServices();
  const service = await findOneService(serviceId);
  const serviceHomeImage = await serviceImage(serviceId); // Assuming findServiceImage is the correct function
  const servicesList = services.map((service: any) => (
    <ServiceMiniCard
      id={service ? service.id : ''}
      name={service ? service.name : ''}
      price={service ? service.price : 0}
    />
  ));

  //PRODUCTS
  const products = await findAllProducts();
  const product = await findOneProduct(serviceId);
  const productHomeImage = await productImage(serviceId); // Assuming findProductImage is the correct function
  const productsList = products.map((product: any) => (
    <ServiceMiniCard
      id={product ? product.id : ''}
      name={product ? product.name : ''}
      price={product ? product.price : 0}
    />
  ));

  return (
    <>
      <HorizontalAutoScroll listItems={servicesList} />
      <Box
        sx={{
          display: 'flex',
          backgroundColor: 'primary.main',
          color: 'background.default',
          
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 2,
        }}
      >
        <Typography fontSize={14}>Servicios</Typography>
        <ExpandServicesButton />
      </Box>

      <Box display={showService ? 'block' : 'none'}>
        <ServiceMiniPage
          id={service.id}
          name={service.name}
          description={service.description}
          price={service.price}
          categoryName={service?.category?.name}
          image={serviceHomeImage.image}
          whatsapp={service.whatsapp}
        />
      </Box>
      {/* <HorizontalAutoScroll listItems={productsList} />
      <Box
        sx={{
          display: 'flex',
          backgroundColor: 'primary.main',
          color: 'background.default',
          
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 2,
        }}
      >
        <Typography fontSize={14}>Productos</Typography>
    
      </Box> */}
    </>
  );
}
