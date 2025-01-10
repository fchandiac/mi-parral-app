
import { ImagesAppModule } from './images-app.module';
import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import * as cors from 'cors';
import { envs } from 'apps/libs/config';

async function bootstrap() {
  const logger = new Logger('ImagesApp');
  const port = envs.images.port;

  const app = await NestFactory.create(ImagesAppModule);

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

  app.useGlobalPipes(new ValidationPipe(
    {
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }
  ));
  await app.listen(port);
  logger.log(`Server started at http://localhost:${port}`);
}
bootstrap();

