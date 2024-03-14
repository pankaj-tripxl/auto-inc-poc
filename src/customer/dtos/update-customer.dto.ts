// create-customer.dto.ts

import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class UpdateCustomerDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly address: string;
}
