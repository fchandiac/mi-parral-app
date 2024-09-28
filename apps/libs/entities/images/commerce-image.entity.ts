import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity({ name: 'commerce_images' })
export class CommerceImageEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  commerceId!: string;

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
