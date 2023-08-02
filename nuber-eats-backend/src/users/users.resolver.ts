/* eslint-disable */
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { usersService } from "./users.service";
import { User } from "./entities/user.entity";
import { CreateAccountInput, CreateAccountOutput } from "./dtos/create-account-dto";

@Resolver(of => User)
export class UsersResolver {
    constructor(
      private readonly userService: usersService
    ) {}

    @Query(returns => Boolean)
    hi() {
        return true;
    }

    @Mutation(returns => CreateAccountOutput)
    createAccount(@Args('input') createAccountInput:CreateAccountInput) {}
}