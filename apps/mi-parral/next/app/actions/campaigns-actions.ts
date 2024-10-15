import { auth } from '../../auth';
import { validateUser } from './auth-actions';
import { revalidatePath } from 'next/cache';

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
}

export enum DiscountType {
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
