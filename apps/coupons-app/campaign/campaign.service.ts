import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CampaignEntity } from '../../libs/entities/campaigns/campaign.entity';
import { CreateCampaignDto } from '../../libs/dto/campaign/create-campaign.dto';
import { UpdateCampaignDto } from '../../libs/dto/campaign/update-campaign.dto';
import { CouponService } from '../coupon/coupon.service';
import { CreateCouponDto } from 'apps/libs/dto/coupon/create-coupon.dto';

@Injectable()
export class CampaignService {
  constructor(
    @InjectRepository(CampaignEntity)
    private readonly campaignRepository: Repository<CampaignEntity>,
    private readonly couponService: CouponService, // Inyecta el servicio de cupones
  ) {}

  async create(dto: CreateCampaignDto): Promise<CampaignEntity> {
    const campaign = this.campaignRepository.create(dto);
    const { quanty } = dto;

    const saveCampaign = await this.campaignRepository.save(campaign);

    // Crea los cupones asociados a la campaña en paralelo
    const couponPromises = Array.from({ length: quanty }, () =>
      this.couponService.create({
        campaignId: saveCampaign.id,
        expire: dto.expire,
        discount: dto.discount,
        rules: dto.rules,
      }),
    );

    await Promise.all(couponPromises);

    // Guarda la campaña después de crear los cupones
    return saveCampaign;
  }

  async findAllByUser(userId: string): Promise<CampaignEntity[]> {
    const campaigns = await this.campaignRepository.find({
      where: { userId },
    });
    return campaigns;
  }
  
  async findAll(): Promise<CampaignEntity[]> {
    return await this.campaignRepository.find();
  }

  async remove(uuid: string): Promise<void> {
    await this.campaignRepository.softDelete(uuid); // Usa soft delete si has configurado la columna deleted
  }
}
