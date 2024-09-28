import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from '../../libs/dto/user/create-user.dto';
import { UpdateUserDto } from '../../libs/dto/user/update-user.dto';
import { ByIdDto } from '../../libs/dto/common/by-id.dto';
import { UserEntity } from '../../libs/entities/users/user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Crear un nuevo usuario
  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.userService.createUser(createUserDto);
  }

  // Obtener todos los usuarios
  @Get()
  async getAllUsers(): Promise<UserEntity[]> {
    return this.userService.getAllUsers();
  }

  // Obtener un usuario por ID
  @Get('/findOneById')
  async getUserById(@Body() byIdDto: ByIdDto): Promise<UserEntity> {
    return this.userService.getUserById(byIdDto);
  }

  // Actualizar un usuario existente
  @Put()
  async updateUser(
    @Body() 
    updateUserDto: UpdateUserDto,
  ): Promise<UserEntity> {
    return this.userService.updateUser(updateUserDto);
  }

  // Eliminar un usuario
  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<void> {
    return this.userService.deleteUser(id);
  }
}
