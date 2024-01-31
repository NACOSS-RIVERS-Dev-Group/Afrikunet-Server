/* eslint-disable @typescript-eslint/no-unused-vars */
import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { MailService } from 'src/mail/mail.service';
import { OTPPayloadDto } from 'src/otp/dto/otp.dto';
import { OtpService } from 'src/otp/otp.service';
import { User } from 'src/typeorm/entities/user';
import { CreateUserDTO } from 'src/users/dtos/createuser.dto';
import { LoginUserDTO } from 'src/users/dtos/loginuser.dto';
import { UserService } from 'src/users/users.services';
import { comparePasswords } from 'src/utils/bcrypt';
import { verificationEmailContent } from 'src/utils/email';
import { generateOTP } from 'src/utils/otp_generator';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UserService,
    @Inject('MAIL_SERVICE') private readonly mailService: MailService,
    @Inject('OTP_SERVICE') private readonly otpService: OtpService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string) {
    const userDB = await this.userService.findUserByUsername(username);

    if (userDB && userDB.password === password) {
      const matched = comparePasswords(password, userDB.password);
      if (matched) {
        console.log('USER DATA :: ', userDB);
        const { password, ...usr } = userDB;
        return this.jwtService.sign(usr);
      } else {
        console.log('No matching password was found!!!');
        return null;
      }
    }
    return null;
  }

  // async login(user: User): Promise<{ accessToken: string }> {
  //   const payload = { sub: user.id };
  //   return {
  //     accessToken: this.userService.,
  //   };
  // }

  async validateCreateUser(userData: CreateUserDTO) {
    console.log('User Payload from Client :: ', userData);
    if (!userData) {
      throw new HttpException('Payload not provided !!!', HttpStatus.FORBIDDEN);
    }
    const userDB = await this.userService.findUserByUsername(
      userData?.email_address,
    );
    console.log(userDB);

    if (userDB) {
      throw new HttpException('Account Already Exists', HttpStatus.BAD_REQUEST);
    }
    if (userDB?.international_phone_format) {
      throw new HttpException('Phone number is taken', HttpStatus.BAD_REQUEST);
    }
    const createdUsr = await this.userService.createUser(userData);
    console.log('CREATED USER ', createdUsr);

    // Send OTP Code here
    const otpCode = generateOTP();
    const emailSent = await this.mailService.sendVerificationMail(
      userData?.email_address,
      'New Account Creation',
      verificationEmailContent(otpCode, userData?.first_name),
    );

    // Save/Update OTP code for user here
    const currentUserOTP = await this.otpService.findOTPByUsername(
      createdUsr?.email_address,
    );
    console.log("CURRENT USER'S OTP ", currentUserOTP);

    if (currentUserOTP) {
      // OTP Already exists for this user so update it here
      await this.otpService.updateOtp(
        currentUserOTP?.email_address,
        parseInt(otpCode),
      );
    } else {
      // No OTP so add new
      await this.otpService.saveOtp({
        code: parseInt(otpCode),
        email_address: userData?.email_address,
      });
    }

    if (emailSent) {
      return {
        message: 'Email sent successfully',
      };
    } else {
      return {
        message: 'Failed to send OTP email',
      };
    }
  }

  async resendOtp(email_address: string) {
    console.log('User Payload from Client :: ', email_address);
    if (!email_address) {
      throw new HttpException('Payload not provided !!!', HttpStatus.FORBIDDEN);
    }
    const userData = await this.userService.findUserByUsername(email_address);
    // Send OTP Code here
    const otpCode = generateOTP();
    const emailSent = await this.mailService.sendVerificationMail(
      email_address,
      'New Account Creation OTP Resend',
      verificationEmailContent(otpCode, userData?.first_name),
    );

    // Save/Update OTP code for user here
    const currentUserOTP = await this.otpService.findOTPByUsername(
      userData?.email_address,
    );
    console.log("CURRENT USER'S OTP ", currentUserOTP);

    if (currentUserOTP) {
      // OTP Already exists for this user so update it here
      await this.otpService.updateOtp(
        currentUserOTP?.email_address,
        parseInt(otpCode),
      );
    }

    if (emailSent) {
      return {
        message: 'OTP email sent successfully',
      };
    } else {
      return {
        message: 'Failed to send OTP email',
      };
    }
  }

  async validateVerifyOtP(otpPayload: OTPPayloadDto) {
    console.log('User Payload from Client :: ', otpPayload);
    if (!otpPayload) {
      throw new HttpException('Payload not provided !!!', HttpStatus.FORBIDDEN);
    }

    const userDb = await this.userService.findUserByUsername(
      otpPayload?.email_address,
    );
    if (!userDb) {
      throw new HttpException('User record not found', HttpStatus.NOT_FOUND);
    }

    const otpDb = await this.otpService.findOTPByUsername(
      otpPayload?.email_address,
    );
    if (!otpDb) {
      throw new HttpException('OTP data not found', HttpStatus.NOT_FOUND);
    }

    // Now compare this otp code and the one saved to the database
    if (otpDb?.code !== otpPayload.code) {
      throw new HttpException('OTP code not valid', HttpStatus.FORBIDDEN);
    }

    await this.otpService.removeOtp(otpDb?.id);
    // Now set user's email_verified to true
    await this.userService.updateUser(userDb?.id, {
      is_email_verified: true,
    });

    const usere = await this.userService.findUserByUsername(
      otpPayload?.email_address,
    );

    const { password, ...usr } = usere;
    return {
      token: this.jwtService.sign(usr),
      message: 'Account verified successfully',
      user: usr,
    };
  }

  async validateLogin(loginUserDto: LoginUserDTO) {
    console.log('User Payload from Client :: ', loginUserDto);
    if (!loginUserDto) {
      throw new HttpException('Payload not provided !!!', HttpStatus.FORBIDDEN);
    }
    const userDB = await this.userService.findUserByUsername(
      loginUserDto?.email_address,
    );
    console.log(userDB);

    if (!userDB) {
      throw new HttpException(
        'Account does not exist on our platform!',
        HttpStatus.NOT_FOUND,
      );
    }

    // Now compare passwords before login
    if (
      userDB &&
      (await bcrypt.compareSync(loginUserDto.password, userDB?.password))
    ) {
      // update last_login here
      await this.userService.updateUser(userDB?.id, {
        last_login: new Date(),
      });

      const usere = await this.userService.findUserById(userDB?.id);

      const { password, ...result } = usere;

      // Sign JWT token here
      return {
        token: this.jwtService.sign(result),
        message: 'Logged in successfully',
        user: result,
      };
    } else {
      throw new HttpException(
        'Credentials do not match',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
