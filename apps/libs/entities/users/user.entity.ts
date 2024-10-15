import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ValueTransformer,
} from 'typeorm';
import { SessionEntity } from './session.entity';
import { AccountEntity } from './account.entity';

const transformer: Record<'date' | 'bigint', ValueTransformer> = {
  date: {
    from: (date: string | null) => (date ? new Date(parseInt(date, 10)) : null),
    to: (date?: Date) => (date ? date.valueOf().toString() : null),
  },
  bigint: {
    from: (bigInt: string | null) => (bigInt ? parseInt(bigInt, 10) : null),
    to: (bigInt?: number) => (bigInt ? bigInt.toString() : null),
  },
};

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'varchar', nullable: true })
  name!: string | null;

  @Column({ type: 'varchar', nullable: true, unique: true })
  email!: string | null;

  @Column({ type: 'varchar', nullable: true })
  password!: string | null; 

  @Column({ type: 'varchar', nullable: true, transformer: transformer.date })
  emailVerified!: string | null;

  @Column({ type: 'varchar', nullable: true })
  image!: string | null;

  @Column({ type: 'varchar', nullable: true, default: 'user' })
  role!: string | null;

  @Column({ type: 'varchar', nullable: true, unique: true })
  googleId!: string | null; // Nuevo campo para almacenar el ID de Google

  @OneToMany(() => SessionEntity, (session) => session.user)
  sessions!: SessionEntity[];

  @OneToMany(() => AccountEntity, (account) => account.user)
  accounts!: AccountEntity[];
}
