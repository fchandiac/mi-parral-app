import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommerceEntity } from 'apps/libs/entities/commerces/commerce.entity';
import { CommerceService } from './commerce.service';
import {CommerceController} from './commerce.controller';


@Module({
  imports: [
    TypeOrmModule.forFeature([CommerceEntity]),
  ],
  controllers: [CommerceController],
  providers: [CommerceService],
})
export class CommerceModule{}

