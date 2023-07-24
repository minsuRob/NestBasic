import { Query, Resolver } from "@nestjs/graphql";

@Resolver()
export class RestaurantsResolover {
    @Query(returns => Boolean)
    isPizzaGood(): Boolean {
        return true;
    }
}