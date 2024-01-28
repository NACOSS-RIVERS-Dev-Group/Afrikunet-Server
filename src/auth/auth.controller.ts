import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './utils/local_guard';
import { Request } from 'express';
// import { AuthService } from './auth.service';
import { AuthPayloadDto } from './dtos/auth.dto';

@Controller('auth')
export class AuthController {
  //   constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() authPayload: AuthPayloadDto) {
    // return req.user;
    // return this.authService.validateUser(
    //   authPayload.username,
    //   authPayload.password,
    // );
  }

  @Post('signup')
  async signUp(@Body() req: Request) {
    // return this.authService.
    console.log(req.body());
  }

  @Get('status')
  async getAuthStatus(@Req() req: Request) {
    return req.user;
  }
}
