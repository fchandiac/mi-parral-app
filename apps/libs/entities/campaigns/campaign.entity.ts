import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';
import { DiscountType, Gender, Neighborhoods } from '../../enums'; // Asegúrate de importar tus enums
import {  CouponEntity } from '../coupons/coupon.entity'; // Importa la entidad de Discount

@Entity('campaigns')
export class CampaignEntity {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column()
  userId!: string | null;

  @Column({
    type: 'enum',
    enum: DiscountType,
    default: DiscountType.SERVICE,
  })
  type: DiscountType;

  @Column()
  referenceId!: string | null;

  @Column({ type: 'int' })
  minAge: number;

  @Column({ type: 'int' })
  maxAge: number;

  @Column({
    type: 'enum',
    enum: Gender,
    default: Gender.ALL,
  })
  gender: Gender;

  @Column({
    type: 'enum',
    enum: Neighborhoods,
    default: Neighborhoods.ALL,
  })
  neighborhood: Neighborhoods;

  @OneToMany(() => CouponEntity, (coupon) => coupon.campaign, {
    cascade: true, // Opcional, para que las operaciones como insert/update se propaguen automáticamente
  })
  discounts!: CouponEntity[]; // Relación uno a muchos con la entidad Discount

  @CreateDateColumn({ type: 'timestamp' })
  created: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deleted?: Date;
}
