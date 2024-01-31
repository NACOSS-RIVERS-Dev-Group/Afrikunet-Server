import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class OTPPayloadDto {
  @IsNotEmpty()
  @IsString()
  email_address: string;

  @IsNotEmpty()
  @IsNumber()
  code: number;
}
