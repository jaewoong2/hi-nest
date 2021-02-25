import { UpdateMovieDto } from './dto/update.movie.dto';
import { CreateMovieDTO } from './dto/create-movie.dto';
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

// movies 라우터, root/moives 의 주소값을 갖는다.
@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}
  // movieservice에 있는 메소드(?) 들을 사용 할 수 있게 설정함

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
  getOne(@Param('id') movieId: number): Movie {
    const movie = this.moviesService.getOne(movieId);
    return movie;
  }

  @Post()
  create(@Body() movieData: CreateMovieDTO) {
    return this.moviesService.create(movieData);
  }

  @Delete('/:id')
  remove(@Param('id') moiveId: number) {
    return this.moviesService.deleteOne(moiveId);
  }

  //   전체 리소스
  //   @Put()

  //   일부분
  @Patch(':id')
  path(@Param('id') moiveId: number, @Body() updateData: UpdateMovieDto) {
    return this.moviesService.update(moiveId, updateData);
  }
}
