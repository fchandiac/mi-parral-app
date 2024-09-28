import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceEntity } from 'apps/libs/entities/services/service.entity';
import { CommerceEntity } from 'apps/libs/entities/commerces/commerce.entity';
import { ServiceModule } from '../service/service.module';
import { CommerceModule } from '../commerce/commerce.module';
import { ProductModule } from '../product/product.module';
import { ProductEntity } from 'apps/libs/entities/products/product.entity';
import { ProfileEntity } from 'apps/libs/entities/profiles/profile.entity';
import { ProfileModule } from '../profile/profile.module';

@Module({
  imports: [
    ServiceModule,
    CommerceModule,
    ProductModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'fenasantma',
      database: 'app-miparral',
      entities: [ServiceEntity, CommerceEntity, ProductEntity],
      synchronize: true,
      logging: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class ApiModule {}
