import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { CouponService } from './coupon.service';
import { CreateCouponDto } from '../../libs/dto/coupon/create-coupon.dto';
import { CouponsSelectionDto } from '../../libs/dto/commerce/coupons-selection.dto';
import { ByIdDto } from 'apps/libs/dto/common/by-id.dto';
import { UpdateCouponStatusDto } from 'apps/libs/dto/coupon/update-status.dto';
import { ValidateCouponDto } from 'apps/libs/dto/coupon/validate-coupon.dto';

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

 

  @Post('couponsSelection')
  async couponsSelection(@Body() dto: CouponsSelectionDto) {
    return await this.couponService.couponsSelection(dto);
  }

  @Delete('delete')
  async delete(@Body() dto: ByIdDto) {
    return await this.couponService.delete(dto);
  }

  //  async updateStatus(dto: UpdateCouponStatusDto)

  @Post('updateStatus')
  async updateStatus(@Body() dto: UpdateCouponStatusDto) {
    return await this.couponService.updateStatus(dto);
  }

  @Get('findAllByUserId')
  async findAllByUserId(@Query('userId') userId: string) {
    return await this.couponService.findAllByUserId(userId);
  }

  @Post('validateCoupon')
  async validateCoupon(@Body() dto: ValidateCouponDto) {
    return await this.couponService.validateCoupon(dto);
  }
}
