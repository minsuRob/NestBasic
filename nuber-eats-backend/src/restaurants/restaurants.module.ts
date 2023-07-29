/* eslint-disable */
import { Module } from '@nestjs/common';
import { RestaurantsResolover } from './restaurants.resolover';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurant } from './entities/restaurant.entity';
import { RestaurantService } from 'src/restaurants/restaurants.service';

@Module({
    imports: [TypeOrmModule.forFeature([Restaurant])],
    providers: [RestaurantsResolover, RestaurantService],
})
export class RestaurantsModule {}
