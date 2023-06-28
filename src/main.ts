import { NestFactory } from '@nestjs/core';
import { AppModule } from './appModule';

async function nest() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
nest();

