import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMovieDTO {
  @IsString()
  readonly year: number;

  @IsNumber()
  readonly title: string;

  @IsString({ each: true })
  @IsOptional()
  readonly genres: string[];
}
