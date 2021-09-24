import { Context } from "../../types";
import { MiddlewareFn } from "type-graphql";
import { User } from "../../entities/User";

export const isAuthenticated: MiddlewareFn<Context> = async (
  { context },
  next
) => {
  const { req } = context;

  if (!req?.session?.userID) {
    throw new Error("Unauthorized Access");
  }

  const user = await User.findOne(req.session.userID);

  if (!user) {
    throw new Error("User not found.");
  }

  context.user = user;
  return next();
};
