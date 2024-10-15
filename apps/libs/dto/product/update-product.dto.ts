import { IsInt, IsNotEmpty, IsString, IsOptional, IsUUID } from 'class-validator';
import { Transform } from 'class-transformer';

export class UpdateProductDto {
    @IsString()
    @IsNotEmpty()
    id: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsInt()
    @IsNotEmpty()
    @Transform(({ value }: { value: string }) => parseInt(value))
    price: number;

    @IsOptional() // Hace que este campo no sea obligatorio
    @IsString()
    whatsapp?: string; // Campo opcional para el número de WhatsApp
}
