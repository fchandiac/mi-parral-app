import { IsString, IsOptional, IsDateString, IsUUID } from 'class-validator';

export class UpdateProfileDto {
  @IsDateString()
  @IsOptional()
  birthdate?: string;

  @IsString()
  @IsOptional()
  gender?: string;

  @IsString()
  @IsOptional()
  neighborhood?: string;

  @IsUUID()
  @IsOptional()
  userId?: string;
}
