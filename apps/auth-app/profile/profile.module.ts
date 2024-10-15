import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileEntity } from '../../libs/entities/users/profile.entity';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { UserEntity } from 'apps/libs/entities/users/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProfileEntity])],
  controllers: [ProfileController],
  providers: [ProfileService],
  exports: [ProfileService],
})
export class ProfileModule {}
