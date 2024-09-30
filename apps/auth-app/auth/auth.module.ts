import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../../libs/entities/users/user.entity';
import { AccountEntity } from '../../libs/entities/users/account.entity';
import { SessionEntity } from '../../libs/entities/users/session.entity';
import { VerificationTokenEntity } from '../../libs/entities/users/verification-token.entity';
import { VerificationTokenService } from '../verification-token/verification-token.service';
import { SessionService } from '../session/session.service';
import { AccountService } from '../account/account.service';
import { UserService } from '../user/user.service';
import { ProfileEntity } from 'apps/libs/entities/profiles/profile.entity';
import { ProfileService } from '../profile/profile.service';



@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, AccountEntity, SessionEntity, VerificationTokenEntity, ProfileEntity ]),
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService, AccountService, SessionService, VerificationTokenService, ProfileService],
})

export class AuthModule {}