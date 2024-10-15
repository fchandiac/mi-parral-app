'use client';
import MuiApp from '@/mui/MuiApp';
import Navbar from './ui/Navbar';
import SideBar from './ui/SideBar';
import { use, useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Footer from './ui/Footer';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { findRandomService } from '../actions/services-actions';
import { findRandomProduct } from '../actions/products-actions';
import { findRandomCommerce } from '../actions/commerces-actions';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [openSideBar, setOpenSideBar] = useState(false);
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const updateSearchParam = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString()); // Asegúrate de convertir query a cualquier tipo necesario
    if (value !== '' && value !== null) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    // Reemplaza la URL sin recargar la página
    replace(`${pathname}?${params.toString()}`);
  };


  useEffect(() => {

    const querySerivceId = searchParams.get('serviceId');
    const queryProductId = searchParams.get('productId');
    const queryCommerceId = searchParams.get('commerceId');

    const randomService = async () => {
      const service = await findRandomService();
      updateSearchParam('serviceId', service.id);
    };

    const ramdomProduct = async () => {
      const product = await findRandomProduct();
      updateSearchParam('productId', product.id);
    }

    const randomCommerce = async () => {
      const commerce = await findRandomCommerce();
      updateSearchParam('commerceId', commerce.id);
    }


    if (!querySerivceId && pathname === '/userApp/services') {
      randomService();
    }

    if (!queryProductId && pathname === '/userApp/products') {
      ramdomProduct();
    }

    if (!queryCommerceId && pathname === '/userApp/commerces') {
      randomCommerce();
    }

    if (!querySerivceId && pathname === '/userApp') {
      randomService();
      updateSearchParam('showService', 'false');
      ramdomProduct();
      randomCommerce();
    }

    
  }, [pathname]);


  return (
    <>
      <MuiApp>
        <Navbar onMenuClick={() => setOpenSideBar(true)} />
        <Box>{children}</Box>
        <Footer />

        <SideBar
          open={openSideBar}
          toggleDrawer={() => {
            setOpenSideBar(!open);
          }}
        />
      </MuiApp>
    </>
  );
}
