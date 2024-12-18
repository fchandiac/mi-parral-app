import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CampaignEntity } from '../../libs/entities/campaigns/campaign.entity';
import { CreateCampaignDto } from '../../libs/dto/campaign/create-campaign.dto';
import { UpdateCampaignDto } from '../../libs/dto/campaign/update-campaign.dto';
import { CouponService } from '../coupon/coupon.service';
import { CreateCouponDto } from 'apps/libs/dto/coupon/create-coupon.dto';
import { ByIdDto } from 'apps/libs/dto/common/by-id.dto';
import { CommerceEntity } from 'apps/libs/entities/commerces/commerce.entity';
import { envs } from 'apps/libs/config';
import { CommerceImageEntity } from 'apps/libs/entities/images/commerce-image.entity';
import { Console } from 'console';

enum DiscountType {
  SERVICE = 0, // Cupón para un servicio
  PRODUCT = 1, // Cupón para un producto
  COMMERCE = 2, // Cupón para un comercio
}

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
      relations: ['coupons'],
    });

    const setReferences = async (campaign: CampaignEntity) => {

      if (campaign.type === 0) {
        const reference = await this.findServiceById(campaign.referenceId);
        const image = await this.findServiceImageById(campaign.referenceId);
      
        reference.image =image.image;
        return { ...campaign, reference };
      }  else if (campaign.type === 1) {
        const reference = await this.findProductById(campaign.referenceId);
        const image = await this.findProductImageById(campaign.referenceId);
        reference.image = image.image;
        return { ...campaign, reference };
      } else if (campaign.type === 2) {
        const reference = await this.findCommerceById(campaign.referenceId);
        const image = await this.findCommerceImageById(campaign.referenceId);
        reference.image = image.image;
        return { ...campaign, reference };
      }
      return {
        ...campaign,
        reference: null,
      };
    };

    const campaignsWithReferences = await Promise.all(
      campaigns.map(setReferences),
    );


    return campaignsWithReferences;
  }

  async findAll(): Promise<CampaignEntity[]> {
    return await this.campaignRepository.find();
  }

  async remove(dto: ByIdDto): Promise<void> {
    await this.campaignRepository.softDelete(dto.id); // Usa soft delete si has configurado la columna deleted
  }


  async findCommerceById(id: string): Promise<any> {
    const commerce = await fetch(
      `${envs.api.backendUrl}/commerces/findOneById?id=${id}`,
    );
    return commerce.json();
  }

  async findCommerceImageById(id: string): Promise<any> {
    const commerceImage = await fetch(
      `${envs.images.backendUrl}/commerce/image?commerceId=${id}`,
    );
    return commerceImage.json();
  }

  async findServiceById(id: string): Promise<any> {
    const service = await fetch(
      `${envs.api.backendUrl}/services/findOneById?id=${id}`,
    );
    return service.json();
  }

  async findServiceImageById(id: string): Promise<any> {
    const serviceImage = await fetch(
      `${envs.images.backendUrl}/service/image?serviceId=${id}`,
    );
    return serviceImage.json();
  }

  async findProductById(id: string): Promise<any> {
    const product = await fetch(
      `${envs.api.backendUrl}/products/findOne?id=${id}`,
    );
    return product.json();
  }

  async findProductImageById(id: string): Promise<any> {
    const productImage = await fetch(
      `${envs.images.backendUrl}/product/image?productId=${id}`,
    );

    return productImage.json();
  }

}
