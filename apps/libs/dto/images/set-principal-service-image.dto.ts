import { IsNotEmpty, IsString } from "class-validator";

export class SetPrincipalServiceImageDto {
    @IsString()
    @IsNotEmpty()
    serviceId!: string;

    @IsString()
    @IsNotEmpty()
    imageId!: string;
}