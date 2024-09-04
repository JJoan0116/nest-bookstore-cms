import { Controller, Get, Query } from '@nestjs/common';
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
