import { IsInt, IsEnum, IsOptional, IsUUID, IsDateString } from 'class-validator';
import { Gender, Neighborhoods } from '../../enums';

export class UpdateCampaignDto {
  @IsUUID()
  @IsOptional() // Es opcional ya que no siempre se actualizará el ID
  uuid?: string;

  @IsInt()
  @IsOptional()
  minAge?: number;

  @IsInt()
  @IsOptional()
  maxAge?: number;

  @IsEnum(Gender)
  @IsOptional()
  gender?: Gender;

  @IsEnum(Neighborhoods)
  @IsOptional()
  neighborhood?: Neighborhoods;

  @IsDateString()
  @IsOptional() // Se puede actualizar manualmente si es necesario
  created?: Date;

  @IsDateString()
  @IsOptional()
  updated?: Date;

  @IsDateString()
  @IsOptional()
  deleted?: Date;
}
