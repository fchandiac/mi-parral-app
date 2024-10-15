import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SessionEntity } from '../../libs/entities/users/session.entity';
import { CreateSessionDto } from '../../libs/dto/session/create-session.dto';
import { UpdateSessionDto } from '../../libs/dto/session/update-session.dto';

@Injectable()
export class SessionService {
  constructor(
    @InjectRepository(SessionEntity)
    private readonly sessionRepository: Repository<SessionEntity>,
  ) {}

  async create(createSessionDto: CreateSessionDto): Promise<SessionEntity> {
    const session = this.sessionRepository.create(createSessionDto);
    return this.sessionRepository.save(session);
  }

  async findOne(id: string): Promise<SessionEntity> {
    const session = await this.sessionRepository.findOneBy({ id });
    if (!session) {
      throw new NotFoundException(`Session with ID ${id} not found`);
    }
    return session;
  }

  async findByToken(sessionToken: string): Promise<SessionEntity> {
    const session = await this.sessionRepository.findOneBy({ sessionToken });
    if (!session) {
      throw new NotFoundException(`Session with token ${sessionToken} not found`);
    }
    return session;
  }

  async update(id: string, updateSessionDto: UpdateSessionDto): Promise<SessionEntity> {
    const session = await this.findOne(id);
    Object.assign(session, updateSessionDto);
    return this.sessionRepository.save(session);
  }

  async remove(id: string): Promise<void> {
    const result = await this.sessionRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Session with ID ${id} not found`);
    }
  }
}
