import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VerificationTokenEntity } from '../../libs/entities/users/verification-token.entity';
import { CreateVerificationTokenDto } from '../../libs/dto/token/create-verification-token.dto';

@Injectable()
export class VerificationTokenService {
  constructor(
    @InjectRepository(VerificationTokenEntity)
    private readonly verificationTokenRepository: Repository<VerificationTokenEntity>,
  ) {}

  async create(createVerificationTokenDto: CreateVerificationTokenDto): Promise<VerificationTokenEntity> {
    const token = this.verificationTokenRepository.create(createVerificationTokenDto);
    return this.verificationTokenRepository.save(token);
  }

  async findOne(id: string): Promise<VerificationTokenEntity> {
    const token = await this.verificationTokenRepository.findOneBy({ id });
    if (!token) {
      throw new NotFoundException(`Verification token with ID ${id} not found`);
    }
    return token;
  }

  async remove(id: string): Promise<void> {
    const result = await this.verificationTokenRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Verification token with ID ${id} not found`);
    }
  }
}
