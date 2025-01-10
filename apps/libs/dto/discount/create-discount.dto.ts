import { IsEnum } from 'class-validator';

import { Gender, DiscountStatus, DiscountType, Neighborhoods } from 'apps/libs/enums';





export class CreateDiscountDto {
  name!: string;

  @IsEnum(DiscountStatus)
  status!: DiscountStatus; // Usa el enum para definir los posibles valores

  userId!: string | null;
  validationUserId!: string | null;
  validationDate?: Date | null;
  expire!: Date;
  discount!: number;

  @IsEnum(DiscountType)
  type!: number; // Usa el enum para definir los posibles valores

  referenceId!: string | null;
  minAge?: number | null;
  maxAge?: number | null;

  @IsEnum(Neighborhoods)
  neighborhood?: number | null;

  @IsEnum(Gender)
  gender?: number | null;
}
