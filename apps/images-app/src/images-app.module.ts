import { Module } from '@nestjs/common';
import { ImagesAppController } from './images-app.controller';
import { ImagesAppService } from './images-app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceImageEntity } from '../../libs/entities/images/service-image.entity';
import { CommerceImageEntity } from '../../libs/entities/images/commerce-image.entity';
import { ServeStaticModule } from '@nestjs/serve-static'; // Import ServeStaticModule
import { join } from 'path';

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
    }),
    TypeOrmModule.forFeature([ServiceImageEntity, CommerceImageEntity]),  // Manejo de entidades
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'images'),
      serveRoot: '/images'  // Carpeta donde se guardan los archivos
    }),
  ],
  controllers: [ImagesAppController],
  providers: [ImagesAppService],
})
export class ImagesAppModule {}
