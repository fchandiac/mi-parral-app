import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { CampaignService } from './campaign.service';
import { CreateCampaignDto } from '../../libs/dto/campaign/create-campaign.dto';
import { UpdateCampaignDto } from '../../libs/dto/campaign/update-campaign.dto';
import { CampaignEntity } from '../../libs/entities/campaigns/campaign.entity';

@Controller('campaigns')
export class CampaignController {
  constructor(private readonly campaignService: CampaignService) {}

  @Post('/create')
  async create(@Body() dto: CreateCampaignDto): Promise<CampaignEntity> {
    return await this.campaignService.create(dto);
  }

  @Get('/findAllByUserId')
  async findAllByUserId(@Query('id') id: string): Promise<CampaignEntity[]> {
    return this.campaignService.findAllByUser(id);
  }

  @Get()
  async findAll(): Promise<CampaignEntity[]> {
    return await this.campaignService.findAll();
  }

  // @Get(':uuid')
  // async findOne(@Param('uuid') uuid: string): Promise<CampaignEntity> {
  //   return await this.campaignService.findOne(uuid);
  // }

  // @Put(':uuid')
  // async update(
  //   @Param('uuid') uuid: string,
  //   @Body() updateCampaignDto: UpdateCampaignDto,
  // ): Promise<CampaignEntity> {
  //   return await this.campaignService.update(uuid, updateCampaignDto);
  // }

  @Delete(':uuid')
  async remove(@Param('uuid') uuid: string): Promise<void> {
    return await this.campaignService.remove(uuid);
  }
}
