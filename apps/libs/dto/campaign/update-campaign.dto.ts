import { IsInt, IsEnum, IsOptional, IsUUID, IsDateString, IsNotEmpty, IsString } from 'class-validator';
import { Gender, Neighborhoods } from '../../enums';

export class UpdateCampaignDto {


  @IsNotEmpty()
  @IsString()
  id: string;





 



  @IsDateString()
  @IsOptional()
  updated?: Date;

  @IsDateString()
  @IsOptional()
  deleted?: Date;
}
