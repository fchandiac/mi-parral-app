import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module'
import { AccountModule } from '../account/account.module';
import { VerificationTokenModule } from '../verification-token/verification-token.module';
import { SessionModule } from '../session/session.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../../libs/entities/users/user.entity';
import { AccountEntity } from 'apps/libs/entities/users/account.entity';
import { SessionEntity } from 'apps/libs/entities/users/session.entity';
import { VerificationTokenEntity } from 'apps/libs/entities/users/verification-token.entity';

import { AuthService } from '../auth/auth.service';
import { AuthController } from '../auth/auth.controller';
import { AuthModule } from '../auth/auth.module';



@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'fenasantma',
      database: 'users-miparral',
      entities: [UserEntity, AccountEntity, SessionEntity, VerificationTokenEntity],
      synchronize: true,
      logging: true,
    }),

  ],
  controllers: [],
  providers: [],
})
export class AuthAppModule {}
