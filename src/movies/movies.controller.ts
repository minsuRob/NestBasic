import { Controller, Get, Param, Body, Patch, Post } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }
  @Get('/:id')
  getID(@Param('id') id: string): Movie {
    return this.moviesService.getOne(id);
  }

  @Patch()
  getPatch(@Body() movieData) {
    return {
      ...movieData,
      patchData: 'zz',
    };
  }

  @Post()
  create(@Body() movieData) {
    return this.moviesService.create(movieData);
  }
}
