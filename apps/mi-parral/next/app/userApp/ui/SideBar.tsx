// @ts-ignore
// app/UserSideBar.tsx
import * as React from 'react';
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import { signOut } from 'next-auth/react';

const drawerWidth = 240;

interface UserSideBarProps {
  open: boolean;
  toggleDrawer: (open: boolean) => void;
}

export default function SideBar({ open, toggleDrawer }: UserSideBarProps) {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <Box>
      {/* Drawer temporal */}
      <Drawer
        anchor="left"
        open={open}
        onClose={() => toggleDrawer(false)}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <Box
          sx={{
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 2,
            paddingBottom: 2,
            boxSizing: 'border-box', // Asegura que el padding no afecte el ancho total
          }}
        >
          <img
            className="moving-soft-image"
            src="/logoPink.svg"
            alt="Mi Parral"
            width={125}
          />
        </Box>
        <Box>
          <Grid
            container
            padding={2}
            spacing={1}
            direction={'column'}
            alignItems={'center'}
          >
            <Grid item>
              <Avatar
                alt="Avatar"
                src={session?.user?.image || undefined}
                sx={{
                  color: 'white',
                }}
              />
            </Grid>
            <Grid item textAlign={'center'}>
              <Typography fontSize={12}>{session?.user?.name}</Typography>
              <Typography fontSize={12}>{session?.user?.email}</Typography>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                size="small"
                onClick={() => {
                  router.push('/userApp/profile');
                  toggleDrawer(false);
                }}
              >
                Mi perfil
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                size="small"
                onClick={() => {
                  router.push('/userApp');
                  toggleDrawer(false);
                }}
                sx={{
                  width: 40, // Establece el ancho del botón
                  height: 40, // Establece la misma altura para hacerlo circular
                  borderRadius: '50%', // Borde redondeado completo
                  minWidth: 0, // Elimina el ancho mínimo para el botón
                  padding: 0, // Ajusta el padding si es necesario
                }}
              >
                <HomeIcon />
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Divider />

        <Typography paddingRight={2} paddingTop={1} textAlign={'right'}>
          <strong>Explorar</strong>
        </Typography>

        <List>
          <ListItem disablePadding>
            <MenuItem
              onClick={() => {
                router.push('/userApp/products');
                toggleDrawer(false);
              }}
              sx={{ width: '100%' }}
            >
              Productos
            </MenuItem>
          </ListItem>
          <ListItem disablePadding>
            <MenuItem
              onClick={() => {
                router.push('/userApp/services');
                toggleDrawer(false);
              }}
              sx={{
                width: '100%',
              }}
            >
              Servicios
            </MenuItem>
          </ListItem>
          <ListItem disablePadding>
            <MenuItem
              onClick={() => {
                router.push('/userApp/commerces');
                toggleDrawer(false);
              }}
              sx={{
                width: '100%',
              }}
            >
              Comercios
            </MenuItem>
          </ListItem>
        </List>

        <Divider />
        <Typography paddingRight={2} paddingTop={1} textAlign={'right'}>
          <strong>Administrar</strong>
        </Typography>
        <List>
          <ListItem disablePadding>
            <MenuItem
              sx={{ width: '100%', paddingLeft: 2 }}
              onClick={() => {
                router.push('/userApp/posts/products');
                toggleDrawer(false);
              }}
            >
              mis Productos
            </MenuItem>
          </ListItem>
          <ListItem disablePadding>
            <MenuItem
              sx={{ width: '100%', paddingLeft: 2 }}
              onClick={() => {
                router.push('/userApp/posts/services');
                toggleDrawer(false);
              }}
            >
              mis Servicios
            </MenuItem>
          </ListItem>
          <ListItem disablePadding>
            <MenuItem
              sx={{ width: '100%', paddingLeft: 2 }}
              onClick={() => {
                router.push('/userApp/posts/commerces');
                toggleDrawer(false);
              }}
            >
              mis Comercios
            </MenuItem>
          </ListItem>
          {/* <ListItem disablePadding>
            <MenuItem
              sx={{ width: '100%', paddingLeft: 2 }}
              onClick={() => {
                router.push('/userApp/posts/campaigns');
                toggleDrawer(false);
              }}
            >
              mis Campañas
            </MenuItem>
          </ListItem> */}
        </List>
        <Divider />
        <Grid
          container
          justifyContent={'center'}
          direction={'column'}
          spacing={1}
        >
          <Grid item textAlign={'center'} marginTop={1}>
            <Button variant="contained" size="small" onClick={() => signOut()}>
              Cerrar sesión
            </Button>
          </Grid>
        </Grid>
      </Drawer>
    </Box>
  );
}
