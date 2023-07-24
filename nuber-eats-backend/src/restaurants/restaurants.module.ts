import { Module } from '@nestjs/common';
import { RestaurantsResolover } from './restaurants.resolover';

@Module({
    providers: [RestaurantsResolover],
})
export class RestaurantsModule {}
