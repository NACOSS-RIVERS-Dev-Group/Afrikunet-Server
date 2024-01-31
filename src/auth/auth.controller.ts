import {
  Body,
  Controller,
  Get,
  Inject,
  Post,
  Req,
  UsePipes,
  ValidationPipe,
  // UseGuards,
} from '@nestjs/common';
// import { LocalAuthGuard } from './guards/local_guard';
import { Request } from 'express';
import { AuthService } from './auth.service';
import { CreateUserDTO } from 'src/users/dtos/createuser.dto';
import { LoginUserDTO } from 'src/users/dtos/loginuser.dto';

@Controller('bkapi/auth')
export class AuthController {
  constructor(@Inject('AUTH_SERVICE') private authService: AuthService) {}

  @Post('login')
  @UsePipes(new ValidationPipe())
  async login(@Body() loginUserDto: LoginUserDTO) {
    // return req.user;
    return await this.authService.validateLogin(loginUserDto);
  }

  @Post('signup')
  @UsePipes(new ValidationPipe())
  async signUp(@Body() createUserDto: CreateUserDTO) {
    // return this.authService.
    console.log('REQUEST :::', createUserDto);
    // const { first_name, last_name, email_address, phone } = req.body;
    const result = await this.authService.validateCreateUser(createUserDto);
    return result;
  }

  @Post('resend-otp')
  async resendOtp(@Req() req: Request) {
    console.log('RESEND_OTP REQ :: ', req.body);
    const { email_address } = req.body;
    await this.authService.resendOtp(email_address);
  }

  @Post('verify')
  async verifyAccount(@Req() req: Request) {
    console.log('REQUEST USER ::: ', req.user);
    const { code, email_address } = req.body;
    const verifier = await this.authService.validateVerifyOtP({
      code: code,
      email_address: email_address,
    });

    return verifier;
  }

  @Get('status')
  async getAuthStatus(@Req() req: Request) {
    console.log('Inside AuthController status method');
    console.log(req.user);
    return req.user;
  }
}
