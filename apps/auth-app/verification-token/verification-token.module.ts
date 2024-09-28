import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VerificationTokenController } from './verification-token.controller';
import { VerificationTokenService } from './verification-token.service';
import { VerificationTokenEntity } from '../../libs/entities/users/verification-token.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VerificationTokenEntity])],
  controllers: [VerificationTokenController],
  providers: [VerificationTokenService],
  exports: [VerificationTokenService],
})
export class VerificationTokenModule {}
