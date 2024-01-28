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

@Module({
  imports: [TypeOrmModule.forFeature([User, Address, Geo]), PassportModule],
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
    LocalStrategy,
  ],
})
export class AuthModule {}
