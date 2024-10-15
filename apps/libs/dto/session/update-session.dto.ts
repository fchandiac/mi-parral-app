import { IsString, IsOptional } from 'class-validator';

export class UpdateSessionDto {
  @IsString()
  @IsOptional()
  readonly sessionToken?: string;

  @IsString()
  @IsOptional()
  readonly userId?: string;

  @IsString()
  @IsOptional()
  readonly expires?: string;
}
