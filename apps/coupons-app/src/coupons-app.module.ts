import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { envs } from 'apps/libs/config';
import { CampaignEntity } from '../../libs/entities/campaigns/campaign.entity';
import { CouponEntity } from '../../libs/entities/coupons/coupon.entity'; // Importa la entidad de cupones
import { CampaignController } from '../campaign/campaign.controller';
import { CampaignService } from '../campaign/campaign.service';
import { CouponController } from '../coupon/coupon.controller';
import { CouponService } from '../coupon/coupon.service';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: envs.database.host,
      port: envs.database.port,
      username: envs.database.user,
      password: envs.database.password,
      database: envs.database.couponsDatabaseName,
      entities: [CampaignEntity, CouponEntity], // Agrega ambas entidades: Campaign y Coupon
      synchronize: true,
      //logging: true,
      //dropSchema: true, // Si no quieres borrar el esquema, comenta o elimina esta línea
    }),
    TypeOrmModule.forFeature([CampaignEntity, CouponEntity]), // Agrega ambas entidades: Campaign y Coupon
    


  ],
  controllers: [CampaignController, CouponController], // Agrega el controlador de cupones
  providers: [CampaignService, CouponService], // Agrega el servicio de cupones
})
export class CouponsAppModule {}
