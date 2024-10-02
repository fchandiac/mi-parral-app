import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { UserEntity } from './user.entity'; // Importa la entidad de usuario

@Entity({ name: 'profiles' })
@Unique(['userId'])
export class ProfileEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'date', nullable: true })
  birthdate?: Date;

  @Column({nullable: true})
  gender?: number;

  @Column({nullable: true})
  neighborhood?: number;

  @OneToOne(() => UserEntity)  // Define la relación uno a uno con UserEntity
  @JoinColumn({ name: 'userId' })  // Define la clave foránea 'userId' que apunta a UserEntity
  user!: UserEntity;

  @Column({ type: 'uuid' })
  userId!: string;  // Este campo es la clave foránea hacia UserEntity
}
