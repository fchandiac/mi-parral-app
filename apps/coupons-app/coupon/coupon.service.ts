import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CouponEntity } from '../../libs/entities/coupons/coupon.entity';
import { CreateCouponDto } from '../../libs/dto/coupon/create-coupon.dto';

@Injectable()
export class CouponService {
  constructor(
    @InjectRepository(CouponEntity)
    private readonly couponRepository: Repository<CouponEntity>,
  ) {}

  // Función para crear un nuevo cupón
  async create(createCouponDto: CreateCouponDto): Promise<CouponEntity> {
    const newCoupon = this.couponRepository.create(createCouponDto);
    return await this.couponRepository.save(newCoupon);
  }

  // Función para obtener todos los cupones
  async findAll(): Promise<CouponEntity[]> {
    return await this.couponRepository.find();
  }

  // Función para actualizar el estado de un cupón
  async updateStatus(id: string, status: number): Promise<CouponEntity> {
    const coupon = await this.couponRepository.findOneBy({ id });
    if (!coupon) {
      throw new NotFoundException(`Coupon with ID ${id} not found`);
    }
    coupon.status = status;
    return await this.couponRepository.save(coupon);
  }
}
