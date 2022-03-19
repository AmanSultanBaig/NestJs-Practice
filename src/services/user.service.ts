import { Injectable } from "@nestjs/common"
import { USER } from '../models/user.mode'

@Injectable()
export class UserService {
    users: USER[] = []

    getUserList() {
        return [...this.users]
    }

    getUserById(id) {
        const user = this.users.find(item => item.id === id);
        return {... user}
    }

    addUser(name: string, email: string) {
        const id = Math.random().toString()
        const newUser = new USER(id, name, email);
        this.users.push(newUser)
    }
}