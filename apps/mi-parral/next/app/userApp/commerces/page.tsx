'use server';
import { Box, Typography } from '@mui/material';

import { commerceImage, findOneCommerce, findAllByCategoryNameOrCommerceName, } from '@/app/actions/commerces-actions';
  

import SearchTermInput from './ui/SearchTermInput';
import CommerceMiniCard from './ui/CommerceMiniCard';
import CommerceImagesButton from './ui/CommerceImagesButton';
import CommerceWspButton from './ui/CommerceWspButton';
const imagesUrl = process.env.NEXT_PUBLIC_IMAGES_BACKEND_URL;
import HorizontalScroll from '@/components/HorizontalScroll';
import MapButton from './ui/MapButton';
import { Suspense } from 'react';

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: any;
}) {
  const { commerceId, searchTerm } = searchParams;

  // Obtener la imagen del servicio
  const img = await commerceImage(commerceId);
  console.log('img', img);

  const urlImage = (imageName: string) => {
    return `${imagesUrl}/images/commerces/${imageName}`;
  };

  const commerce = await findOneCommerce(commerceId);

  const { name, description, category, whatsapp, location } = commerce;

  const commercesList = await findAllByCategoryNameOrCommerceName(
    searchTerm ? searchTerm : '',
  );
  const commerceMiniCardList = commercesList.map((commerce: any) => (
    <CommerceMiniCard
      id={commerce.id}
      name={commerce.name}

    />
  ));

  return (
    <Suspense fallback={<div>Cargando...</div>}>
    <>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '54vh', // Ajusta la altura según tus necesidades
          backgroundImage: `url(${urlImage(img.image)})`,
          backgroundSize: 'cover', // Asegura que la imagen cubra todo el contenedor
          backgroundPosition: 'center', // Centra la imagen
          backgroundRepeat: 'no-repeat', // Evita que la imagen se repita
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            bottom: -2,
            width: '100%',
            height: '70%',
            //background: 'linear-gradient(to top, #88C200 10%, transparent 30%)',
            zIndex: 2, // Asegura que el gradiente esté encima de la imagen de fondo
          }}
        ></Box>
        {/* Contenido de la página */}
        <Box sx={{ position: 'relative', zIndex: 2, height: '100%' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '93%', // O ajusta la altura según sea necesario
              padding: '16px', // Ajusta el padding según tus necesidades
              color: 'white', // Color del texto
              //backgroundColor: 'rgba(0, 0, 0, 0.4)', // Fondo oscuro semitransparente
            }}
          >
            <Box display={'flex'}>
              <Box flexGrow={1}>
                {/* Nombre del servicio */}
                <Typography
                  component="div"
                  sx={{
                    fontSize: 18, // Ajusta el tamaño de fuente
                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.9)', // Agrega sombra al texto
                    maxWidth: '70%', // Limita el ancho del texto
                  }}
                >
                  {name}
                </Typography>
                {/* Precio del servicio */}
                <Typography
                  component="div"
                  sx={{
                    fontSize: 14, // Ajusta el tamaño de fuente
                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.9)', // Agrega sombra al texto
                    flexGrow: 1,
                  }}
                >
               
                </Typography>
                <Typography
                  component="div"
                  sx={{
                    fontSize: 14, // Ajusta el tamaño de fuente
                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.9)', // Agrega sombra al texto
                  }}
                >
                  {category ? category.name : 'Sin categoría'}
                </Typography>
              </Box>
              <Box
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'space-between'}
              >
                <CommerceImagesButton />
                <CommerceWspButton number={whatsapp} />
                <MapButton googleMapsUrl={location} />
              </Box>
            </Box>

            <Typography
              component="div"
              sx={{
                fontSize: 12, // Ajusta el tamaño de fuente
                //textShadow: '2px 2px 2px rgba(0, 0, 0, 0.6)',
                marginTop: 'auto', // Agrega sombra al texto
                padding: '8px', // Ajusta el padding según tus necesidades
                borderRadius: '5px', // Ajusta el radio de borde

                backgroundColor: 'rgba(0, 0, 0, 0.4)', // Fondo oscuro semitransparente
              }}
            >
              {description || 'No description available'}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <SearchTermInput />
      </Box>

      <Box className="loader" width={'100%'} />

      <Box>
        <HorizontalScroll listItems={commerceMiniCardList} />
      </Box>
    </>
    </Suspense>
  );
}
