/* eslint-disable */
import { ArgsType, Field, InputType, OmitType, PartialType } from '@nestjs/graphql';
import { IsBoolean, IsString, Length } from 'class-validator';
import { Restaurant } from '../entities/restaurant.entity';
import { createRestaurantDto } from './createRestaurantDto';

@InputType()
export class updateRestaurantInputType extends PartialType(createRestaurantDto) {

}

@InputType()
export class UpdateRestaurantDto {
    @Field(type => Number)
    id: number;

    @Field(type => updateRestaurantInputType)
    data: updateRestaurantInputType;
}