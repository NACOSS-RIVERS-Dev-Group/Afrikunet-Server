import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserService } from 'src/users/users.services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/user';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './utils/local_strategy';
import { Address } from 'src/typeorm/entities/address';
import { Geo } from 'src/typeorm/entities/geo';
import { JwtStrategy } from './utils/jwt_strategy';
import { JwtModule } from '@nestjs/jwt';
import { MailService } from 'src/mail/mail.service';
import { Otp } from 'src/typeorm/entities/otp';
import { OtpService } from 'src/otp/otp.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Address, Geo, Otp]),
    PassportModule,
    JwtModule.register({
      secret: 'abc123',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController],
  providers: [
    {
      provide: 'AUTH_SERVICE',
      useClass: AuthService,
    },
    {
      provide: 'USER_SERVICE',
      useClass: UserService,
    },
    {
      provide: 'MAIL_SERVICE',
      useClass: MailService,
    },
    {
      provide: 'OTP_SERVICE',
      useClass: OtpService,
    },
    LocalStrategy,
    JwtStrategy,
  ],
})
export class AuthModule {}
