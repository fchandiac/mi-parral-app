import { IsInt, IsEnum, IsOptional, IsUUID, IsDateString } from 'class-validator';
import { Gender, Neighborhoods } from '../../enums';

export class CreateCampaignDto {
  @IsInt()
  minAge: number;

  @IsInt()
  maxAge: number;

  @IsEnum(Gender)
  @IsOptional() // Esto es opcional ya que tiene un valor por defecto en la entidad
  gender?: Gender;

  @IsEnum(Neighborhoods)
  @IsOptional() // También opcional, con valor por defecto en la entidad
  neighborhood?: Neighborhoods;

  @IsDateString()
  @IsOptional() // Es opcional porque el valor `created` se genera automáticamente
  created?: Date;

  @IsDateString()
  @IsOptional() // Esto será manejado automáticamente en la entidad
  updated?: Date;

  @IsDateString()
  @IsOptional() // Esto también es opcional en caso de que sea para soft delete
  deleted?: Date;
}
