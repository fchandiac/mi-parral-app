import { IsNotEmpty, IsDateString, IsUUID, IsEnum, IsOptional, IsString } from 'class-validator';

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

export class CreateProfileDto {
  @IsDateString()
  @IsNotEmpty()
  birthdate: string;

  @IsUUID()
  @IsNotEmpty()
  userId: string;

  @IsOptional()
  @IsEnum(DiscountGender)
  gender?: number | null;

  @IsOptional()
  @IsEnum(DiscountNeighborhood)
  neighborhood?: number | null;

  
}
