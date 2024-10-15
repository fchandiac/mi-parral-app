import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccountEntity } from '../../libs/entities/users/account.entity';
import { CreateAccountDto} from '../../libs/dto/account/create-account.dto';
import { UpdateAccountDto } from '../../libs/dto/account/update-account.dto';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(AccountEntity)
    private readonly accountRepository: Repository<AccountEntity>,
  ) {}

  async create(createAccountDto: CreateAccountDto): Promise<AccountEntity> {
    const account = this.accountRepository.create(createAccountDto);
    return this.accountRepository.save(account);
  }

  async findOne(id: string): Promise<AccountEntity> {
    const account = await this.accountRepository.findOneBy({ id });
    if (!account) {
      throw new NotFoundException(`Account with ID ${id} not found`);
    }
    return account;
  }

  async findByUserId(userId: string): Promise<AccountEntity[]> {
    return this.accountRepository.findBy({ userId });
  }

  async update(id: string, updateAccountDto: UpdateAccountDto): Promise<AccountEntity> {
    const account = await this.findOne(id);
    Object.assign(account, updateAccountDto);
    return this.accountRepository.save(account);
  }

  async remove(id: string): Promise<void> {
    const result = await this.accountRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Account with ID ${id} not found`);
    }
  }
}
