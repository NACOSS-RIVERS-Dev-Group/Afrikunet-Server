import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserService } from './users.services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/user';
import { Address } from 'src/typeorm/entities/address';
import { Geo } from 'src/typeorm/entities/geo';
import { UsersMiddleware } from './users.middleware';

@Module({
  imports: [TypeOrmModule.forFeature([User, Address, Geo])],
  controllers: [UsersController],
  providers: [UserService],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UsersMiddleware).forRoutes('users');
  }
}
