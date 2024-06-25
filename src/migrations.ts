import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NameCreateService } from './name/name-create.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  await app.init();

  const nameService = app.get(NameCreateService);

  await nameService.createDocumentsWithIndex(1_000_000);
  await nameService.createDocumentsWithoutIndex(1_000_000);

  await app.close();
}

bootstrap();
