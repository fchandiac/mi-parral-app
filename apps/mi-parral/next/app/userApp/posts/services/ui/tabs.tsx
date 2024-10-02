"use client";
import React, {useState} from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

interface SimpleTabsProps {
  Services: React.ReactNode;
  Commerces: React.ReactNode;
}
  


const SimpleTabs: React.FC<SimpleTabsProps> = ({Services, Commerces}) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
        <Tab label="Productos o Servicios" />
        <Tab label="Comercios" />
        <Tab label="Campaña de descuentos" />
      </Tabs>
      <TabPanel value={value} index={0}>
        {Services}
      </TabPanel>
      <TabPanel value={value} index={1}>
        Contenido de la pestaña 2
      </TabPanel>
      <TabPanel value={value} index={2}>
        Contenido de la pestaña 3
      </TabPanel>
    </Box>
  );
};

export default SimpleTabs;
