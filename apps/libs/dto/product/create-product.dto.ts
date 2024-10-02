import { IsInt, IsNotEmpty, IsString, IsOptional, IsUUID } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateProductDto {
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

    @IsUUID() // Valida que el valor sea un UUID
    @IsNotEmpty()
    userId: string;

    @IsOptional() // Hace que este campo no sea obligatorio
    @IsString()
    whatsapp?: string; // Campo opcional para el número de WhatsApp

    @IsUUID() // Valida que el valor sea un UUID
    @IsNotEmpty()
    categoryId: string;
}
