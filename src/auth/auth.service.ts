import { Inject, Injectable } from '@nestjs/common';
import { UserService } from 'src/users/users.services';
import { comparePasswords } from 'src/utils/bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UserService,
  ) {}

  async validateUser(username: string, password: string) {
    const userDB = await this.userService.findUserByUsername(username);

    if (userDB && userDB.password === password) {
      const matched = comparePasswords(password, userDB.password);
      if (matched) {
        console.log('USER DATA :: ', userDB);
        return userDB;
      } else {
        console.log('No matching password was found!!!');
        return null;
      }
    }
    return null;
  }

  async validateCreateUser(userData: any) {
    console.log('User Payload from Client :: ', userData);
    const userDB = await this.userService.findUserByUsername(
      userData?.email_address,
    );
    if (userDB) {
      console.log('Account Already Exists');
    }
  }
}
