import { IsEnum } from 'class-validator';

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

export enum DiscountGender {
  ALL = 0, // Todos los géneros
  MALE = 1, // Solo hombres
  FEMALE = 2, // Solo mujeres
  OTHER = 3, // Otros géneros
}

export enum DiscountNeighborhood {
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
}

export class CreateDiscountDto {
  name!: string;

  @IsEnum(DiscountStatus)
  status!: DiscountStatus; // Usa el enum para definir los posibles valores

  userId!: string | null;
  validationUserId!: string | null;
  validationDate?: Date | null;
  expire!: Date;
  discount!: number;

  @IsEnum(DiscountType)
  type!: number; // Usa el enum para definir los posibles valores

  referenceId!: string | null;
  minAge?: number | null;
  maxAge?: number | null;

  @IsEnum(DiscountNeighborhood)
  neighborhood?: number | null;

  @IsEnum(DiscountGender)
  gender?: number | null;
}
