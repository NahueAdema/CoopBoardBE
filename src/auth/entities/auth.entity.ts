import { ApiProperty } from '@nestjs/swagger';
export class AuthResponse {
  @ApiProperty()
  access_token: string;

  @ApiProperty()
  user: {
    id: number;
    email: string;
    name: string;
  };
}
