import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  // get의 url 파라미터와 @Param 의 파라미터
  // 모두 같은 값으로 되어있어야 한다.

  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `Wer are Searching for a moive after made year=${searchingYear}`;
  }

  // Params를 쓰는 게 있으면 맨 밑으로 가야한다.
  //  그래야 다른 / 주소 값을 사용할 수 있음
  @Get('/:id')
  getOne(@Param('id') movieId: string): Movie {
    const movie = this.moviesService.getOne(movieId);
    return movie;
  }

  @Post()
  create(@Body() movieData) {
    return this.moviesService.create(movieData);
  }

  @Delete('/:id')
  remove(@Param('id') moiveId: string) {
    return this.moviesService.deleteOne(moiveId);
  }

  //   전체 리소스
  //   @Put()

  //   일부분
  @Patch(':id')
  path(@Param('id') moiveId: string, @Body() updateData) {
    return this.moviesService.update(moiveId, updateData);
  }
}
