import { IsString, IsNotEmpty } from "class-validator";


export class SetPrincipalCommerceImageDto {
    @IsString()
    @IsNotEmpty()
    commerceId!: string;

    @IsString()
    @IsNotEmpty()
    imageId!: string;
}