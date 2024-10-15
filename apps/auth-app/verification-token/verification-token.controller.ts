import { Controller, Get, Post, Param, Body, Delete } from '@nestjs/common';
import { VerificationTokenService } from './verification-token.service';
import { CreateVerificationTokenDto } from '../../libs/dto/token/create-verification-token.dto';

@Controller('verification-tokens')
export class VerificationTokenController {
  constructor(private readonly verificationTokenService: VerificationTokenService) {}

  @Post()
  async create(@Body() createVerificationTokenDto: CreateVerificationTokenDto) {
    return await this.verificationTokenService.create(createVerificationTokenDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.verificationTokenService.findOne(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.verificationTokenService.remove(id);
  }
}
