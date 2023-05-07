import {
  Controller,
  Body,
  Post,
  ConflictException,
  HttpStatus,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiOkResponse,
} from '@nestjs/swagger';
import { AuthenticationService } from './authentication.service';
import { SignUpDto } from './dto/auth-credential.dto';
import { User } from './entity/user.entity';

@ApiTags('authentication')
@Controller({
  path: 'authentication',
  version: ['v1'],
})
export class AuthenticationController {
  constructor(private readonly authServices: AuthenticationService) {}

  @Post()
  @ApiOperation({ summary: 'Create User' })
  @ApiOkResponse({
    status: 201,
    description: 'User Created',
    type: SignUpDto,
  })
  @ApiResponse({
    status: 409,
    description: 'Conflict or username exist or email exist',
  })
  async signUp(@Body() signUpDto: SignUpDto): Promise<User> {
    const { username, email } = signUpDto;

    const checkUsername = await this.authServices.checkIfExistUsername(
      username,
    );

    if (checkUsername.length > 0)
      throw new ConflictException({
        message: 'Username exist',
        statusCode: HttpStatus.CONFLICT,
      });

    const checkEmail = await this.authServices.checkIfExistEmail(email);

    if (checkEmail.length > 0)
      throw new ConflictException({
        message: 'Email exist',
        statusCode: HttpStatus.CONFLICT,
      });

    return await this.authServices.signUp(signUpDto);
  }
}
