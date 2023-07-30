/* eslint-disable */
import { Query, Resolver } from "@nestjs/graphql";
import { usersService } from "./users.service";
import { User } from "./entities/user.entity";

@Resolver(of => User)
export class UsersResolver {
    constructor(
      private readonly userService: usersService
    ) {}

    @Query(returns => Boolean)
    hi() {
        return true;
    }
}