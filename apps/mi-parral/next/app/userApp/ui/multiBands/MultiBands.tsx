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

export interface MultiBandsProps {
  serviceId: string;
}

export default async function MultiBands({ serviceId }: MultiBandsProps) {
  //SERVICES
  const services = await findAllServices();
  const service = await findOneService(serviceId);
  const serviceHomeImage = await serviceImage(serviceId); // Assuming findServiceImage is the correct function
  const servicesList = services.map((service: any) => (
    <ServiceMiniCard
      id={service? service.id : ''}
      name={service? service.name : ''}
      price={service? service.price : 0}
    />
  ));

  return (
    <>
      <HorizontalAutoScroll listItems={servicesList} />
      <Typography
        component={Box}
        sx={{
          backgroundColor: 'primary.main',
          color: 'background.default',
          p: 1,
        }}
        fontSize={18}
      >
        Servicios
      </Typography>
        <ServiceMiniPage
            id={service.id}
            name={service.name}
            description={service.description}
            price={service.price}
            categoryName={service?.category?.name}
            image={serviceHomeImage.image}
            whatsapp={service.whatsapp}
        />
    </>
  );
}
