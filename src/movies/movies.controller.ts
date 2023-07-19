import { Controller, Get, Param } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    @Get()
    getAll() {
        return "this get all"
    }
    @Get("/:id")
    getID(@Param("id") id:string) {
        return `id : ${id}`
    }
}
