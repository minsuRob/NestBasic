/* eslint-disable */
import { Args, Query, Resolver } from "@nestjs/graphql";
import { Restaurant } from "./entities/restaurant.entity";
import { RestaurantService } from "src/restaurants/restaurants.service";

@Resolver(of => Restaurant)
export class RestaurantsResolover {
    constructor(private readonly restaurantService: RestaurantService) {}

    @Query(returns => [Restaurant])
    restaurants(): Promise<Restaurant[]>{
        return this.restaurantService.getAll();
    }

    
}

