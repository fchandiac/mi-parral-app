import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceImageEntity } from '../../libs/entities/images/service-image.entity';
import { CommerceImageEntity } from '../../libs/entities/images/commerce-image.entity';
import { ProductImageEntity } from 'apps/libs/entities/images/product-image.entity';
import { ServeStaticModule } from '@nestjs/serve-static'; // Import ServeStaticModule
import { join } from 'path';
import { ServiceController } from '../service/service.controller';
import { ServiceService } from '../service/service.service';
import { CommerceController } from '../commerce/commerce.controller';
import { CommerceService } from '../commerce/commerce.service';
import { envs } from 'apps/libs/config';
import { ProductController } from '../product/product.controller';
import { ProductService } from '../product/product.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: envs.database.host,
      port: envs.database.port,
      username: envs.database.user,
      password: envs.database.password,
      database: envs.database.imagesDatabaseName,
      entities: [ServiceImageEntity, CommerceImageEntity, ProductImageEntity],
      synchronize: true,
      logging: true,
      //dropSchema: true,
    }),
    TypeOrmModule.forFeature([ServiceImageEntity, CommerceImageEntity, ProductImageEntity]),  // Manejo de entidades
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'images'),
      serveRoot: '/images'  // Carpeta donde se guardan los archivos
    }),
  ],
  controllers: [ServiceController, CommerceController, ProductController],
  providers: [ServiceService, CommerceService, ProductService],
})
export class ImagesAppModule {}
