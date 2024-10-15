import {
  Controller,
  Get,
  Post,
  Body,
  Req,
  Res,
  HttpStatus,
  HttpException,
  UnauthorizedException,
  Query,
  NotFoundException
} from '@nestjs/common';
import { AuthService } from './auth.service';
import e, { Request, Response } from 'express';
import { UserService } from '../user/user.service';
import { SignInDto } from 'apps/libs/dto/auth/sign-in.dto';
import { SessionService } from '../session/session.service';
import { AccountService } from '../account/account.service';
import { UserEntity } from 'apps/libs/entities/users/user.entity';
import { CreateUserDto } from 'apps/libs/dto/user/create-user.dto';
import { ValidateUserDto } from 'apps/libs/dto/user/validate-user.dto';
import { ProfileEntity } from 'apps/libs/entities/users/profile.entity';
import { UpdateProfileDto } from 'apps/libs/dto/profile/update-profile.dto';

@Controller('')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
    private readonly sessionService: SessionService,
    private readonly accountService: AccountService,
  ) {}

  @Get('/hello')
  async hello(): Promise<string> {
    return 'Hello World!';
  }

  @Post('/signIn')
  async signIn(@Body() signInDto: SignInDto): Promise<UserEntity> {
    try {
      const { email, password } = signInDto;
      const user = await this.authService.singIn(signInDto);
      return user;

      // Add the return statement here
    } catch (e) {
      return e.response;
    }
  }

  @Post('/validateUser')
  async validateUser(
    @Body() validateUserDto: ValidateUserDto,
  ): Promise<UserEntity | null> {
 
      const user = await this.authService.validateUser(validateUserDto);
      if (user === null) {
        throw new UnauthorizedException('Invalid credentials');
      }
      return user;

  }

  @Post('/registerUser')
  async registerUser(
    @Body() createUserDto: CreateUserDto,
  ): Promise<UserEntity> {
    try {
      const user = await this.authService.registerUser(createUserDto);
      const profile = await this.authService.createProfile({userId: user.id, birthdate: null, neighborhood: null, gender:null  });
      return user;
    } catch (e) {
      return e.response;
    }
  }

  @Post('signout')
  async signOut(@Req() req: Request, @Res() res: Response) {
    try {
      const { sessionToken } = req.body; // Asegúrate de que el token de sesión se envíe en el cuerpo de la solicitud

      if (!sessionToken) {
        throw new HttpException(
          'Session token is required',
          HttpStatus.BAD_REQUEST,
        );
      }

      // Eliminar o invalidar el token de sesión en la base de datos
      await this.authService.invalidateSession(sessionToken);

      // Opcionalmente, puedes limpiar cookies o realizar otras acciones necesarias para cerrar la sesión
      res.clearCookie('sessionToken'); // Si usas cookies para manejar el token de sesión

      res.status(HttpStatus.OK).json({
        message: 'User signed out successfully',
      });
    } catch (error) {
      // Manejo de errores en caso de que algo salga mal
      throw new HttpException(
        'Failed to sign out',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('/profile')
  async getProfile(@Query('userId') userId: string): Promise<ProfileEntity> {
    const profile = await this.authService.findProfileByUserId(userId);
    if (!profile) {
      throw new NotFoundException('Profile not found');
    }
    return profile;
  }

  @Get('/profile/isComplete')
  async isProfileComplete(@Query('profileId') profileId: string): Promise<Boolean> {
    return this.authService.isProfileComplete(profileId);
  }

  @Post('/profile/update')
  async updateProfile(@Body() dto: UpdateProfileDto): Promise<ProfileEntity> {
    return this.authService.updateProfile(dto);
  }

}
