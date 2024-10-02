import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ServiceEntity } from '../services/service.entity';
import { CommerceEntity } from '../commerces/commerce.entity';
import { ProductEntity } from '../products/product.entity';

@Entity({ name: 'categories' })
export class CategoryEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @OneToMany(() => ServiceEntity, (service) => service.category) // Relación uno a muchos con ServiceEntity
  services!: ServiceEntity[]; // Lista de servicios asociados a la categoría

  @OneToMany(() => CommerceEntity, (commerce) => commerce.category) // Relación uno a muchos con CommerceEntity
  commerces: CommerceEntity[]; // Lista de comercios asociados a la categoría

  @OneToMany(() => ProductEntity, (product) => product.category) // Relación uno a muchos con ProductEntity
  products: ProductEntity[]; // Lista de productos asociados a la categoría
}
