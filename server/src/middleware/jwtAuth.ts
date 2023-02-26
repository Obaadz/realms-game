import { expressjwt, Request as JwtAuthExpressRequest } from "express-jwt";

const SECRET = process.env.SECRET;

export const jwtAuthExpress = expressjwt({
  secret: SECRET,
  algorithms: ["HS256"],
});

export type { JwtAuthExpressRequest };
