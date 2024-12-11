import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // CORS 허용
  await app.listen(process.env.PORT ?? 3000);
  console.log('Application is running on http://localhost:3000');
}
bootstrap();