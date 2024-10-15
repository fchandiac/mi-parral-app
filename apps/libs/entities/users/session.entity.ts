import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    ValueTransformer,
  } from "typeorm";
  import { UserEntity } from "./user.entity";
  
  const transformer: Record<"date", ValueTransformer> = {
    date: {
      from: (date: string | null) => (date ? new Date(parseInt(date, 10)) : null),
      to: (date?: Date) => (date ? date.valueOf().toString() : null),
    },
  };
  
  @Entity({ name: "sessions" })
  export class SessionEntity {
    @PrimaryGeneratedColumn("uuid")
    id!: string;
  
    @Column({ unique: true })
    sessionToken!: string;
  
    @Column({ type: "uuid" })
    userId!: string;
  
    @Column({ transformer: transformer.date })
    expires!: string;
  
    @ManyToOne(() => UserEntity, (user) => user.sessions)
    user!: UserEntity;
  }
  