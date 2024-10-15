import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryEntity } from '../../libs/entities/categories/category.entity';

@Injectable()
export class CategorySeederService {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
  ) {}

  async seed() {
    const categories = [
        { name: 'Cafeterías' },
        { name: 'Pastelerías' },
        { name: 'Restaurantes' },
        { name: 'Peluquerías' },
        { name: 'Barberías' },
        { name: 'Spa y Bienestar' },
        { name: 'Salud y Belleza' },
        { name: 'Tiendas de Ropa' },
        { name: 'Tiendas de Calzado' },
        { name: 'Supermercados' },
        { name: 'Fruterías' },
        { name: 'Panaderías' },
        { name: 'Tiendas de Mascotas' },
        { name: 'Farmacias' },
        { name: 'Gimnasios' },
        { name: 'Clínicas Dentales' },
        { name: 'Estéticas' },
        { name: 'Ferreterías' },
        { name: 'Servicios de Limpieza' },
        { name: 'Servicios de Plomería' },
        { name: 'Servicios de Electricidad' },
        { name: 'Talleres Mecánicos' },
        { name: 'Tiendas de Electrónica' },
        { name: 'Papelerías' },
        { name: 'Tiendas de Juguetes' },
        { name: 'Floristerías' },
        { name: 'Librerías' },
        { name: 'Servicios de Transporte' },
        { name: 'Servicios de Entrega a Domicilio' },
        { name: 'Lavanderías' }
    ];

    for (const category of categories) {
      const exists = await this.categoryRepository.findOne({ where: { name: category.name } });
      if (!exists) {
        await this.categoryRepository.save(category);
      }
    }
  }
}
