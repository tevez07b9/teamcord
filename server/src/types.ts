import { Request, Response } from "express";
import { Redis } from "ioredis";
import { User } from "./entities/User";

export type Context = {
  req: Request;
  res: Response;
  redis?: Redis;
  user?: User;
};
