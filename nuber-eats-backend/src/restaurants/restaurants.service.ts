/* eslint-disable */
import {Injectable} from '@nestjs/common';
import { Restaurant } from './entities/restaurant.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createRestaurantDto } from './dtos/createRestaurantDto';
import { UpdateRestaurantDto } from './dtos/update-Restaurant.dto';

@Injectable()
export class RestaurantService {
    constructor(@InjectRepository(Restaurant) 
    private readonly restaurant: Repository<Restaurant>) {}
    getAll(): Promise<Restaurant[]> {
        return this.restaurant.find();
    }

    createRestaurant(createRestaurantDto: createRestaurantDto): Promise<Restaurant> {
        const newRestaurant = this.restaurant.create(createRestaurantDto);
        return this.restaurant.save(newRestaurant);
    }

    updateRestaurant({id, data}:UpdateRestaurantDto){
        this.restaurant.update(id, {...data});
    }

} 