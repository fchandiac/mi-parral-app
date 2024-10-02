import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from '../../libs/dto/profile/create-profile.dto';
import { UpdateProfileDto } from '../../libs/dto/profile/update-profile.dto';
import { ProfileEntity } from '../../libs/entities/users/profile.entity';

@Controller('profiles')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get()
  async findAll(): Promise<ProfileEntity[]> {
    return await this.profileService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ProfileEntity> {
    return await this.profileService.findOne(id);
  }

  @Post()
  async create(@Body() createProfileDto: CreateProfileDto): Promise<ProfileEntity> {
    return await this.profileService.create(createProfileDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProfileDto: UpdateProfileDto,
  ): Promise<ProfileEntity> {
    return await this.profileService.update(id, updateProfileDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return await this.profileService.delete(id);
  }
}
