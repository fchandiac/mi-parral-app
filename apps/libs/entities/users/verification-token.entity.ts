import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ValueTransformer,
  } from "typeorm";
  
  const transformer: Record<"date", ValueTransformer> = {
    date: {
      from: (date: string | null) => (date ? new Date(parseInt(date, 10)) : null),
      to: (date?: Date) => (date ? date.valueOf().toString() : null),
    },
  };
  
  @Entity({ name: "verification_tokens" })
  export class VerificationTokenEntity {
    @PrimaryGeneratedColumn("uuid")
    id!: string;
  
    @Column()
    token!: string;
  
    @Column()
    identifier!: string;
  
    @Column({ transformer: transformer.date })
    expires!: string;
  }
  