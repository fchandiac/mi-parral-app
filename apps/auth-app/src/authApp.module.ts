import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../../libs/entities/users/user.entity';
import { AccountEntity } from 'apps/libs/entities/users/account.entity';
import { SessionEntity } from 'apps/libs/entities/users/session.entity';
import { VerificationTokenEntity } from 'apps/libs/entities/users/verification-token.entity';


import { AuthModule } from '../auth/auth.module';
import { ProfileEntity } from 'apps/libs/entities/users/profile.entity';
import { envs } from 'apps/libs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';




@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: envs.database.host,
      port: envs.database.port,
      username: envs.database.user,
      password: envs.database.password,
      database: envs.database.authDatabaseName,
      entities: [UserEntity, AccountEntity, SessionEntity, VerificationTokenEntity, ProfileEntity],
      synchronize: true,
      logging: true,
      //dropSchema: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../','auth'),
      serveRoot: '/'  // Carpeta donde se guardan los archivos
    }),

  ],
  controllers: [],
  providers: [],
})
export class AuthAppModule {}
