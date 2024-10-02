import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProfileEntity } from '../../libs/entities/users/profile.entity';
import { CreateProfileDto } from '../../libs/dto/profile/create-profile.dto';
import { UpdateProfileDto } from '../../libs/dto/profile/update-profile.dto';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(ProfileEntity)
    private readonly profileRepository: Repository<ProfileEntity>,
  ) {}

  async findAll(): Promise<ProfileEntity[]> {
    return await this.profileRepository.find();
  }

  async findOne(id: string): Promise<ProfileEntity> {
    const profile = await this.profileRepository.findOneBy({ id });
    if (!profile) {
      throw new NotFoundException(`Profile with ID ${id} not found`);
    }
    return profile;
  }

  async create(dto: CreateProfileDto): Promise<ProfileEntity> {
    const profile = this.profileRepository.create(dto);
    return await this.profileRepository.save(profile) 
  }

  async update(id: string, updateProfileDto: UpdateProfileDto): Promise<ProfileEntity> {
    const profile = await this.findOne(id);
    Object.assign(profile, updateProfileDto);
    return await this.profileRepository.save(profile);
  }

  async delete(id: string): Promise<void> {
    const result = await this.profileRepository.delete({ id });
    if (result.affected === 0) {
      throw new NotFoundException(`Profile with ID ${id} not found`);
    }
  }
}
