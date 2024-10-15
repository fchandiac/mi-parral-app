// @ts-ignore
// app/UserSideBar.tsx
import * as React from 'react';
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Grid,
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
          <Grid container padding={2} spacing={1}>
            <Grid item>
              <Typography fontSize={12}>{session?.user?.name}</Typography>
              <Typography fontSize={12}>{session?.user?.email}</Typography>
            </Grid>
            <Grid item>
              <Avatar
                alt="Avatar"
                src={session?.user?.image || undefined} 
                sx={{
                  color: 'white',
                }}
              />
            </Grid>
          </Grid>
        </Box>
        <Divider />
        <List>
          <ListItem disablePadding>
            <MenuItem
              sx={{ width: '100%' }}
              onClick={() => {
                router.push('/userApp');
                toggleDrawer(false);
              }}
            >
              <HomeIcon />
            </MenuItem>
          </ListItem>
          {/* <ListItem disablePadding>
            <MenuItem sx={{ width: '100%' }}>Descuentos</MenuItem>
          </ListItem> */}
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
        <List>
          <ListItem disablePadding>
            <Typography paddingLeft={2} paddingTop={1}>
              Publicar
            </Typography>
          </ListItem>

          {/* <ListItem disablePadding>
            <MenuItem
              sx={{ width: '100%', paddingLeft: 2 }}
              onClick={() => {
                router.push('/userApp/posts/campaigns');
                toggleDrawer(false);
              }}
            >
              publica Descuentos
            </MenuItem>
          </ListItem> */}

          <ListItem disablePadding>
            <MenuItem
              sx={{ width: '100%', paddingLeft: 2 }}
              onClick={() => {
                router.push('/userApp/posts/products');
                toggleDrawer(false);
              }}
            >
              publica Productos
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
              publica Servicios
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
              publica Comercios
            </MenuItem>
          </ListItem>

          <ListItem disablePadding>
            <MenuItem
              sx={{ width: '100%' }}
              onClick={() => {
                router.push('/userApp/profile');
                toggleDrawer(false);
              }}
            >
              Mi perfil
            </MenuItem>
          </ListItem>

          <ListItem disablePadding>
            <MenuItem sx={{ width: '100%' }} onClick={() => signOut()}>
              Cerrar sesión
            </MenuItem>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
