import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app/app.controller';

// 데코레이터
@Module({
  imports: [MoviesModule],
  // url 을 가져오고 함수를 실행한다.
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
