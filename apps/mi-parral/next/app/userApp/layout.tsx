'use client';
import MuiApp from '@/mui/MuiApp';
import Navbar from './ui/Navbar';
import SideBar from './ui/SideBar';
import { use, useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Footer from './ui/Footer';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { findRandomService } from '../actions/services-actions';

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
    const randomService = async () => {
      const service = await findRandomService();
      updateSearchParam('serviceId', service.id);
    };
    if (!querySerivceId && pathname === '/userApp/services') {
      randomService();
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
