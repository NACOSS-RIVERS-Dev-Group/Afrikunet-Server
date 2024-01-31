import {
  Body,
  Controller,
  Delete,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { OtpService } from './otp.service';
import { OTPPayloadDto } from './dto/otp.dto';

@Controller('otp')
export class OtpController {
  constructor(private otpService: OtpService) {}

  @Post('create')
  @UsePipes(new ValidationPipe())
  createOTP(@Body() otpDto: OTPPayloadDto) {
    this.otpService.saveOtp(otpDto);
  }

  // @Put(':id')
  // async updateOTP(@Param('id') id: number, @Body() code: number) {
  //   return this.otpService.updateOtp(id, code);
  // }

  // @Post('verifyOtp')
  // async verifyOtp(@Req() req: Request ) {
  //   let { code, userId} = req.body;

  // }

  @Delete(':id')
  async deleteOTP(@Param('id') id: number) {
    return this.otpService.removeOtp(id);
  }
}
