'use client';
import React, { useState } from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Box,
  Slide,
  Grid,
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from '@mui/material';
import {
  CreateCampaignType,
  Gender,
  DiscountType,
  Neighborhoods,
} from '@/app/actions/campaigns-actions';

const steps = ['Paso 1', 'Paso 2', 'Paso 3', 'Paso 4'];

interface NewCampaignFormProps {
  UserServices: any;
  UserCommerces: any;
  UserProducts: any;
}

export default function NewCampaignForm({
  UserServices,
  UserCommerces,
  UserProducts,
}: NewCampaignFormProps) {
  const [activeStep, setActiveStep] = useState(0);

  const [campaign, setCampaign] = useState<CreateCampaignType>({
    name: '', // Nombre de la campaña
    type: DiscountType.SERVICE, // Valor por defecto
    referenceId: null, // ID de referencia para asociar con otra entidad
    quanty: 1, // Cantidad de cupones a crear
    minAge: 0, // Edad mínima para la campaña
    maxAge: 100, // Edad máxima para la campaña
    gender: Gender.ALL, // Género (opcional)
    neighborhood: Neighborhoods.ALL, // Barrio (opcional)
    discount: 1, // Descuento del 1 al 100
    expire: new Date(), // Fecha de expiración de la campaña
    rules: '', // Reglas de la campaña
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | unknown>,
  ) => {
    const { name, value } = e.target as HTMLInputElement;
    setCampaign((prevCampaign) => ({
      ...prevCampaign,
      [name]: value,
    }));
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel></StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ p: 3, display: 'block', justifyContent: 'center' }}>
        <Slide direction="left" in={true} mountOnEnter unmountOnExit>
          <Typography variant="h6" component="div" align="center">
            {activeStep === 0 && (
              <Box>
                <Grid spacing={1} direction={'column'} container width={'100%'}>
                  <Grid item>
                    <Typography variant="h6" align="center">
                      Información general
                    </Typography>
                  </Grid>
                  <Grid item>
                    <TextField
                      label="Nombre de la campaña"
                      name="name"
                      value={campaign.name}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      variant="outlined"
                      fullWidth
                      size="small"
                      required
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      label="Cantidad de cupones"
                      name="quanty"
                      type="number"
                      value={campaign.quanty}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      variant="outlined"
                      fullWidth
                      size="small"
                      required
                    />
                  </Grid>
                  <Grid item>
                    <FormControl fullWidth variant="outlined" size="small">
                      <InputLabel id="type-select-label">
                        Tipo de descuento
                      </InputLabel>
                      <Select
                        labelId="type-select-label"
                        fullWidth
                        label="Tipo de descuento"
                        variant="outlined"
                        name="category"
                      >
                        <MenuItem value={DiscountType.SERVICE}>
                          Servicio
                        </MenuItem>
                        <MenuItem value={DiscountType.PRODUCT}>
                          Producto
                        </MenuItem>
                        <MenuItem value={DiscountType.COMMERCE}>
                          Comercio
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </Box>
            )}
            {activeStep === 1 && (
              <Box>
                {campaign.type === DiscountType.SERVICE && (
                  <Grid
                    spacing={1}
                    direction={'column'}
                    container
                  >
                    <Grid item>
                      <Typography variant="h6" align="center">
                        Selecciona tu servicio en Promoción
                      </Typography>
                    </Grid>
                    <Grid item>
                      <FormControl fullWidth variant="outlined" size="small">
                        <InputLabel id="service-select-label">
                          Servicio
                        </InputLabel>
                        <Select
                          labelId="service-select-label"
                          fullWidth
                          label="Servicio"
                          variant="outlined"
                          name="service"
                          // onChange={(e) => {
                          //   handleChange(e);
                          // }}
                        >
                          {UserServices.map((service: any) => (
                            <MenuItem value={service.id}>
                              {service.name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                )}
              </Box>
            )}
            {activeStep === 2 && (
                <Box>
                    <Grid spacing={1} direction={'column'} container>
                    <Grid item>
                        <Typography variant="h6" align="center">
                        Información de la campaña
                        </Typography>
                    </Grid>
                    <Grid item>
                        <TextField
                        label="% Descuento"
                        name="discount"
                        type="number"
                        value={campaign.discount}
                        onChange={(e) => {
                            handleChange(e);
                        }}
                        variant="outlined"
                        fullWidth
                        size="small"
                        required
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                        label="Edad mínima"
                        name="minAge"
                        type="number"
                        value={campaign.minAge}
                        onChange={(e) => {
                            handleChange(e);
                        }}
                        variant="outlined"
                        fullWidth
                        size="small"
                        required
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                        label="Edad máxima"
                        name="maxAge"
                        type="number"
                        value={campaign.maxAge}
                        onChange={(e) => {
                            handleChange(e);
                        }}
                        variant="outlined"
                        fullWidth
                        size="small"
                        required
                        />
                    </Grid>
                    </Grid>
                </Box>
            )}
            {activeStep === 3 && (
                <Box>
                    <Grid spacing={1} direction={'column'} container>
                    <Grid item>
                        <Typography variant="h6" align="center">
                        Reglas de la campaña
                        </Typography>
                    </Grid>
                    <Grid item>
                        <TextField
                        label="Reglas"
                        name="rules"
                        value={campaign.rules}
                        onChange={(e) => {
                            handleChange(e);
                        }}
                        variant="outlined"
                        fullWidth
                        size="small"
                        required
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                        label="Fecha de expiración"
                        name="expire"
                        type="date"
                        value={campaign.expire}
                        onChange={(e) => {
                            handleChange(e);
                        }}
                        variant="outlined"
                        fullWidth
                        size="small"
                        required
                        />
                    </Grid>
                    </Grid>
                </Box>
            )}
          </Typography>
        </Slide>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
        <Button
          disabled={activeStep === 0}
          onClick={handleBack}
          variant="contained"
        >
          Regresar
        </Button>
        <Button
          variant="contained"
          onClick={
            activeStep === steps.length - 1
              ? () => alert('Finalizado')
              : handleNext
          }
        >
          {activeStep === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
        </Button>
      </Box>
    </Box>
  );
}
