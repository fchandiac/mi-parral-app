import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../../libs/entities/users/user.entity';
import { CreateUserDto } from '../../libs/dto/user/create-user.dto';
import { UpdateUserDto } from '../../libs/dto/user/update-user.dto';
import { ByIdDto } from '../../libs/dto/common/by-id.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  // Crear un nuevo usuario
  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    try {
        return await this.userRepository.save(createUserDto);

    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {

        throw new ConflictException(`User with email ${createUserDto.email} already exists`);
        } else {
            throw new InternalServerErrorException();
        }
    }
  }

  // Obtener un usuario por ID
  async getUserById(byIdDto: ByIdDto): Promise<UserEntity> {
    const id = byIdDto.id;
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  // Obtener todos los usuarios
  async getAllUsers(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  // Actualizar un usuario por ID
  async updateUser(updateUserDto: UpdateUserDto): Promise<UserEntity> {
    const id = updateUserDto.id;
    const user = await this.userRepository.preload({
      id: id,
      ...updateUserDto,
    });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return this.userRepository.save(user);
  }

  // Eliminar un usuario por ID
  async deleteUser(id: string): Promise<void> {
    const result = await this.userRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
  }

  async createOrUpdateUser(userData: UpdateUserDto): Promise<UserEntity> {
    const { email, name } = userData;
    let user = await this.userRepository.findOne({ where: { email } });

    if (!user) {
      user = this.userRepository.create({ email, name });
      await this.userRepository.save(user);
    }

    return user;
  }
}
