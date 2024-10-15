import { Controller, Get, Post, Body, Param, Put, Delete, Query } from '@nestjs/common';
import { ServiceService } from './service.service'; 
import { CreateServiceDto } from '../../libs/dto/service/create-service.dto';
// import { UpdateServiceDto } from './update-service.dto'; // DTO para actualizar servicio
import { ServiceEntity } from '../../libs/entities/services/service.entity'; // Entidad para el servicio
import { UpdateServiceDto } from 'apps/libs/dto/service/update-service.dto';



@Controller('services')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @Get('/hello')
  async hello(): Promise<string> {
    return 'Hello World!';
  }

  // Crear un nuevo servicio
  @Post()
  async create(@Body() createServiceDto: CreateServiceDto): Promise<ServiceEntity> {
    return this.serviceService.create(createServiceDto);
  }

  // Obtener todos los servicios
  @Get()
  async findAll(): Promise<ServiceEntity[]> {
    return this.serviceService.findAll();
  }

  //Obtener un servicio por ID
  @Get('/findOne')
  async findOne(@Query('id') dto: string): Promise<ServiceEntity> {
    return this.serviceService.findOne(dto);
  }

  @Get('/findAllByUserId')
  async findAllByUserId(@Query('id') id: string): Promise<ServiceEntity[]> {
    return this.serviceService.findAllByUserId({id});
  }

  @Get('/findRandom')
  async findRandom(): Promise<ServiceEntity> {
    return this.serviceService.findRandom();
  }

  @Get('/findAllByCategoryName')
  async findAllByCategoryName(@Query('name') name: string): Promise<ServiceEntity[]> {
    return this.serviceService.findAllByCategoryName(name);
  }

   // FindAllByCategoryNameOrServiceName
  @Get('/findAllByCategoryNameOrServiceName')
  async findAllByCategoryNameOrServiceName(@Query('searchTerm') searchTerm: string): Promise<ServiceEntity[]> {
    return this.serviceService.findAllByCategoryNameOrServiceName(searchTerm);
  }


  // Eliminar un servicio por ID
  @Delete('/')
  async remove(@Query('id') id: string): Promise<void> {
    return this.serviceService.remove(id);
  }

  // Actualizar un servicio por ID
  @Put()
  async update(@Body() dto: UpdateServiceDto): Promise<ServiceEntity> {
    return this.serviceService.update(dto);
  }
}
