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
import { ImagesAppService } from './images-app.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ServiceImageEntity } from '../../libs/entities/images/service-image.entity';
import { UploadServiceImageDto } from 'apps/libs/dto/images/upload-service-image.dto';
import { CommerceImageEntity } from '../../libs/entities/images/commerce-image.entity';
import { UploadCommerceImageDto } from 'apps/libs/dto/images/upload-commerce-image.dto';
import { SetPrincipalServiceImageDto } from 'apps/libs/dto/images/set-principal-service-image.dto';
import { SetPrincipalCommerceImageDto } from 'apps/libs/dto/images/set-principal-commerce-image-dto';

@Controller()
export class ImagesAppController {
  constructor(private readonly imagesAppService: ImagesAppService) {}

  @Post('/uploadService')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: ImagesAppService.servicesStorage, // Usar la configuración de almacenamiento del servicio
    }),
  )
  async uploadService(
    @Body('serviceId') serviceId: string,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<ServiceImageEntity> {
    const uploadServiceImageDto: UploadServiceImageDto = {
      serviceId,
      file,
    };
    return await this.imagesAppService.uploadService(uploadServiceImageDto);
  }

  @Post('/setPrincipalServiceImage')
  async setPrincipalServiceImage(
    @Body() dto: SetPrincipalServiceImageDto,
  ): Promise<ServiceImageEntity> {
    return await this.imagesAppService.setPrincipalServiceImage(dto);
  }

  @Get('/serviceImage')
  async getServiceImage(
    @Query('serviceId') serviceId: string,
  ): Promise<ServiceImageEntity> {
    return await this.imagesAppService.findPrincipalServiceImage(serviceId);
  }

  @Get('/serviceImages')
  async getServiceImages(
    @Query('serviceId') serviceId: string,
  ): Promise<ServiceImageEntity[]> {
    return await this.imagesAppService.findAllByServiceId(serviceId);
  }

  @Post('/uploadCommerce')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: ImagesAppService.commercesStorage, // Usar la configuración de almacenamiento del comercio
    }),
  )
  async uploadCommerce(
    @Body('commerceId') commerceId: string,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<CommerceImageEntity> {
    const uploadCommerceImageDto: UploadCommerceImageDto = {
      commerceId,
      file,
    };
    return await this.imagesAppService.uploadCommerce(uploadCommerceImageDto);
  }

  @Get('/commerceImages')
  async getCommerceImages(
    @Query('commerceId') commerceId: string,
  ): Promise<CommerceImageEntity[]> {
    return await this.imagesAppService.findAllByCommerceId(commerceId);
  }

  @Post('/setPrincipalCommerceImage')
  async setPrincipalCommerceImage(
    @Body() dto: SetPrincipalCommerceImageDto,
  ): Promise<CommerceImageEntity> {
    return await this.imagesAppService.setPrincipalCommerceImage(dto);
  }

  @Get('/commerceImage')
  async getCommerceImage(
    @Query('commerceId') commerceId: string,
  ): Promise<CommerceImageEntity> {
    return await this.imagesAppService.findPrincipalCommerceImage(commerceId);
  }

  @Delete('/commerceImage')
  async deleteCommerceImage(
    @Query('imageId') imageId: string,
  ): Promise<void> {
    return await this.imagesAppService.deleteCommerceImage(imageId);
  }

  @Delete('/serviceImage')
  async deleteServiceImage(
    @Query('imageId') imageId: string,
  ): Promise<void> {
    return await this.imagesAppService.deleteServiceImage(imageId);
  }

  
}
