import { IsString, IsOptional, IsDateString, IsUUID } from 'class-validator';

export class UpdateProfileDto {
  @IsUUID()
  id: string;
  
  @IsDateString()
  @IsOptional()
  birthdate?: string;

  @IsString()
  @IsOptional()
  gender?: string;

  @IsString()
  @IsOptional()
  neighborhood?: string;
}
