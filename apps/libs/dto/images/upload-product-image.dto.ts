import { IsNotEmpty, IsString } from "class-validator";


export class UploadProductImageDto {
    @IsString()
    @IsNotEmpty()
    productId: string;


    file: Express.Multer.File;
}