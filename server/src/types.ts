import { Request, Response } from "express";
import { Redis } from "ioredis";
// import { JwtPayload } from "jsonwebtoken";

export type UserContext = {
  user_id: string | number;
  email: string;
};

export type Context = {
  req: Request & { user: UserContext };
  res: Response;
  redis?: Redis;
};
