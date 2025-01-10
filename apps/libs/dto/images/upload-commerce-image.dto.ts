import { IsNotEmpty, IsString } from "class-validator";


export class UploadCommerceImageDto {
    @IsString()
    @IsNotEmpty()
    commerceId: string;


    file: Express.Multer.File;
}