import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDiscountDto } from '../../libs/dto/discount/create-discount.dto';
import { UpdateDiscountDto } from '../../libs/dto/discount/update-discount.dto';
import { DiscountEntity } from '../../libs/entities/discounts/discount.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DiscountService {
  constructor(
    @InjectRepository(DiscountEntity)
    private discountRepository: Repository<DiscountEntity>,
  ) {}

  async create(createDiscountDto: CreateDiscountDto): Promise<DiscountEntity> {
    const discount = this.discountRepository.create(createDiscountDto);
    return await this.discountRepository.save(discount);
  }

  async findAll(): Promise<DiscountEntity[]> {
    return await this.discountRepository.find();
  }

  async findOne(id: string): Promise<DiscountEntity> {
    const discount = await this.discountRepository.findOne({ where: { id } });
    if (!discount) {
      throw new NotFoundException(`Discount with ID ${id} not found`);
    }
    return discount;
  }

  async update(id: string, updateDiscountDto: UpdateDiscountDto): Promise<DiscountEntity> {
    await this.findOne(id); // Ensure the discount exists
    await this.discountRepository.update(id, updateDiscountDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    const discount = await this.findOne(id);
    await this.discountRepository.remove(discount);
  }
}
