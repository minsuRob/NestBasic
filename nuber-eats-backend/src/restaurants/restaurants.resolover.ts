/* eslint-disable */
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Restaurant } from "./entities/restaurant.entity";
import { RestaurantService } from "src/restaurants/restaurants.service";
import { createRestaurantDto } from "./dtos/createRestaurantDto";
import { UpdateRestaurantDto } from "./dtos/update-Restaurant.dto";

@Resolver(of => Restaurant)
export class RestaurantsResolover {
    constructor(private readonly restaurantService: RestaurantService) {}

    @Query(returns => [Restaurant])
    restaurants(): Promise<Restaurant[]>{
        return this.restaurantService.getAll();
    }

    @Mutation(returns => Boolean)
    async createRestaurant(
        @Args('input') createRestaurantDto: createRestaurantDto,
    ): Promise<boolean> {
        try {
            await this.restaurantService.createRestaurant(createRestaurantDto);
            return true;
        } catch (e) {
            console.log(e);
            return false;
        }
    }

    @Mutation(returns => Boolean)
    async updateRestaurant(
        @Args('input') updateRestaurantDto: UpdateRestaurantDto
    ): Promise<boolean> {
        try {
            await this.restaurantService.updateRestaurant(updateRestaurantDto);
            return true;
        } catch (error) {
            console.log(error)
            return false;
        }
        return true;
    }
}

