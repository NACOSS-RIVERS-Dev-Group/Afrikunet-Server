import {
  IsAlpha,
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class CreateUserDTO {
  @IsNotEmpty()
  @IsString()
  @IsAlpha()
  first_name: string;

  @IsNotEmpty()
  @IsString()
  @IsAlpha()
  last_name: string;

  @IsEmail()
  @IsNotEmpty()
  email_address: string;

  @IsNotEmpty()
  @IsStrongPassword()
  password: string;

  @IsNotEmpty()
  @IsPhoneNumber()
  international_phone_format: string;

  user_id: string;
}
