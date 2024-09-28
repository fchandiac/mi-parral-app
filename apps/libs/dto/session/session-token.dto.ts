import { IsNotEmpty, IsString} from 'class-validator';

export class SessionTokenDto {
  @IsNotEmpty()
  @IsString()
  token: string;
}
