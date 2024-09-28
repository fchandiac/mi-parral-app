import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity({ name: 'products' })
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'varchar', length: 255 })
  name!: string;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @Column({ type: 'int' }) // Almacena el precio como entero
  price!: number;

  @Column({ type: 'uuid' })
  userId!: string;

  @Column({ type: 'varchar', length: 20, nullable: true }) // Columna para el número de WhatsApp
  whatsapp?: string;

  @CreateDateColumn({ type: 'timestamp' }) // Fecha de creación
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' }) // Fecha de la última actualización
  updatedAt!: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true }) // Fecha de eliminación lógica (soft delete)
  deletedAt?: Date;
}
