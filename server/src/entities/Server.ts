import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Group } from "./Group";
import { User } from "./User";

@ObjectType()
@Entity()
export class Server extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  logo: string;

  @Field(() => String, { nullable: true })
  @Column()
  description: string;

  // Relations
  @Field(() => User)
  @ManyToOne(() => User, (user) => user.servers)
  owner: User;

  @Field(() => [Group])
  @OneToMany(() => Group, (group) => group.server)
  groups: Group[];

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;
}
