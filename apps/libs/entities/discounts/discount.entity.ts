import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity({ name: 'discount' })
export class DiscountEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'varchar', length: 255 })
  name!: string;

  @Column({ type: 'int' })
  status!: number;

  @Column() // Cambiado a string
  userId!: string | null;

  @Column()
  validationUserId!: string | null;

  @Column({ type: 'date', nullable: true })
  validationDate!: Date | null;

  @Column({ type: 'date' })
  expire!: Date;

  @Column({ type: 'decimal', precision: 5, scale: 2 })
  discount!: number;

  @Column({ type: 'int' })
  type!: number;

  @Column()
  referenceId!: string | null;

  @Column({ type: 'int', nullable: true })
  minAge!: number | null;

  @Column({ type: 'int', nullable: true })
  maxAge!: number | null;

  @Column({ type: 'int', nullable: true })
  neighborhood!: number | null;

  @Column({ type: 'int', nullable: true })
  gender!: number | null;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt!: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deletedAt?: Date;
}
