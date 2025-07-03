import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as express from 'express';
import { join } from 'path';

async function bootstrap() {
  // Use NestExpress so .use() and static middleware work nicely
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // (Optional) still fine to serve static files directly—redundant but harmless
  app.use(express.static(join(__dirname, '..', 'public')));

  // Pick up Render’s dynamic PORT or default to 3000 locally
  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`Nest app listening on port ${port}`);
}

bootstrap();
