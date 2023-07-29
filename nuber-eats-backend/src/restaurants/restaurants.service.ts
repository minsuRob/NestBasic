/* eslint-disable */
import {Injectable} from '@nestjs/common';
import { Restaurant } from './entities/restaurant.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createRestaurantDto } from './dtos/createRestaurantDto';

@Injectable()
export class RestaurantService {
    constructor(@InjectRepository(Restaurant) 
    private readonly restaurant: Repository<Restaurant>) {}
    getAll(): Promise<Restaurant[]> {
        return this.restaurant.find();
    }

    createRestaurant(createRestaurantDto: createRestaurantDto): Promise<Restaurant> {
        const newRestaurant = this.restaurant.create();
        return this.restaurant.save(newRestaurant);
    }

} 