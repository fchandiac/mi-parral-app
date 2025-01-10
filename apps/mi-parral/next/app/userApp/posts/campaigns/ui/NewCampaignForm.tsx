'use client';
import React, { Suspense, useState } from 'react';
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
  RefereceType,
  GenderType,
  NeighborhoodType,
  getAllNeighborhoods,
  formatNeighborhoodName,
} from '@/app/actions/campaigns-actions';
import { useNewCampaign } from '@/app/hooks/useNewCampaign';

import moment from 'moment';

import { createCampaign } from '@/app/actions/campaigns-actions';

const steps = ['Paso 1', 'Paso 2', 'Paso 3', 'Paso 4', 'Paso 5'];

interface NewCampaignFormProps {
  UserServices: any;
  UserCommerces: any;
  UserProducts: any;
  userDiscountsTypesList: DiscountType[];
  afterSubmit: () => void;
}

export default function NewCampaignForm({
  UserServices,
  UserCommerces,
  UserProducts,
  userDiscountsTypesList,
  afterSubmit,
}: NewCampaignFormProps) {
  const [activeStep, setActiveStep] = useState(0);
  const [validateNextStep, setValidateNextStep] = useState(false);
  const [discountTypeList, setDiscountTypeList] = useState(
    userDiscountsTypesList,
  );
  const [referenceList, setReferenceList] = useState<RefereceType[]>([]);
  const [referenceSelected, setReferenceSelected] = useState<RefereceType>();
  const [genderList, setGenderList] = useState<GenderType[]>([
    {
      name: 'Todos',
      value: Gender.ALL,
    },
    {
      name: 'Masculino',
      value: Gender.MALE,
    },
    {
      name: 'Femenino',
      value: Gender.FEMALE,
    },
    {
      name: 'Otro',
      value: Gender.OTHER,
    },
  ]);
  const [neighborhoodList, setNeighborhoodList] = useState<NeighborhoodType[]>(
    getAllNeighborhoods(),
  );

  const { createCampaign, success, isLoading: isCreatingCampaign } = useNewCampaign();

  const [campaign, setCampaign] = useState<CreateCampaignType>({
    name: '', // Nombre de la campaña
    type: discountTypeList[0], // Valor por defecto
    referenceId: '', // ID de referencia para asociar con otra entidad
    quanty: 1, // Cantidad de cupones a crear
    minAge: 0, // Edad mínima para la campaña
    maxAge: 100, // Edad máxima para la campaña
    gender: Gender.ALL, // Género (opcional)
    neighborhood: Neighborhoods.ALL, // Barrio (opcional)
    discount: 1, // Descuento del 1 al 100
    expire: new Date(), // Fecha de expiración de la campaña
    rules: '', // Reglas de la campaña
  });

  const typeToString = (type: number) => {
    switch (type) {
      case 0:
        return 'Servicio';
      case 1:
        return 'Producto';
      case 2:
        return 'Comercio';
      default:
        return '';
    }
  };

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

  const validationStep01 = () => {
    setValidateNextStep(true);

    if (campaign.name === '' || campaign.name.length === 0) {
      setValidateNextStep(false);
    }

    if (campaign.quanty < 1) {
      setValidateNextStep(false);
    }

    if (campaign.type === DiscountType.NULL) {
      setValidateNextStep(false);
    }
  };

  const validationStep02 = () => {
    setValidateNextStep(true);

    if (campaign.referenceId === null) {
      setValidateNextStep(false);
    }
  };

  const step01 = () => {
    return (
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
                validationStep01();
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
                validationStep01();
              }}
              variant="outlined"
              fullWidth
              size="small"
              required
            />
          </Grid>
          <Grid item>
            <FormControl fullWidth variant="outlined" size="small">
              <InputLabel id="type-select-label">Tipo de descuento</InputLabel>
              <Select
                labelId="type-select-label"
                fullWidth
                value={campaign.type}
                label="Tipo de descuento"
                variant="outlined"
                name="category"
                onChange={(e) => {
                  setCampaign((prevCampaign) => ({
                    ...prevCampaign,
                    type: e.target.value as DiscountType,
                  }));

                  switch (e.target.value) {
                    case DiscountType.SERVICE:
                      setReferenceList(UserServices);
                      break;
                    case DiscountType.PRODUCT:
                      setReferenceList(UserProducts);
                      break;
                    case DiscountType.COMMERCE:
                      setReferenceList(UserCommerces);
                      break;
                    default:
                      setReferenceList([]);
                      break;
                  }

                  validationStep01();
                }}
              >
                {userDiscountsTypesList.map((type: DiscountType) => (
                  <MenuItem value={type}>
                    {type === DiscountType.SERVICE
                      ? 'Servicio'
                      : type === DiscountType.PRODUCT
                        ? 'Producto'
                        : type === DiscountType.COMMERCE
                          ? 'Comercio'
                          : type === DiscountType.NULL
                            ? 'No tienes servicios, productos o comercios.'
                            : ''}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Box>
    );
  };

  const step02 = (discountType: DiscountType) => {
    return (
      <Box>
        <Grid spacing={1} direction={'column'} container>
          <Grid item>
            <Typography variant="h6" align="center">
              {'Selecciona tu '}
              {discountType === DiscountType.SERVICE
                ? 'pervicio'
                : discountType === DiscountType.PRODUCT
                  ? 'producto'
                  : discountType === DiscountType.COMMERCE
                    ? 'comercio'
                    : ''}{' '}
              en promoción.
            </Typography>
          </Grid>
          <Grid item>
            <FormControl fullWidth variant="outlined" size="small">
              <InputLabel id="reference-select-label">
                {discountType === DiscountType.SERVICE
                  ? 'Servicios'
                  : discountType === DiscountType.PRODUCT
                    ? 'Productos'
                    : discountType === DiscountType.COMMERCE
                      ? 'Comercios'
                      : ''}
              </InputLabel>
              <Select
                labelId="reference-select-label"
                fullWidth
                value={campaign.referenceId}
                label="Referencia"
                variant="outlined"
                name="referenceId"
                onChange={(e) => {
                  setCampaign((prevCampaign) => ({
                    ...prevCampaign,
                    referenceId: e.target.value as string,
                  }));
                  setReferenceSelected(
                    referenceList.find(
                      (reference) => reference.id === e.target.value,
                    ),
                  );
                  validationStep02();
                }}
              >
                {referenceList.map((reference: RefereceType) => (
                  <MenuItem value={reference.id}>{reference.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Box>
    );
  };

  const resume = () => {
    return (
      <Box>
        <Grid spacing={1} direction={'column'} container>
          <Grid item>
            <Typography variant="h6" align="center">
              Resumen
            </Typography>
          </Grid>
          <Grid item textAlign={'left'}>
            <Typography fontSize={14}>
              <strong>Nombre:</strong> {campaign.name}
            </Typography>
          </Grid>
          <Grid item>
            <Typography fontSize={14} textAlign={'left'}>
              <strong>Cantidad de cupones:</strong> {campaign.quanty}
            </Typography>
          </Grid>
          <Grid item>
            <Typography fontSize={14} textAlign={'left'}>
              <strong>Tipo de descuento:</strong> {typeToString(campaign.type)}
            </Typography>
            <Typography fontSize={14} textAlign={'left'}>
              {(() => {
                switch (campaign.type) {
                  case DiscountType.SERVICE:
                    return (
                      <>
                        <strong>Servicio:</strong> {referenceSelected?.name}
                      </>
                    );
                  case DiscountType.PRODUCT:
                    return (
                      <>
                        <strong>Producto:</strong> {referenceSelected?.name}
                      </>
                    );
                  case DiscountType.COMMERCE:
                    return (
                      <>
                        <strong>Comercio:</strong> {referenceSelected?.name}
                      </>
                    );
                  default:
                    return '';
                }
              })()}
            </Typography>
          </Grid>
          <Grid item>
            <Typography fontSize={14} textAlign={'left'}>
              <strong>Descuento:</strong> {campaign.discount}%
            </Typography>
            <Typography fontSize={14} textAlign={'left'}>
              <strong>Edad:</strong> {campaign.minAge} - {campaign.maxAge}
            </Typography>
            <Typography fontSize={14} textAlign={'left'}>
              <strong>Género:</strong> {genderList.find(gender => gender.value === campaign.gender)?.name}
            </Typography>
            <Typography fontSize={14} textAlign={'left'}>
              <strong>Barrio:</strong>{neighborhoodList.find( neighborhood => neighborhood.value === campaign.neighborhood)?.name}
             
            </Typography>
          </Grid>
          <Grid item>
            <Typography fontSize={14} textAlign={'left'}>
              <strong>Reglas:</strong> {campaign.rules}
            </Typography>
            <Typography fontSize={14} textAlign={'left'}>
              <strong>Expiración:</strong> {moment(campaign.expire).format('DD-MM-YYYY')}
            </Typography>
            </Grid>
        </Grid>
      </Box>
    );
  };

  const submit = async() => {

    const createCampaignResponse = await createCampaign(campaign);
    
    if (createCampaignResponse) {
      setValidateNextStep(true)
      afterSubmit();
    }
  }


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
            {activeStep === 0 && step01()}
            {activeStep === 1 && step02(campaign.type)}
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
                  <Grid item>
                    <FormControl fullWidth variant="outlined" size="small">
                      <InputLabel id="gender-select-label">Genero</InputLabel>
                      <Select
                        value={campaign.gender}
                        label="Género"
                        variant="outlined"
                        onChange={(e) => {
                          const value = e.target.value as number;

                          setCampaign((prevCampaign) => ({
                            ...prevCampaign,
                            gender: value, // Usar e.target.value en lugar de e.target
                          }));
                        }}
                      >
                        {genderList.map((gender) => (
                          <MenuItem value={gender.value}>
                            {gender.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item>
                    <FormControl fullWidth variant="outlined" size="small">
                      <InputLabel id="neighborhood-select-label">
                        Barrio
                      </InputLabel>
                      <Select
                        value={campaign.neighborhood}
                        label="Barrio"
                        variant="outlined"
                        onChange={(e) => {
                          setCampaign((prevCampaign) => ({
                            ...prevCampaign,
                            neighborhood: e.target.value as Neighborhoods,
                          }));
                        }}
                        fullWidth
                      >
                        {neighborhoodList.map((neighborhood) => (
                          <MenuItem value={neighborhood.value}>
                            {neighborhood.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
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
                      multiline={true}
                      rows={3}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      variant="outlined"
                      fullWidth
                      size="small"
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
            {activeStep === 4 && resume()}
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
          disabled={!validateNextStep}
          onClick={() => {
            if (activeStep === 0) {
              // Lógica específica para el paso 2
              switch (campaign.type) {
                case DiscountType.SERVICE:
                  setReferenceList(UserServices);
                  break;
                case DiscountType.PRODUCT:
                  setReferenceList(UserProducts);
                  break;
                case DiscountType.COMMERCE:
                  setReferenceList(UserCommerces);
                  break;
                default:
                  setReferenceList([]);
                  break;
              }
            }

            // Si es el último paso, muestra el mensaje "Finalizado", de lo contrario, continúa al siguiente paso
            if (activeStep === steps.length - 1) {
              submit();
            } else {
              handleNext();
            }
          }}
        >
          {activeStep === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
        </Button>
      </Box>
    </Box>
  );
}
