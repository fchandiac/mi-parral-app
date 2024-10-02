import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceEntity } from 'apps/libs/entities/services/service.entity';
import { CommerceEntity } from 'apps/libs/entities/commerces/commerce.entity';
import { ServiceModule } from '../service/service.module';
import { CommerceModule } from '../commerce/commerce.module';
import { ProductModule } from '../product/product.module';
import { ProductEntity } from 'apps/libs/entities/products/product.entity';
import { DiscountModule } from '../discount/discount.module';
import { DiscountEntity } from 'apps/libs/entities/discounts/discount.entity';
import { SeederModule }  from '../sedeer/seeder.module';
import { CategorySeederService } from '../category/category-seeder.service';
import { CategoryModule } from '../category/category.module';
import { CategoryEntity } from 'apps/libs/entities/categories/category.entity';
import { envs } from 'apps/libs/config';

@Module({
  imports: [
    ServiceModule,
    CommerceModule,
    ProductModule,
    DiscountModule,
    CategoryModule,
    SeederModule,

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: envs.database.host,
      port: envs.database.port,
      username: envs.database.user,
      password: envs.database.password,
      database: envs.database.apiDatabaseName,
      entities: [ServiceEntity, CommerceEntity, ProductEntity, DiscountEntity, CategoryEntity],
      synchronize: true,
      logging: true,
      //dropSchema: true,
    }),
  ],
  controllers: [],
  providers: [],
})

export class ApiModule {}



// export class ApiModule {
//   constructor(private readonly categorySeederService: CategorySeederService) {}

//   async onModuleInit() {
//     await this.categorySeederService.seed();
//   }
// }


