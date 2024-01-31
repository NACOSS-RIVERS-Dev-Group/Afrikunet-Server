import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Otp } from 'src/typeorm/entities/otp';
import { Repository } from 'typeorm';
import { OTPPayloadDto } from './dto/otp.dto';

@Injectable()
export class OtpService {
  constructor(
    @InjectRepository(Otp) private readonly otpRepository: Repository<Otp>,
  ) {}

  async saveOtp(otpPayload: OTPPayloadDto) {
    const newOtp = this.otpRepository.create({
      ...otpPayload,
      created_at: new Date(),
      updated_at: new Date(),
    });

    this.otpRepository.save(newOtp);
    return newOtp;
  }

  // async findOTPByUser(id: string) {
  //   return this.otpRepository.findOneBy({ userId: id });
  // }

  async findOTPByUsername(email_address: string): Promise<Otp> {
    const foundUser = await this.otpRepository.findOne({
      where: {
        email_address: email_address,
      },
    });

    console.log('FOUND USER :: ', foundUser);

    return foundUser;
  }

  async updateOtp(id: string, code: number) {
    return this.otpRepository.update({ email_address: id }, { code: code });
  }

  async removeOtp(id: number) {
    return this.otpRepository.delete({ id });
  }

  async verifyOtp(userId: string, code: number) {
    const dbOtp = await this.findOTPByUsername(userId);
    // Now compare this otp code and the one saved to the database
    if (dbOtp.code === code) {
      return true;
    }
    return false;
  }
}
