import { IsString, IsEmail, IsOptional, IsNotEmpty } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsOptional()
  @IsString()
  readonly password?: string;


  @IsOptional()
  @IsString()
  readonly image?: string;

  @IsOptional()
  @IsString()
  @Transform(({ value }) => value || 'user')
  readonly role?: string;

  @IsOptional()
  @IsString()
  readonly googleId?: string;
}
