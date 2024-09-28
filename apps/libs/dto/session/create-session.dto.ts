import { IsString, IsNotEmpty } from 'class-validator';

export class CreateSessionDto {
  @IsString()
  @IsNotEmpty()
  readonly sessionToken: string;

  @IsString()
  @IsNotEmpty()
  readonly userId: string;

  @IsString()
  @IsNotEmpty()
  readonly expires: string;
}
