import { IsString, IsNotEmpty } from "class-validator";


export class SetPrincipalProductImageDto {
    @IsString()
    @IsNotEmpty()
    productId!: string;

    @IsString()
    @IsNotEmpty()
    imageId!: string;
}