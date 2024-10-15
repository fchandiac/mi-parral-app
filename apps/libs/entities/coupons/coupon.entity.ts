// El archivo se llama discount.entity.ts
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    ManyToOne,
  } from 'typeorm';
  import { CampaignEntity } from '../campaigns/campaign.entity'; // Importa la entidad Campaign
  
  @Entity({ name: 'coupons' }) // La tabla se sigue llamando 'discount'
  export class CouponEntity { // La clase se sigue llamando DiscountEntity
    @PrimaryGeneratedColumn('uuid')
    id!: string;
  
    @Column({ type: 'int' })
    status!: number;
  
    @Column()
    userId!: string | null;
  
    @Column()
    validationUserId!: string | null;
  
    @Column({ type: 'date', nullable: true })
    validationDate!: Date | null;
  
    @Column({ type: 'date' })
    expire!: Date;
    //rules
    @Column({nullable: true})
    rules?: string;
  
    @Column({ type: 'decimal', precision: 5, scale: 2 })
    discount!: number;
  
    @ManyToOne(() => CampaignEntity, (campaign) => campaign.discounts)
    campaign!: CampaignEntity;
  
    @CreateDateColumn({ type: 'timestamp' })
    createdAt!: Date;
  
    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt!: Date;
  
    @DeleteDateColumn({ type: 'timestamp', nullable: true })
    deletedAt?: Date;
  }
  