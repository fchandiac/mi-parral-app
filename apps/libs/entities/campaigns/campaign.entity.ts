import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';

import { CouponEntity } from '../coupons/coupon.entity'; // Importa la entidad Coupon

@Entity('campaigns')
export class CampaignEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string; // Utilizar `!` para indicar que se inicializa en la base de datos

  @Column()
  name!: string;

  @Column({ nullable: true }) // Permitir nulos
  userId?: string | null; // Hacer opcional

  @Column({ type: 'int', default: 0 }) // Valor por defecto
  type: Number;

  @Column({ nullable: true, default: null }) // Permitir nulos
  referenceId?: string | null; // Hacer opcional

  @Column({ type: 'int' })
  minAge!: number;

  @Column({ type: 'int' })
  maxAge!: number;

  @Column({ type: 'int', default: 0 }) // Valor por defecto
  gender: number;

  @Column({ type: 'int', default: 0 }) // Valor por defecto
  neighborhood: number;

  @OneToMany(() => CouponEntity, (coupon) => coupon.campaign)
  coupons!: CouponEntity[]; // Relación uno a muchos con la entidad Coupon

  @Column({ type: 'timestamp' })
  expire!: Date; // Asegurarse de que tenga un valor inicial

  @CreateDateColumn({ type: 'timestamp' })
  created!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated!: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deleted?: Date; // Hacer opcional
}
