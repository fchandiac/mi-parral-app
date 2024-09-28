import { NestFactory } from '@nestjs/core';
import { ApiModule } from './api.module';
import * as cors from 'cors';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('Api');
  const port = 3003;

  const app = await NestFactory.create(ApiModule);

  app.enableCors({
    origin: 'http://localhost:3000', // Permite solicitudes desde tu frontend
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
