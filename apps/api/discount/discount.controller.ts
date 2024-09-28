import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DiscountService } from './discount.service';
import { CreateDiscountDto } from '../../libs/dto/discount/create-discount.dto';
import { UpdateDiscountDto } from '../../libs/dto/discount/update-discount.dto';
import { DiscountEntity } from 'apps/libs/entities/discounts/discount.entity';


@Controller('discount')
export class DiscountController {
  constructor(private readonly discountService: DiscountService) {}

  @Post()
  async create(@Body() createDiscountDto: CreateDiscountDto): Promise<DiscountEntity> {
    const discount = await this.discountService.create(createDiscountDto);
    return discount;
  }

  @Get()
  async findAll(): Promise<DiscountEntity[]> {
    return await this.discountService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<DiscountEntity> {
    return await this.discountService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDiscountDto: UpdateDiscountDto,
  ): Promise<DiscountEntity> {
    return await this.discountService.update(id, updateDiscountDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return await this.discountService.remove(id);
  }
}
