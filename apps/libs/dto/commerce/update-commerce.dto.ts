import { IsString, IsNotEmpty, IsOptional, IsUUID } from 'class-validator';

export class UpdateCommerceDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional() // Hacemos que la descripción sea opcional
  description?: string;

  @IsString()
  @IsOptional() // Hacemos que el número de WhatsApp sea opcional
  whatsapp?: string;

  @IsString()
  @IsOptional() // Hacemos que la dirección sea opcional
  address?: string;

  @IsString()
  @IsOptional() // Hacemos que la ubicación sea opcional
  location?: string;
}
