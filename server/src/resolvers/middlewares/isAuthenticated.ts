import { Context, UserContext } from "../../types";
import { MiddlewareFn } from "type-graphql";
import jwt from "jsonwebtoken";

export const isAuthenticated: MiddlewareFn<Context> = ({ context }, next) => {
  const { req } = context;
  let token: string =
    req.body.token || req.query.token || req.headers.authorization;

  if (!token) {
    throw new Error("Token not found. Please provide a token");
  }

  try {
    if (token.includes("Bearer")) {
      token = req.headers.authorization?.split("Bearer ")[1] || "";
    }
    const decoded = jwt.verify(token, process.env.TOKEN_KEY as string);
    req.user = decoded as UserContext;
    return next();
  } catch (error) {
    throw new Error("Unauthorized access, please login.");
  }
};
