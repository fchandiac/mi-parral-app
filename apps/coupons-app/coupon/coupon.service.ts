import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, LessThanOrEqual, MoreThanOrEqual, Repository } from 'typeorm';
import { CouponEntity } from '../../libs/entities/coupons/coupon.entity';
import { CreateCouponDto } from '../../libs/dto/coupon/create-coupon.dto';
import { CouponsSelectionDto } from 'apps/libs/dto/commerce/coupons-selection.dto';
import { CampaignEntity } from '../../libs/entities/campaigns/campaign.entity';
import { ByIdDto } from 'apps/libs/dto/common/by-id.dto';
import { envs } from 'apps/libs/config';
import { UpdateCouponStatusDto } from 'apps/libs/dto/coupon/update-status.dto';
import { ValidateCouponDto } from 'apps/libs/dto/coupon/validate-coupon.dto';

interface CampaignReference {
  type: number;
  referenceId: string;
  name: string;
  image: string;
}

@Injectable()
export class CouponService {
  constructor(
    @InjectRepository(CouponEntity)
    private readonly couponRepository: Repository<CouponEntity>,
    @InjectRepository(CampaignEntity)
    private readonly campaignRepository: Repository<CampaignEntity>,
  ) {}

  // Función para crear un nuevo cupón
  async create(dto: CreateCouponDto): Promise<CouponEntity> {
    const coupon = this.couponRepository.create({
      ...dto,
      campaign: { id: dto.campaignId }, // Asigna correctamente el ID de la campaña
    });

    return await this.couponRepository.save(coupon);
  }

  // Función para obtener todos los cupones
  async findAll(): Promise<CouponEntity[]> {
    return await this.couponRepository.find();
  }

  // Función para actualizar el estado de un cupón

  async couponsSelection(dto: CouponsSelectionDto): Promise<CouponEntity[]> {
    const currentDate = new Date(); // Fecha actual para validar cupones no expirados

    // Encontrar campañas que coincidan con los criterios
    const campaigns = await this.campaignRepository.find({
      where: {
        minAge: LessThanOrEqual(dto.age), // dto.age debe ser mayor o igual a la edad mínima
        //maxAge: MoreThanOrEqual(dto.age), // dto.age debe ser menor o igual a la edad máxima
        //expire: MoreThanOrEqual(currentDate), // La campaña no debe haber expirado
      },
    });

    // Validar si no se encontraron campañas
    if (campaigns.length === 0) {
      throw new NotFoundException(`No campaigns found for age ${dto.age}`);
    }

    // Extraer los IDs de las campañas encontradas
    const campaignIds = campaigns.map((campaign) => campaign.id);

    // Buscar cupones relacionados con esas campañas
    const coupons = await this.couponRepository.find({
      where: {
        status: 0, // Cupones activos
        campaign: { id: In(campaignIds) }, // Relación con las campañas filtradas
      },
      relations: ['campaign'], // Incluir la relación con la campaña
    });

    const couponsWithReference = await Promise.all(
      coupons.map(async (coupon) => {
        const reference = await this.findCampaingReference(coupon.campaign.id);
        return { ...coupon, reference };
      }),
    );

    return couponsWithReference;
  }

  async delete(dto: ByIdDto): Promise<void> {
    const coupon = await this.couponRepository.findOne({
      where: { id: dto.id },
    });
    if (!coupon) {
      throw new NotFoundException(`Coupon with ID ${dto.id} not found`);
    }

    await this.couponRepository.softDelete({ id: dto.id });
  }

  async findCampaingReference(campaignId: string): Promise<any> {
    const campaign = await this.campaignRepository.findOne({
      where: { id: campaignId },
    });

    const reference: CampaignReference = {
      type: Number(campaign.type),
      referenceId: campaign.referenceId,
      name: '',
      image: '',
    };

    if (reference.type === 0) {
      const service = await this.findServiceById(reference.referenceId);
      const serviceImage = await this.findServiceImageById(
        reference.referenceId,
      );
      reference.name = service.name;
      reference.image = serviceImage.image;
    } else if (reference.type === 1) {
      const product = await this.findProductById(reference.referenceId);
      const productImage = await this.findProductImageById(
        reference.referenceId,
      );
      reference.name = product.name;
      reference.image = productImage.image;
    } else if (reference.type === 2) {
      const commerce = await this.findCommerceById(reference.referenceId);
      const commerceImage = await this.findCommerceImageById(
        reference.referenceId,
      );
      reference.name = commerce.name;
      reference.image = commerceImage.image;
    }

    return reference;
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

  async updateStatus(dto: UpdateCouponStatusDto): Promise<CouponEntity> {
    const coupon = await this.couponRepository.findOne({
      where: { id: dto.id },
    });
    if (!coupon) {
      throw new NotFoundException(`Coupon with ID ${dto.id} not found`);
    }
    coupon.status = dto.status;
    coupon.userId = dto.userId;

    return await this.couponRepository.save(coupon);
  }

  async findAllByUserId(userId: string): Promise<any[]> {
    const coupons = await this.couponRepository.find({
      where: { userId },
      relations: ['campaign'],
      order: { status: 'ASC' },
    });

    const couponsWithReference = await Promise.all(
      coupons.map(async (coupon) => {
        const reference = await this.findCampaingReference(coupon.campaign.id);
        return { ...coupon, reference };
      }),
    );

    return couponsWithReference;
  }

  async validateCoupon({
    id,
    validationUserId,
  }: ValidateCouponDto): Promise<CouponEntity> {
    const coupon = await this.couponRepository.findOne({
      where: { id },
    });
    if (!coupon) {
      throw new NotFoundException(`Coupon with ID ${id} not found`);
    }
    coupon.validationUserId = validationUserId;
    coupon.validationDate = new Date();
    coupon.status = 2;

    return await this.couponRepository.save(coupon);
  }
}
