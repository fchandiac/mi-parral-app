import { IsNotEmpty, IsDateString, IsUUID, IsEnum, IsOptional, IsString } from 'class-validator';
import { Gender, Neighborhoods } from 'apps/libs/enums';


export class CreateProfileDto {
  @IsDateString()
  @IsOptional()
  birthdate: string;

  @IsUUID()
  @IsNotEmpty()
  userId: string;

  @IsOptional()
  @IsEnum(Gender)
  gender?: number | null;

  @IsOptional()
  @IsEnum(Neighborhoods)
  neighborhood?: number | null;
}
