import { ApiProperty } from '@nestjs/swagger';

export class UserResponse {
  @ApiProperty({
    example: 1,
    description: 'The unique identifier of the user',
  })
  id: number;

  @ApiProperty({
    example: 'user@example.com',
    description: 'The email address of the user',
  })
  email: string;

  @ApiProperty({
    example: 'John Doe',
    description: 'The name of the user',
  })
  name: string;
}

export class AuthResponse {
  @ApiProperty({
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
    description: 'JWT access token',
  })
  access_token: string;

  @ApiProperty({
    type: UserResponse,
    description: 'User information',
  })
  user: UserResponse;
}
