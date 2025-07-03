import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors({ origin: true }); // allow any origin while learning

  app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          frameAncestors: ["'self'", '*.lightning.force.com'],
        },
      },
    }),
  );

  // Serve React build we’ll copy in step ⑤
  app.useStaticAssets(join(__dirname, '..', 'public'));

  await app.listen(3000);
  console.log('🚀  Nest ready at http://localhost:3000');
}
bootstrap();
