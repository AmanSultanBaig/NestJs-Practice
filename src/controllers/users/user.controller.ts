import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService} from '../../services/user.service'


@Controller('users')
export class UserController {
  constructor(private _userService: UserService ) {}

  @Get()
  getUserList():any {
      return this._userService.getUserList()
  }

  @Post()
  addUser(@Body('name') name: string, @Body("email") email: string) {
    return this._userService.addUser(name, email)
  }
}