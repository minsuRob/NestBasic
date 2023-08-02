/* eslint-disable */
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";
import { Injectable } from '@nestjs/common';
import { CreateAccountInput } from "./dtos/create-account-dto";

@Injectable()
export class usersService {
    constructor(
        @InjectRepository(User) private readonly users: Repository<User>
    ) {}

    async createAccount({ email, password, role } : CreateAccountInput) {
        try {
            const exists = await this.users.findOneBy({ email });
            if (exists) {
                return;
            }
            await this.users.save(this.users.create({email, password, role}));
            return true;
        } catch (error) {
            return;
        }
    }
}