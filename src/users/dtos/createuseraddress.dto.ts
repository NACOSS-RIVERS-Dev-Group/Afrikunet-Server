import { IsNotEmpty } from 'class-validator';

export class UserAddressDTO {
  @IsNotEmpty()
  country: string;

  @IsNotEmpty()
  street: string;

  @IsNotEmpty()
  state: string;

  @IsNotEmpty()
  city: string;
}
