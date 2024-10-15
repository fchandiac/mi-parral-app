import { IsDate, IsDecimal, IsInt, IsNotEmpty, IsOptional, IsUUID } from 'class-validator';

export class CreateCouponDto {
  @IsInt()
  @IsNotEmpty()
  status: number;

  @IsUUID()
  @IsOptional()
  userId: string | null;

  @IsUUID()
  @IsOptional()
  validationUserId: string | null;

  @IsDate()
  @IsOptional()
  validationDate: Date | null;

  @IsDate()
  @IsNotEmpty()
  expire: Date;

  @IsDecimal()
  @IsNotEmpty()
  discount: number;

  @IsUUID()
  @IsNotEmpty()
  campaignId: string; // Relación con CampaignEntity
}
