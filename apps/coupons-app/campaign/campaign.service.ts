import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CampaignEntity } from '../../libs/entities/campaigns/campaign.entity';
import { CreateCampaignDto } from '../../libs/dto/campaign/create-campaign.dto';
import { UpdateCampaignDto } from '../../libs/dto/campaign/update-campaign.dto';
import { CouponService } from '../coupon/coupon.service';

@Injectable()
export class CampaignService {
  constructor(
    @InjectRepository(CampaignEntity)
    private readonly campaignRepository: Repository<CampaignEntity>,
    private readonly couponService: CouponService, // Inyecta el servicio de cupones
  ) {}

  async create(createCampaignDto: CreateCampaignDto): Promise<CampaignEntity> {
    const campaign = this.campaignRepository.create(createCampaignDto);
    return await this.campaignRepository.save(campaign);
  }

  async update(uuid: string, updateCampaignDto: UpdateCampaignDto): Promise<CampaignEntity> {
    await this.campaignRepository.update(uuid, updateCampaignDto);
    return await this.campaignRepository.findOneBy({ uuid });
  }

  async findAll(): Promise<CampaignEntity[]> {
    return await this.campaignRepository.find();
  }

  async findOne(uuid: string): Promise<CampaignEntity> {
    return await this.campaignRepository.findOneBy({ uuid });
  }

  async remove(uuid: string): Promise<void> {
    await this.campaignRepository.softDelete(uuid); // Usa soft delete si has configurado la columna deleted
  }
}
