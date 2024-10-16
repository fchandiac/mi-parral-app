import { Box, Grid, Typography } from '@mui/material';
import {
  findAllServices,
  findOneService,
  serviceImage,
} from '@/app/actions/services-actions';
import ServiceMiniCard from '../../services/ui/ServiceMiniCard';
import ServiceMiniPage from '../../services/ui/ServiceMiniPage';
import HorizontalAutoScroll from '@/components/HorizontalAutoScroll';

import {
  findAllProducts,
  findOneProduct,
  productImage,
} from '@/app/actions/products-actions';
import ExpandServicesButton from './ExpandServicesButton';
import ProductMiniCard from '../../products/ui/ProductMiniCard';
import ProductMiniPage from '../../products/ui/ProductMiniPage';
import ExpandProductsButton from './ExpandProductsButton';
import ExpandCommercesButton from './ExpandCommercesButton';

import {
  findAllCommerces,
  findOneCommerce,
  commerceImage,
} from '@/app/actions/commerces-actions';
import CommerceMiniCard from '../../commerces/ui/CommerceMiniCard';
import CommerceMiniPage, { CommerceMiniPageProps } from '../../commerces/ui/CommerceMiniPage';

export interface MultiBandsProps {
  serviceId: string;
  showService: boolean;
  productId: string;
  showProduct: boolean;
  commerceId: string;
  showCommerce: boolean;
}

export default async function MultiBands({
  serviceId,
  showService,
  productId,
  showProduct,
  commerceId,
  showCommerce,
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
  const product = await findOneProduct(productId);
  const productHomeImage = await productImage(productId); // Assuming findProductImage is the correct function
  const productsList = products.map((product: any) => (
    <ProductMiniCard
      id={product ? product.id : ''}
      name={product ? product.name : ''}
      price={product ? product.price : 0}
    />
  ));

  //COMMERCES
  const commerces = await findAllCommerces();
  const commerce = await findOneCommerce(commerceId);
  const commerceHomeImage = await commerceImage(commerceId);

  const commercesList = commerces.map((commerce: any) => (
    <CommerceMiniCard
      key={commerce?.id} // Agrega una clave única para cada tarjeta
      id={commerce?.id || ''} // Usa el operador de encadenamiento opcional y el operador lógico OR
      name={commerce?.name || ''} // Usa el operador de encadenamiento opcional y el operador lógico OR
    />
  ));

  return (
    <>
      {/* SERVICIOS */}
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
        <Typography fontSize={14}>
          <strong>Servicios</strong>
        </Typography>
        <ExpandServicesButton />
      </Box>

      <Box
        display={showService ? 'block' : 'none'}
        sx={{
          px: { xs: 0, sm: 0, md: '30vw', lg: '30vw' },
        }}
      >
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
      <HorizontalAutoScroll listItems={servicesList} />
      {/* PRODUCTOS */}

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
        <Typography fontSize={14}>
          <strong>Productos</strong>
        </Typography>
        <ExpandProductsButton />
      </Box>
      <Box
        display={showProduct ? 'block' : 'none'}
        sx={{
          px: { xs: 0, sm: 0, md: '30vw', lg: '30vw' },
        }}
      >
        <ProductMiniPage
          id={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
          categoryName={product?.category?.name}
          image={productHomeImage.image}
          whatsapp={product.whatsapp}
        />
      </Box>

      <HorizontalAutoScroll listItems={productsList} />

      {/* Commerces */}
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
        <Typography fontSize={14}>
          <strong>Comercios</strong>
        </Typography>
        <ExpandCommercesButton />
      </Box>
      <Box
        display={showCommerce  ? 'block' : 'none'}
        sx={{
          px: { xs: 0, sm: 0, md: '30vw', lg: '30vw' },
        }}
      >
        <CommerceMiniPage
        id={commerce.id}
        name={commerce.name}
        description={commerce.description}
        address={commerce.address}
        category={commerce.category}
        image={commerceHomeImage.image}
        whatsapp={commerce.whatsapp}
        location={commerce.location}
        />
        
      </Box>

      <HorizontalAutoScroll listItems={commercesList} />
    </>
  );
}
