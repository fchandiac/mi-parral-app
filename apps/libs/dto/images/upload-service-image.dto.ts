import { IsString, IsNotEmpty } from 'class-validator';


export class UploadServiceImageDto {
    @IsString()
    @IsNotEmpty()
    serviceId: string;


    @IsNotEmpty()
    file: Express.Multer.File;
}