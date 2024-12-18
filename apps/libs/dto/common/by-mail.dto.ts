import { IsEmail, IsNotEmpty, IsString} from 'class-validator';


export class ByEmailDto {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;
}
