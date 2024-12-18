import { IsString, IsNotEmpty, IsInt } from 'class-validator';

export class UpdateCouponStatusDto {
  @IsString()
  @IsNotEmpty()
  id!: string; // ID del cupón

  @IsInt()
  @IsNotEmpty()
  status!: number; // Nuevo estado del cupón

  @IsString()
  @IsNotEmpty()
  userId: string; // ID del usuario que realiza la acción
}
