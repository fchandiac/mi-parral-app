import { NestFactory } from '@nestjs/core';
import { ApiModule } from './api.module';
import * as cors from 'cors';
import { Logger, ValidationPipe } from '@nestjs/common';
import { envs } from 'apps/libs/config';

async function bootstrap() {
  const logger = new Logger('Api');
  const port = envs.api.port;

  const app = await NestFactory.create(ApiModule);

  app.enableCors({
    origin: [
      'http://localhost:9000', // Permite solicitudes desde tu frontend local
      'https://miparral.app',   // Permite solicitudes desde tu dominio en producción
      '*',
  ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos HTTP permitidos
    allowedHeaders: 'Content-Type, Authorization', // Cabeceras permitidas
    credentials: true, // Permite el envío de cookies con solicitudes
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  
  await app.listen(port);
  logger.log(`Server started at http://localhost:${port}`);
}
bootstrap();
