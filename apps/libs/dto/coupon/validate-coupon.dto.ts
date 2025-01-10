

import { IsString, IsNotEmpty } from 'class-validator';

export class ValidateCouponDto {
  @IsString()
  @IsNotEmpty() // Campo obligatorio
  id!: string; // ID del cupón a validar

  @IsString()
  @IsNotEmpty() // Campo obligatorio
  validationUserId!: string; // ID del usuario que intenta validar el cupón
}