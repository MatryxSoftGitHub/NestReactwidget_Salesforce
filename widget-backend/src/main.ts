import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Serve React static files from widget-backend/public
  app.use(express.static(join(__dirname, '..', 'public')));

  // Fallback: send index.html for any unknown path (SPA support)
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '..', 'public', 'index.html'));
  });

  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`App listening on port ${port}`);
}
bootstrap();
