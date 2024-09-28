import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Delete,
  Put,
} from '@nestjs/common';
import { SessionService } from './session.service';
import { CreateSessionDto } from '../../libs/dto/session/create-session.dto';
import { UpdateSessionDto } from '../../libs/dto/session/update-session.dto';

@Controller('sessions')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @Post()
  async create(@Body() createSessionDto: CreateSessionDto) {
    return await this.sessionService.create(createSessionDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.sessionService.findOne(id);
  }

  @Get('token/:sessionToken')
  async findByToken(@Param('sessionToken') sessionToken: string) {
    return await this.sessionService.findByToken(sessionToken);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateSessionDto: UpdateSessionDto,
  ) {
    return await this.sessionService.update(id, updateSessionDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.sessionService.remove(id);
  }
}
