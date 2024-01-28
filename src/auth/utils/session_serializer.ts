import { Inject } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { User } from 'src/typeorm/entities/user';
import { UserService } from 'src/users/users.services';

export class SessionSerializer extends PassportSerializer {
  constructor(
    @Inject('AUTH_SERVICE') private readonly userService: UserService,
  ) {
    super();
  }

  serializeUser(user: User, done: (err: any, user: User) => void) {
    done(null, user);
  }

  async deserializeUser(user: User, done: (err: any, user: User) => void) {
    const userDB = await this.userService.findUserById(user.id);
    return userDB ? done(null, userDB) : done(null, null);
  }
}
