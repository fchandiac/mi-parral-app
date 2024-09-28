import { NestFactory } from '@nestjs/core';
import { createServer, IncomingMessage, Server, ServerResponse } from 'http';
import { parse } from 'url';
import { join } from 'path';
import { Logger, ValidationPipe } from '@nestjs/common';
const next = require('next');

async function bootstrap() {
  const logger = new Logger('Next.js Server');

  // Configuración de Next.js
  const dev = process.env.NODE_ENV !== 'production';
  const nextApp = next({ dev, dir: './apps/mi-parral/next' });
  const handle = nextApp.getRequestHandler();

  await nextApp.prepare();

  // Configuración del servidor HTTP para Next.js
  const port = parseInt(process.env.PORT || '3000', 10);

  const server = createServer((req: IncomingMessage, res: ServerResponse) => {
    const parsedUrl = parse(req.url!, true);
    const { pathname } = parsedUrl;

    if (pathname === '/service-worker.js') {
      const filePath = join(__dirname, '.next', pathname);
      nextApp.serveStatic(req, res, filePath);
    } else {
      handle(req, res, parsedUrl);
    }
  });

  server.listen(port, () => {
    logger.log(
      `> Next.js server listening at http://localhost:${port} as ${dev ? 'development' : process.env.NODE_ENV}`,
    );
  });

  //const app = await NestFactory.create(AppModule);
  // Inicia el servidor NestJS
  //await app.listen(3001); // Cambia el puerto según sea necesario
}

bootstrap();
