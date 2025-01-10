import {
    Controller,
    Post,
    Body,
    UploadedFile,
    UseInterceptors,
    Get,
    Query,
    Delete,
  } from '@nestjs/common';
  import { CommerceService } from './commerce.service';
  import { FileInterceptor } from '@nestjs/platform-express';
  import { CommerceImageEntity } from '../../libs/entities/images/commerce-image.entity';
  import { UploadCommerceImageDto } from 'apps/libs/dto/images/upload-commerce-image.dto';
  import { SetPrincipalCommerceImageDto } from 'apps/libs/dto/images/set-principal-commerce-image-dto';
  
  @Controller('commerce')
  export class CommerceController {
    constructor(private readonly commerceService: CommerceService) {}
  
    @Post('/upload')
    @UseInterceptors(
      FileInterceptor('file', {
        storage: CommerceService.storage, // Usar la configuración de almacenamiento del servicio
      }),
    )
    async upload(
      @Body('commerceId') commerceId: string,
      @UploadedFile() file: Express.Multer.File,
    ): Promise<CommerceImageEntity> {
      const uploadCommerceImageDto: UploadCommerceImageDto = {
        commerceId,
        file,
      };
      return await this.commerceService.upload(uploadCommerceImageDto);
    }
  
    @Post('/setPrincipal')
    async setPrincipalImage(
      @Body() dto: SetPrincipalCommerceImageDto,
    ): Promise<CommerceImageEntity> {
      return await this.commerceService.setPrincipalCommerceImage(dto);
    }
  
    @Get('/image')
    async getImage(
      @Query('commerceId') commerceId: string,
    ): Promise<CommerceImageEntity> {
      
      return await this.commerceService.findPrincipalImage(commerceId);
    }
  
    @Get('/images')
    async getCommerceImages(
      @Query('commerceId') commerceId: string,
    ): Promise<CommerceImageEntity[]> {
      return await this.commerceService.findAllById(commerceId);
    }
  
    @Delete()
    async deleteCommerceImage(
      @Query('imageId') imageId: string,
    ): Promise<void> {
      return await this.commerceService.deleteImage(imageId);
    }
  }
  