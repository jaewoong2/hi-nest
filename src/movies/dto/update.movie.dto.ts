import { CreateMovieDTO } from './create-movie.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateMovieDto extends PartialType(CreateMovieDTO) {}
