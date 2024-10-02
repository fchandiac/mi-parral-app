'use server';
import { Box, Typography } from '@mui/material';
import AddImageButton from './AddImageButton';
import ImageSlider from './ImageSlider';
import { findCommerceImages } from '@/app/actions/commerces-actions';
import DeleteCommerceButton from './DeleteCommerceButton';
import MapButton from '@/components/MapButton';
import WspButton from '@/components/WspButton';
import LocationOn from '@mui/icons-material/LocationOn';
import DescriptionIcon from '@mui/icons-material/Description';
import EditCommerceButton from './EditCommerceButton';

interface CommerceCardProps {
  id: string;
  name: string | null;
  description: string | null;
  whatsapp: string | null;
  address: string | null;
  location: string | null;
  category: {
    id: string;
    name: string;
  };
}

export default async function CommerceCard({
  id,
  name,
  description,
  whatsapp,
  address,
  location,
  category
}: CommerceCardProps) {
  const images = await findCommerceImages(id);

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '70vh',
          borderRadius: '1rem',
          border: '1px solid',
          boxShadow: '0 4px 4px rgba(0, 0, 0, 0.4)',
          color: 'black',
          textAlign: 'center',
        }}
      >
        <Box
          sx={{
            borderBottom: '1px solid',
            width: '100%',
            alignItems: 'left',
          }}
        >
          <Box
            display={'flex'}
            justifyContent={'space-between'}
            px={1}
            alignItems={'center'}
            my={1}
          >
            <Typography
              fontSize={16}
              fontWeight={'bold'}
              textAlign={'left'}
              flexGrow={1}
              maxWidth={'60%'}
            >
              {name}
            </Typography>

            <Box display={'inline-block'}>
              <AddImageButton commerceId={id} />
              <EditCommerceButton
                commerceId={id}
                commerceName={name}
                description={description}
                whatsapp={whatsapp}
                address={address}
                location={location}
              />
              <DeleteCommerceButton commerceId={id} commerceName={name} />
            </Box>
          </Box>
        </Box>

        <ImageSlider images={images} />

        <Box
          borderTop={'1px solid'}
          sx={{ padding: 1 }} // Agrega padding al contenedor
        >
          <Box>
            <Typography fontSize={14} textAlign={'justify'}>
              <DescriptionIcon fontSize="small" /> {description}
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              marginTop: 1, // Margen entre el texto y los íconos
            }}
          >
            <Box flexGrow={1}>
              <Typography fontSize={14} textAlign={'justify'}>
                <LocationOn fontSize={'small'} /> {address}
              </Typography>
              <Typography fontSize={14} textAlign={'justify'} pl={1}>
                <strong>{category? category.name : 'Sin categoría'}</strong>
              </Typography>
            </Box>

            <Box sx={{ marginLeft: 1 }}>
              {' '}
              {/* Ajusta el margen de los botones */}
              <MapButton googleMapsUrl={location} />
            </Box>

            <Box sx={{ marginLeft: 1 }}>
              <WspButton phoneNumber={whatsapp ?? ''} />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
