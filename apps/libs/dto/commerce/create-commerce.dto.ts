import { IsString, IsNotEmpty, IsOptional, IsUUID } from 'class-validator';


export class CreateCommerceDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()  // Hacemos que la descripción sea opcional
  description?: string;

  @IsUUID()  // Validamos que sea un UUID versión 4
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsOptional()  // Hacemos que el número de WhatsApp sea opcional
  whatsapp?: string;

  @IsString()
  @IsOptional()  // Hacemos que la dirección sea opcional
  address?: string;

  @IsString()
  @IsOptional()  // Hacemos que la ubicación sea opcional
  location?: string;

  @IsUUID() // Valida que el valor sea un UUID
  @IsNotEmpty()
  categoryId: string;

  
}
