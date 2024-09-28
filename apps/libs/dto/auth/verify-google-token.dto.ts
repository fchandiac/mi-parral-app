import { IsNotEmpty, IsString} from 'class-validator';

export class VerifyGoogleTokenDto {
  @IsNotEmpty()
  @IsString()
  token: string;
}
