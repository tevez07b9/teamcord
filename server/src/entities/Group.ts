import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Server } from "./Server";
import { User } from "./User";

@ObjectType()
@Entity()
export class Group extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field(() => String, { nullable: true })
  @Column()
  description: string;

  // Relations
  @Field(() => User)
  @ManyToOne(() => User, (user) => user.groups)
  owner: User;

  @Field(() => Server)
  @ManyToOne(() => Server, (server) => server.groups)
  server: Server;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;
}
