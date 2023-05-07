import {
  IsString,
  IsInt,
  IsEmail,
  MinLength,
  IsOptional,
  IsNotEmpty,
  MaxLength,
} from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class SignUpDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'username',
    description: 'Username User',
    required: true,
    type: 'string',
  })
  username: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'name',
    description: 'Name User',
    required: true,
    type: 'string',
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'surname',
    description: 'Surname User',
    required: true,
    type: 'string',
  })
  surname: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    example: 'test@email.it',
    description: 'Email User',
    required: true,
    type: 'string',
  })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'passordtest',
    description: 'Password User',
    required: true,
    type: 'string',
  })
  password: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'GG/MM/YYYY',
    description: 'Date Of Birth User',
    required: true,
    type: 'string',
  })
  datanasc: string;

  @IsString()
  @MinLength(1)
  @MaxLength(1)
  @ApiProperty({
    example: 'M/W',
    description: 'Sex User',
    required: true,
    type: 'string',
  })
  sex: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: 'usersname',
    description: 'Username User',
    required: false,
    type: 'string',
  })
  numberPhone: string | null = null;

  @IsInt()
  @IsOptional()
  @ApiProperty({
    example: 'height',
    description: 'Height User',
    required: false,
    type: 'number',
  })
  height: number | null = null;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: 'weight',
    description: 'Weight User',
    required: false,
    type: 'string',
  })
  weight: string | null = null;
}
