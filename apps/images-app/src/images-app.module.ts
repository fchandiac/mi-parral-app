import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceImageEntity } from '../../libs/entities/images/service-image.entity';
import { CommerceImageEntity } from '../../libs/entities/images/commerce-image.entity';
import { ServeStaticModule } from '@nestjs/serve-static'; // Import ServeStaticModule
import { join } from 'path';
import { ServiceController } from '../service/service.controller';
import { ServiceService } from '../service/service.service';
import { CommerceController } from '../commerce/commerce.controller';
import { CommerceService } from '../commerce/commerce.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'fenasantma',
      database: 'images-miparral',
      entities: [ServiceImageEntity, CommerceImageEntity],
      synchronize: true,
      logging: true,
      //dropSchema: true,
    }),
    TypeOrmModule.forFeature([ServiceImageEntity, CommerceImageEntity]),  // Manejo de entidades
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'images'),
      serveRoot: '/images'  // Carpeta donde se guardan los archivos
    }),
  ],
  controllers: [ServiceController, CommerceController],
  providers: [ServiceService, CommerceService],
})
export class ImagesAppModule {}
