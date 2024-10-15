import { Controller, Get, Post, Body, Param, Patch } from '@nestjs/common';
import { CouponService } from './coupon.service';
import { CreateCouponDto } from '../../libs/dto/coupon/create-coupon.dto';

@Controller('coupons')
export class CouponController {
  constructor(private readonly couponService: CouponService) {}

  // Ruta para crear un nuevo cupón
  @Post()
  async create(@Body() createCouponDto: CreateCouponDto) {
    return await this.couponService.create(createCouponDto);
  }

  // Ruta para obtener todos los cupones
  @Get()
  async findAll() {
    return await this.couponService.findAll();
  }

  // Ruta para actualizar el estado de un cupón por su ID
  @Patch(':id/status')
  async updateStatus(@Param('id') id: string, @Body('status') status: number) {
    return await this.couponService.updateStatus(id, status);
  }
}
