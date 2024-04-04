import jwt, { JwtPayload } from "jsonwebtoken";
import * as jose from "jose";

const secretKey = process.env.JWT_SECRET as string;

export const createToken = (payload: JwtPayload) =>
  jwt.sign(payload, secretKey);

export const readPayload = (token: string) => jwt.verify(token, secretKey);

export const readPayloadJose = async <T>(token: string) => {
  const secret = new TextEncoder().encode(secretKey);
  const result = await jose.jwtVerify<T>(token, secret);

  return result.payload;
};
