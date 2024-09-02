import { Inject, Injectable } from '@nestjs/common';
import { UserService } from './user/user.service';

@Injectable()
export class AppService {
  @Inject(UserService)
  private userService: UserService;

  // @SetMetadata('aaa', 'admin')
  // @UseGuards(AaaGuard)

  getHello(): string {
    // debugger;
    // const allUsers = this.userService.findAll();
    // console.log('allUsers', allUsers);
    return 'Hello World!';
  }
}
