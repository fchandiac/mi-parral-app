import { IsString, IsNotEmpty, IsDateString, IsUUID } from 'class-validator';

export class CreateProfileDto {
  @IsDateString()
  @IsNotEmpty()
  birthdate: string;

  @IsString()
  @IsNotEmpty()
  gender: string;

  @IsString()
  @IsNotEmpty()
  neighborhood: string;

  @IsUUID()
  @IsNotEmpty()
  userId: string;
}
