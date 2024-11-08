import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
  Matches,
  MaxLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty({ example: 'nahue@example.com' })
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'Nahuel' })
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  name: string;

  @ApiProperty({
    example: 'Password123!',
    description:
      'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character',
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(30)
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
    {
      message:
        'Password too weak - Password must contain at least one uppercase letter, one lowercase letter, one number and one special character',
    },
  )
  password: string;
}
