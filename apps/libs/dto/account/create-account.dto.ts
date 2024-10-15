import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class CreateAccountDto {
  @IsString()
  @IsNotEmpty()
  readonly userId: string;

  @IsString()
  @IsNotEmpty()
  readonly type: string;

  @IsString()
  @IsNotEmpty()
  readonly provider: string;

  @IsString()
  @IsNotEmpty()
  readonly providerAccountId: string;

  @IsString()
  @IsOptional()
  readonly refresh_token?: string;

  @IsString()
  @IsOptional()
  readonly access_token?: string;

  @IsString()
  @IsOptional()
  readonly token_type?: string;

  @IsString()
  @IsOptional()
  readonly scope?: string;

  @IsString()
  @IsOptional()
  readonly id_token?: string;

  @IsString()
  @IsOptional()
  readonly session_state?: string;

  @IsString()
  @IsOptional()
  readonly oauth_token_secret?: string;

  @IsString()
  @IsOptional()
  readonly oauth_token?: string;

  @IsNumber()
  @IsOptional()
  readonly expires_at?: number;
}
