import { Controller, Get, Param, Body, Patch } from '@nestjs/common';

@Controller('movies')
export class MoviesController {

    @Get()
    getAll(@Body() movieData) {
        return movieData;
    }
    @Get("/:id")
    getID(@Param("id") id:string) {
        return `id : ${id}` 
    }

    @Patch()
    getPatch(@Body() movieData) {
        return {
            ...movieData,
            "patchData" : "zz"
        } 
    }

}
