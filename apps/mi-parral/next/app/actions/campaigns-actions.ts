import { auth } from '../../auth';
import { validateUser } from './auth-actions';
import { revalidatePath } from 'next/cache';

import { listUserCommerces } from './commerces-actions';
import { listUserProducts } from './products-actions';
import { listUserServices } from './services-actions';

const couponsUrl = process.env.NEXT_PUBLIC_COUPONS_BACKEND_URL;


export enum Gender {
  ALL = 0, // Todos los géneros
  MALE = 1, // Solo hombres
  FEMALE = 2, // Solo mujeres
  OTHER = 3, // Otros géneros
}

export enum Neighborhoods {
  ALL = 0, // Todos los barrios
  CENTRO = 1, // Solo barrios locales
  BUENOS_AIRES = 2, // Solo barrios no locales
  ARRAU_MENDEZ = 3, // Solo barrios no locales
  IGUALDAD_SUR = 4, // Solo barrios no locales
  LOS_OLIVOS = 5, // Solo barrios no locales
  VIÑA_DEL_MAR = 6, // Solo barrios no locales
  CAMINO_A_CATILLO = 7, // Solo barrios no locales
  CAMINO_A_BULLILEO = 8, // Solo barrios no locales
  TALQUITA = 9, // Solo barrios no locales
  OTROS = 10, // Solo barrios no locales
}

export enum DiscountStatus {
  CREATED = 0, // Cupón recién creado y disponible
  TAKEN = 1, // Cupón tomado por un usuario pero no usado
  REDEEMED = 2, // Cupón canjeado o utilizado
  EXPIRED = 3, // Cupón que ha expirado antes de su uso
  DELETED = 4, // Cupón eliminado por el administrador
}

export enum DiscountType {
  NULL = -1, // Tipo de descuento nulo
  SERVICE = 0, // Cupón para un servicio
  PRODUCT = 1, // Cupón para un producto
  COMMERCE = 2, // Cupón para un comercio
}

export interface CreateCampaignType {
  name: string; // Nombre de la campaña
  type: DiscountType; // Tipo de descuento (puede ser SERVICE, PRODUCT o COMMERCE)
  referenceId: string | null; // ID de referencia para asociar con otra entidad, puede ser nulo
  quanty: number; // Cantidad de cupones a crear
  minAge: number; // Edad mínima para la campaña
  maxAge: number; // Edad máxima para la campaña
  gender?: Gender; // Género de los usuarios objetivo (opcional)
  neighborhood?: Neighborhoods; // Barrio de los usuarios objetivo (opcional)
  discount: number; // Descuento que debe estar entre 1 y 100
  expire: Date; // Fecha de expiración de la campaña
  rules: string; // Reglas de la campaña
}

interface CampaignType {
  id: string;
  userId: string;
  type: DiscountType;
  referenceId: string | null;
  minAge: number;
  maxAge: number;
  expire: Date;
  created: Date;
  updated: Date;
  deleted: Date | null;
}

export interface RefereceType {
  id: string;
  name: string;
}

export interface GenderType {
  value: number;
  name: string;
}

export interface NeighborhoodType {
  value: number;
  name: string;
}


export const userDiscountsTypes = async () => {
  const userServices = await listUserServices();
  const userCommerces = await listUserCommerces();
  const userProducts = await listUserProducts();

  const result: DiscountType[] = [];

  if (
    userServices.length > 0 &&
    userCommerces.length > 0 &&
    userProducts.length > 0
  ) {
    result.push(DiscountType.SERVICE);
  }

  if (userServices.length > 0) {
    result.push(DiscountType.SERVICE);
  }

  if (userCommerces.length > 0) {
    result.push(DiscountType.COMMERCE);
  }

  if (userProducts.length > 0) {
    result.push(DiscountType.PRODUCT);
  }

  return result;
};

export const formatNeighborhoodName = (name: string): string => {
  if (name === "ALL") {
    return "Todos";
  }
  return name
    .toLowerCase()
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export const getAllNeighborhoods = (): NeighborhoodType[] => {
  return Object.values(Neighborhoods)
    .filter((value) => typeof value === 'number')
    .map((value) => ({
      value: value as number,
      name: formatNeighborhoodName(Neighborhoods[value as number]),
    }));
};

export const createCampaign = async (data: CreateCampaignType) => {
  try {
    const session = await auth();
    const user = await validateUser(session?.user?.email);

    if (!user || !user.id) {
      throw new Error('User validation failed');
    }

    const campaign = {
      ...data,
      userId: user.id,
    };

    const response = await fetch(`${couponsUrl}/campaigns/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(campaign),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Error creating campaign: ${error}`);
    }

    revalidatePath('/userApp/posts/campaigns');
    return response.json();

  } catch (error) {
    console.error(error);
    throw new Error('Failed to create campaign. Please try again.');
  }
};



export const listUserCampaigns = async () => {
  const session = await auth();
  const user = await validateUser(session?.user?.email);
  const response = await fetch(
    `${couponsUrl}/campaigns/findAllByUserId?id=${user.id}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  return response.json();
}

export const refresCampaignsPage = async () => {
  revalidatePath('/userApp/posts/campaigns/ui/CampaignsList');
  return;
}
