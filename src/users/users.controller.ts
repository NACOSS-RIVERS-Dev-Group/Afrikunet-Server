import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDTO } from './dtos/createuser.dto';
import { UserService } from './users.services';
import { UserAddressDTO } from './dtos/createuseraddress.dto';
import { UserGeoDTO } from './dtos/createusergeo.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UserService) {}

  @Get()
  getUsers() {}

  @Post('create')
  @UsePipes(new ValidationPipe())
  createUser(@Body() createUserDto: CreateUserDTO) {
    this.userService.createUser(createUserDto);
  }

  @Post(':id/address')
  createUserAddress(
    @Param('id', ParseIntPipe) id: number,
    @Body() createUserAddress: UserAddressDTO,
  ) {
    return this.createUserAddress(id, createUserAddress);
  }

  @Post(':id/geo')
  createUserGeo(
    @Param('id', ParseIntPipe) id: number,
    @Body() createUserGeo: UserGeoDTO,
  ) {
    return this.createUserGeo(id, createUserGeo);
  }
}
