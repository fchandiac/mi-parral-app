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
import { DiscountModule } from '../discount/discount.module';
import { DiscountEntity } from 'apps/libs/entities/discounts/discount.entity';
import { SeederModule }  from '../sedeer/seeder.module';
import { CategorySeederService } from '../category/category-seeder.service';
import { CategoryEntity } from 'apps/libs/entities/categories/category.entity';

@Module({
  imports: [
    ServiceModule,
    CommerceModule,
    ProductModule,
    ProfileModule,
    DiscountModule,
    SeederModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'fenasantma',
      database: 'app-miparral',
      entities: [CategoryEntity],
      //entities: [ServiceEntity, CommerceEntity, ProductEntity, ProfileEntity, DiscountEntity, CategoryEntity],
      synchronize: true,
      logging: true,
      //dropSchema: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class ApiModule {
  constructor(private readonly categorySeederService: CategorySeederService) {}

  async onModuleInit() {
    await this.categorySeederService.seed();
  }
}


