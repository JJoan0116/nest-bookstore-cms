import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Injectable,
  ParseIntPipe,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user/user.service';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Injectable(AppService)
  // private readonly appService: AppService;

  // @Injectable(UserService)
  // private readonly userService: UserService;

  @Get()
  getHello(
    @Query('aa')
    aa: string,
  ): string {
    console.log('11111', aa);
    return this.appService.getHello();
  }
}
