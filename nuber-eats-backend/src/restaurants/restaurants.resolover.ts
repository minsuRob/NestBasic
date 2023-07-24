import { Args, Query, Resolver } from "@nestjs/graphql";
import { Restaurant } from "./entities/restaurant.entity";

@Resolver(of => Restaurant)
export class RestaurantsResolover {
    @Query(returns => [Restaurant])
    restaurants(@Args('veganonly') veganOnly: boolean): Restaurant[]{
        return [];
    }
}

