import { Controller, Get } from '@nestjs/common';

@Controller()
export class UserController {
  constructor() {}

  @Get()
  sayHello(): string {
    return "Hello";
  }
}