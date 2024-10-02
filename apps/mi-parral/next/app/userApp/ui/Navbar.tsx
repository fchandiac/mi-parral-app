// app/Navbar.tsx
'use client';
import { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Switch,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import HomeIcon from '@mui/icons-material/Home';

interface NavbarProps {
  onMenuClick: () => void;
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [title, setTitle] = useState(<></>);

  const pathNameString = (pathname: string) => {
    switch (pathname) {
      case '/userApp/account':
        return 'Mi cuenta';
      case '/userApp/account/services':
        return 'mis Servicios';
      case '/userApp/account/commerces':
        return 'mis Comercios';
      case '/userApp/services':
        return 'Servicios';
      case '/userApp/account/products':
        return 'mis Productos';
      case '/userApp/profile':
        return 'Mi perfil';

      default:
        return pathname;
    }
  };

  useEffect(() => {
    if (pathname === '/userApp') {
      setTitle(<HomeIcon />);
    } else {
      setTitle(
        <Typography
          fontSize={16}
          component="div"
          sx={{
            flexGrow: 1,
            textAlign: 'right',
            justifyContent: 'right',
            pr: 1,
          }}
        >
          {pathNameString(pathname)}
        </Typography>,
      );
    }
  }, [pathname]);

  return (
    <AppBar
      position="fixed"
      sx={{
        height: '60px',
        //backgroundColor:  pathname === '/userApp/services' ? 'background.default' : '',
      }}
    >
      <Toolbar>
        <Box
          sx={{
            flexGrow: 1,
            display: 'inline-flex',
            justifyContent: 'left',
            alignItems: 'left',
            paddingTop: 2,
            paddingBottom: 2,
            boxSizing: 'border-box', // Asegura que el padding no afecte el ancho total
          }}
        >
          <img
            className="moving-soft-image"
            src="/logo.svg"
            alt="Mi Parral"
            width={125}
          />
        </Box>

        <Typography
          fontSize={16}
          component="div"
          sx={{
            flexGrow: 1,
            textAlign: 'right',
            justifyContent: 'right',
            pr: 1,
          }}
        >
          {title}
        </Typography>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={onMenuClick}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
