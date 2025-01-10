import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn, UpdateDateColumn, DeleteDateColumn
} from 'typeorm';

@Entity({ name: 'service_images' })
export class ServiceImageEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  serviceId!: string;

  @Column()
  image!: string;

  @Column({ nullable: true })
  principal!: boolean | null;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt!: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deletedAt?: Date;
  
}
