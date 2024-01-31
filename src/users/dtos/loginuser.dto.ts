import { IsEmail, IsNotEmpty, IsStrongPassword } from 'class-validator';

export class LoginUserDTO {
  @IsEmail()
  @IsNotEmpty()
  email_address: string;

  @IsNotEmpty()
  @IsStrongPassword()
  password: string;
}
