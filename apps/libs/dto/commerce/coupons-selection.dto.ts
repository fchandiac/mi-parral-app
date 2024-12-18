import { 
    IsNumber, 
    Min, 
    Max 
} from 'class-validator';
import { Transform } from 'class-transformer';

export class CouponsSelectionDto {
 
    @IsNumber()
    @Min(0) // Ejemplo de validación para la edad mínima
    @Max(120) // Ejemplo de validación para un rango máximo
    @Transform(({ value }) => Number(value)) // Transformar a número
    age: number;


}
