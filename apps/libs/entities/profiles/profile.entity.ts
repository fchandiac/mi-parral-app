import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  Unique,
} from 'typeorm';

@Entity({ name: 'profiles' })
@Unique(['userId']) // Define 'userId' como campo único
export class ProfileEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'date' })
  birthdate!: Date; // Corrige el nombre de 'birhtdate' a 'birthdate'

  @Column({ type: 'varchar', length: 10 })
  gender!: string;

  @Column({ type: 'varchar', length: 255 })
  neighborhood!: string; // Define el campo 'neighborhood'

  @Column({ type: 'uuid' })
  userId!: string;

  
}
