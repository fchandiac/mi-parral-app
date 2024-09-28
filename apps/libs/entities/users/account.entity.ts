import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    ValueTransformer,
  } from "typeorm";
  import { UserEntity } from "./user.entity";
  
  const transformer: Record<"date" | "bigint", ValueTransformer> = {
    date: {
      from: (date: string | null) => (date ? new Date(parseInt(date, 10)) : null),
      to: (date?: Date) => (date ? date.valueOf().toString() : null),
    },
    bigint: {
      from: (bigInt: string | null) => (bigInt ? parseInt(bigInt, 10) : null),
      to: (bigInt?: number) => (bigInt ? bigInt.toString() : null),
    },
  };
  
  @Entity({ name: "accounts" })
  export class AccountEntity {
    @PrimaryGeneratedColumn("uuid")
    id!: string;
  
    @Column({ type: "uuid" })
    userId!: string;
  
    @Column()
    type!: string;
  
    @Column()
    provider!: string;
  
    @Column()
    providerAccountId!: string;
  
    @Column({ type: "varchar", nullable: true })
    refresh_token!: string | null;
  
    @Column({ type: "varchar", nullable: true })
    access_token!: string | null;
  
    @Column({
      nullable: true,
      type: "bigint",
      transformer: transformer.bigint,
    })
    expires_at!: number | null;
  
    @Column({ type: "varchar", nullable: true })
    token_type!: string | null;
  
    @Column({ type: "varchar", nullable: true })
    scope!: string | null;
  
    @Column({ type: "varchar", nullable: true })
    id_token!: string | null;
  
    @Column({ type: "varchar", nullable: true })
    session_state!: string | null;
  
    @Column({ type: "varchar", nullable: true })
    oauth_token_secret!: string | null;
  
    @Column({ type: "varchar", nullable: true })
    oauth_token!: string | null;
  
    @ManyToOne(() => UserEntity, (user) => user.accounts, {
      createForeignKeyConstraints: true,
    })
    user!: UserEntity;
  }
  