import { Module } from '@nestjs/common';
import { ServiceController } from '../service/service.controller';
import { ServiceService } from '../service/service.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceEntity } from 'apps/libs/entities/services/service.entity';
import { CommerceEntity } from 'apps/libs/entities/commerces/commerce.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([ServiceEntity]),
  ],
  controllers: [ServiceController],
  providers: [ServiceService],
})
export class ServiceModule{}

