import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Address } from 'src/typeorm/entities/address';
import { Geo } from 'src/typeorm/entities/geo';
import { User } from 'src/typeorm/entities/user';
import { encodePassword } from 'src/utils/bcrypt';
import { CreateUserAddressParams, CreateUserGeoParams } from 'src/utils/types';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './dtos/createuser.dto';
import { LoginUserDTO } from './dtos/loginuser.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Address) private addressRepository: Repository<Address>,
    @InjectRepository(Geo) private geoRepository: Repository<Geo>,
  ) {}

  findUsers() {
    return this.userRepository.find();
  }

  async createUser(createUserDto: CreateUserDTO) {
    const encodedPassword = await encodePassword(createUserDto.password);
    const newUser = this.userRepository.create({
      ...createUserDto,
      password: encodedPassword,
      created_at: new Date(),
      updated_at: new Date(),
    });

    this.userRepository.save(newUser);
    return newUser;
  }

  async loginUser(loginUserDto: LoginUserDTO) {
    const encodedPassword = await encodePassword(loginUserDto.password);
    const newUser = this.userRepository.create({
      ...loginUserDto,
      password: encodedPassword,
      created_at: new Date(),
      updated_at: new Date(),
    });

    this.userRepository.save(newUser);
    return newUser;
  }

  async createUserAddress(
    id: number,
    createUserAddressDetails: CreateUserAddressParams,
  ) {
    const user = await this.userRepository.findOneBy({ id });
    if (!user)
      throw new HttpException(
        'No user found. Cannot add address!',
        HttpStatus.BAD_REQUEST,
      );

    const newAddress = this.addressRepository.create(createUserAddressDetails);
    const savedAddress = await this.addressRepository.save(newAddress);
    user.address = savedAddress;
    return this.addressRepository.save(user);
  }

  async createUserGeo(id: number, createUserGeoDetails: CreateUserGeoParams) {
    const user = await this.userRepository.findOneBy({ id });
    if (!user)
      throw new HttpException(
        'No user found. Cannot add geo!',
        HttpStatus.BAD_REQUEST,
      );

    const newGeo = this.geoRepository.create(createUserGeoDetails);
    const savedGeo = await this.addressRepository.save(newGeo);
    user.geo = savedGeo;
    return this.geoRepository.save(user);
  }

  async findUserByUsername(email_address: string): Promise<User> {
    const foundUser = await this.userRepository.findOne({
      where: {
        email_address: email_address,
      },
    });

    console.log('FOUND USER :: ', foundUser);

    return foundUser;
  }

  findUserById(id: number) {
    return this.userRepository.findOneBy({ id: id });
  }

  updateUser(id: number, payload: any) {
    return this.userRepository.update({ id }, { ...payload });
  }
}
