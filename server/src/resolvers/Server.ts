import { Server } from "../entities/Server";
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

@InputType()
export class CreateServerInput {
  @Field()
  name: string;

  @Field(() => String, { nullable: true })
  description!: string;

  @Field(() => String, { nullable: true })
  logo!: string;
}

@Resolver()
export class ServerResolver {
  @UseMiddleware(isAuthenticated)
  @Mutation(() => Server, { nullable: true })
  async createServer(
    @Arg("details") { name, description, logo }: CreateServerInput,
    @Ctx() { user }: Context
  ): Promise<Server | undefined> {
    return Server.create({
      name,
      description: description || "",
      logo: logo || "https://via.placeholder.com/150",
      owner: user,
    }).save();
  }

  @UseMiddleware(isAuthenticated)
  @Query(() => [Server], { nullable: true })
  async listServers(@Ctx() { user }: Context): Promise<Server[] | undefined> {
    return Server.find({
      where: { owner: { id: user?.id } },
      relations: ["owner"],
    });
  }
}
