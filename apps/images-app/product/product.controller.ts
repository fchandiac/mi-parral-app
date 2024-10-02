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
  import { ProductService } from './product.service';
  import { FileInterceptor } from '@nestjs/platform-express';
  import { ProductImageEntity } from 'apps/libs/entities/images/product-image.entity';
  import { UploadProductImageDto } from 'apps/libs/dto/images/upload-product-image.dto';
  import { SetPrincipalProductImageDto } from 'apps/libs/dto/images/set-principal-product-image.dto';
  
  @Controller('product')
  export class ProductController {
    constructor(private readonly productService: ProductService) {}
  
    @Post('/upload')
    @UseInterceptors(
      FileInterceptor('file', {
        storage: ProductService.storage, // Usar la configuración de almacenamiento del servicio
      }),
    )
    async upload(
      @Body('productId') productId: string,
      @UploadedFile() file: Express.Multer.File,
    ): Promise<ProductImageEntity> {
      const uploadProductImageDto: UploadProductImageDto = {
        productId,
        file,
      };
      return await this.productService.upload(uploadProductImageDto);
    }
  
    @Post('/setPrincipal')
    async setPrincipalImage(
      @Body() dto: SetPrincipalProductImageDto,
    ): Promise<ProductImageEntity> {
      return await this.productService.setPrincipalProductImage(dto);
    }
  
    @Get('/image')
    async getImage(
      @Query('productId') productId: string,
    ): Promise<ProductImageEntity> {
      return await this.productService.findPrincipalImage(productId);
    }
  
    @Get('/images')
    async getProductImages(
      @Query('productId') productId: string,
    ): Promise<ProductImageEntity[]> {
      return await this.productService.findAllByProductId(productId);
    }
  
    @Delete('/image')
    async deleteProductImage(
      @Query('imageId') imageId: string,
    ): Promise<void> {
      return await this.productService.deleteImage(imageId);
    }
  }
  