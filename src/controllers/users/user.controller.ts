import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserService} from '../../services/user.service'

@Controller('users')
export class UserController {
  constructor(private _userService: UserService ) {}

  @Get()
  getUserList():any {
      return this._userService.getUserList()
  }

  @Get(':id')
  getUserById(@Param("id") id: string):any {
      return this._userService.getUserById(id)
  }

  @Post()
  addUser(@Body('name') name: string, @Body("email") email: string) {
   this._userService.addUser(name, email)
   return {
     status: 200,
     message: "User Created Successfully!",
   }
  }
}