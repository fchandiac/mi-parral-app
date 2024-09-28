import { Controller, Get, Post, Param, Body, Delete, Put } from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateAccountDto } from '../../libs/dto/account/create-account.dto';
import { UpdateAccountDto } from '../../libs/dto/account/update-account.dto';

@Controller('accounts')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post()
  async create(@Body() createAccountDto: CreateAccountDto) {
    return await this.accountService.create(createAccountDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.accountService.findOne(id);
  }

  @Get('user/:userId')
  async findByUserId(@Param('userId') userId: string) {
    return await this.accountService.findByUserId(userId);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateAccountDto: UpdateAccountDto) {
    return await this.accountService.update(id, updateAccountDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.accountService.remove(id);
  }
}
