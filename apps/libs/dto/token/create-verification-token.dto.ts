import { IsString } from 'class-validator';

export class CreateVerificationTokenDto {
  @IsString()
  readonly token: string;

  @IsString()
  readonly identifier: string;

  @IsString()
  readonly expires: string;
}
