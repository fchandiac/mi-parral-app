import {
  IsEnum,
  IsOptional,
  IsString,
  IsUUID,
  IsInt,
  IsNotEmpty,
  IsDateString,
  IsDecimal,
  ValidateIf,
} from 'class-validator';
import { Type, Transform } from 'class-transformer'; // Importar Transform
import { DiscountType, Gender, Neighborhoods } from '../../enums'; // Importar los enums necesarios

export class CreateCampaignDto {
  @IsUUID()
  userId?: string;

  @IsString()
  @IsNotEmpty()
  name!: string; // Nombre de la campaña

  @IsInt()
  @Transform(({ value }) => Number(value)) // Transformar a número
  type: number = 0; // Valor por defecto

  @IsUUID()
  referenceId?: string;

  @IsInt()
  @IsNotEmpty()
  @Transform(({ value }) => Number(value)) // Transformar a número
  minAge!: number; // Edad mínima

  @IsInt()
  @IsNotEmpty()
  @Transform(({ value }) => Number(value)) // Transformar a número
  maxAge!: number; // Edad máxima

  @IsInt()
  @Transform(({ value }) => Number(value)) // Transformar a número
  gender: number = 0; // Valor por defecto

  @IsInt()
  @Transform(({ value }) => Number(value)) // Transformar a número
  neighborhood:number = 0; // Valor por defecto

  @IsDateString()
  @IsNotEmpty()
  expire!: Date; // Fecha de expiración

  @IsInt()
  @IsNotEmpty()
  @Transform(({ value }) => Number(value)) // Transformar a número
  quanty!: number; // Cantidad de cupones a crear

  @IsInt()
  @IsNotEmpty()
  @Transform(({ value }) => Number(value)) // Transformar a número decimal
  discount!: number; // Descuento a aplicar en cada cupón

  @IsString()
  @IsOptional()
  rules?: string; // Reglas opcionales para el cupón
}
