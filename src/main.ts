import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // pipe - middlewarae
  app.useGlobalPipes(
    new ValidationPipe({
      // 데코레이터 된 class의 타입만 받을 수 있음
      whitelist: true,
      // request를 막기
      forbidNonWhitelisted: true,

      // 요청 주고 받는 타입을 원하는 타입으로 바꿔줌
      transform: true,
    }),
  );

  await app.listen(3000);
}
bootstrap();
