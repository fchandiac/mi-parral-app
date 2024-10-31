import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  JoinColumn, // Importa JoinColumn
} from 'typeorm';
import { CampaignEntity } from '../campaigns/campaign.entity'; // Importa la entidad Campaign
import { CouponStatus } from 'apps/libs/enums';

@Entity({ name: 'coupons' }) // La tabla se sigue llamando 'coupons'
export class CouponEntity { // La clase se sigue llamando CouponEntity
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'int', default: 0 })
  status!: CouponStatus;

  @Column({ nullable: true, default: null })
  userId!: string | null;

  @Column({ nullable: true, default: null })
  validationUserId!: string | null;

  @Column({ type: 'date', nullable: true })
  validationDate!: Date | null;

  @Column({ type: 'date' })
  expire!: Date;

  // rules
  @Column({ nullable: true })
  rules?: string;

  @Column({ type: 'int', default: 0 })
  discount!: number;


  @ManyToOne(() => CampaignEntity, (campaign) => campaign.coupons)
  @JoinColumn({ name: 'campaignId' }) // Especifica la columna de clave foránea
  campaign!: CampaignEntity;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt!: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deletedAt?: Date;
}
