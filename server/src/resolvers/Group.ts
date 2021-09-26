import { Group } from "../entities/Group";
import {
  Arg,
  Ctx,
  Field,
  InputType,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { Context } from "../types";
import { Server } from "../entities/Server";

@InputType()
export class CreateGroupInput {
  @Field()
  name: string;

  @Field(() => String, { nullable: true })
  description: string;

  @Field()
  serverID: number;
}

@Resolver(Group)
export class GroupResolver {
  @UseMiddleware(isAuthenticated)
  @Mutation(() => Group, { nullable: true })
  async createGroup(
    @Arg("details") { name, description, serverID }: CreateGroupInput,
    @Ctx() { user }: Context
  ): Promise<Group | undefined> {
    const server = await Server.findOne(serverID);

    if (!server) {
      return;
    }

    return Group.create({
      name,
      description: description || "",
      owner: user,
      server,
    }).save();
  }

  @UseMiddleware(isAuthenticated)
  @Query(() => [Group], { nullable: true })
  async listGroups(@Ctx() { user }: Context) {
    return Group.find({
      where: { owner: { id: user?.id } },
      relations: ["owner", "server"],
    });
  }
}
