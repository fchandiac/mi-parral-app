import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne  } from 'typeorm';
import { CategoryEntity } from '../categories/category.entity';

@Entity({ name: 'commerces' })
export class CommerceEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;  // ID único del comercio

  @Column({ type: 'varchar', length: 255 })
  name!: string;  // Nombre del comercio

  @Column({ type: 'text', nullable: true })
  description?: string;  // Descripción del comercio

  @Column({ type: 'text',  nullable: true })
  address?: string;  // Dirección del comercio

  @Column({ type: 'text', nullable: true })
  location?: string;  // Ubicación del comercio

  @Column({ type: 'uuid' })
  userId!: string;  // ID del usuario asociado

  @Column({ type: 'varchar', length: 20, nullable: true })
  whatsapp?: string;  // Número de WhatsApp del comercio

  @CreateDateColumn({ type: 'timestamp' }) // Fecha de creación
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' }) // Fecha de la última actualización
  updatedAt!: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true }) // Fecha de eliminación lógica (soft delete)
  deletedAt?: Date;

  @ManyToOne(() => CategoryEntity, (category) => category.commerces)
  category!: CategoryEntity; // Categoría a la que pertenece el comercio
}


