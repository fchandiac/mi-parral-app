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
  import { ServiceService } from './service.service';
  import { FileInterceptor } from '@nestjs/platform-express';
  import { ServiceImageEntity } from '../../libs/entities/images/service-image.entity';
  import { UploadServiceImageDto } from 'apps/libs/dto/images/upload-service-image.dto';
  import { SetPrincipalServiceImageDto } from 'apps/libs/dto/images/set-principal-service-image.dto';
  
  @Controller('service')
  export class ServiceController {
    constructor(private readonly service: ServiceService) {}

    @Post('/upload')
    @UseInterceptors(
      FileInterceptor('file', {
        storage: ServiceService.storage, // Usar la configuración de almacenamiento del servicio
      }),
    )
    async upload(
      @Body('serviceId') serviceId: string,
      @UploadedFile() file: Express.Multer.File,
    ): Promise<ServiceImageEntity> {
      const uploadServiceImageDto: UploadServiceImageDto = {
        serviceId,
        file,
      };
      return await this.service.upload(uploadServiceImageDto);
    }
  
    @Post('/setPrincipal')
    async setPrincipalImage(
      @Body() dto: SetPrincipalServiceImageDto,
    ): Promise<ServiceImageEntity> {
      return await this.service.setPrincipalImage(dto);
    }
  
    @Get('/image')
    async getImage(
      @Query('serviceId') serviceId: string,
    ): Promise<ServiceImageEntity> {
      return await this.service.findPrincipalImage(serviceId);
    }
  
    @Get('/images')
    async getServiceImages(
      @Query('serviceId') serviceId: string,
    ): Promise<ServiceImageEntity[]> {
      return await this.service.findAllById(serviceId);
    }
  
    @Delete()
    async deleteServiceImage(
      @Query('imageId') imageId: string,
    ): Promise<void> {
      return await this.service.deleteImage(imageId);
    }
  }
  