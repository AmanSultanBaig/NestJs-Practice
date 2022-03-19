import { Injectable } from "@nestjs/common"
import { USER } from '../models/user.mode'

@Injectable()
export class UserService {
    users: USER[] = []

    getUserList() {
        return this.users
    }

    addUser(name: string, email: string) {
        const id = Math.random()
        const newUser = new USER(id, name, email);
        this.users.push(newUser)
    }
}