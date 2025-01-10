import { IsString, IsInt, IsOptional, IsDate, IsNotEmpty } from 'class-validator'; // Importa validadores necesarios
import { CouponStatus } from 'apps/libs/enums'; // Asegúrate de importar el enum correcto

export class CreateCouponDto {
  @IsInt()
  @IsOptional() // Campo opcional
  discount?: number; // Descuento, opcional

  @IsDate()
  @IsNotEmpty() // Campo obligatorio
  expire!: Date; // Fecha de caducidad

  @IsString()
  @IsOptional() // Campo opcional
  rules?: string; // Reglas adicionales, opcional


  @IsString()
  @IsNotEmpty() // Campo obligatorio
  campaignId!: string; // ID de la campaña a la que pertenece el cupón
}
