import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VouchersModule } from './vouchers/vouchers.module';
import { User } from './typeorm/entities/user';
import { UsersModule } from './users/users.module';
import { Address } from './typeorm/entities/address';
import { Geo } from './typeorm/entities/geo';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'sql11.freemysqlhosting.net',
      port: 3306,
      username: 'sql11680123',
      password: 'FapQLFQath',
      database: 'sql11680123',
      entities: [User, Address, Geo],
      synchronize: true,
    }),
    UsersModule,
    VouchersModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
