import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

// 데코레이터
@Module({
  imports: [],
  // url 을 가져오고 함수를 실행한다.
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class AppModule {}
