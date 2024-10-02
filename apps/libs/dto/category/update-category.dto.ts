import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateCategoryDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsOptional()
  name?: string;
}
