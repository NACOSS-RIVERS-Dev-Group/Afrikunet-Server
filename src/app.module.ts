import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VouchersModule } from './vouchers/vouchers.module';
import { User } from './typeorm/entities/user';
import { UsersModule } from './users/users.module';
import { Address } from './typeorm/entities/address';
import { Geo } from './typeorm/entities/geo';
import { AuthModule } from './auth/auth.module';
import { MailModule } from './mail/mail.module';
import { MailService } from './mail/mail.service';
import { Otp } from './typeorm/entities/otp';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'sql11.freemysqlhosting.net',
      port: 3306,
      username: 'sql11680123',
      password: 'FapQLFQath',
      database: 'sql11680123',
      entities: [User, Address, Geo, Otp],
      synchronize: true,
    }),
    UsersModule,
    VouchersModule,
    AuthModule,
    MailModule,
  ],
  controllers: [],
  providers: [MailService],
})
export class AppModule {}
