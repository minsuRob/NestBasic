/* eslint-disable */
import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsBoolean, IsString, Length, IsOptional } from 'class-validator';

@InputType({isAbstract:true})
@ObjectType()
@Entity()
export class Restaurant {
    @PrimaryGeneratedColumn()
    @Field(type => Number)
    id: number

    @Field(type => String)
    @Column()
    @IsString()
    @Length(5)
    name: string;
    
    @Field(type => Boolean, {nullable:true})
    @Column({default:true})
    @IsOptional()
    @IsBoolean()
    isVegan?: boolean;
    
    @Field(type => String)
    @Column()
    address: string;
    
    @Field(type => String)
    @Column()
    ownersName: string;
    
    @Field(type => String)
    @Column()
    categoryName: string;
    
    
}