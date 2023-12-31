import { jwtVerify } from "jose";

type tokenType = {
  userId: string;
  iat: number;
  exp: number;
};

export const getJwtSecretKey = () => {
  const secret = process.env.ACCESS_TOKEN_SECRET;
  if (!secret || secret.length === 0) {
    throw new Error("token secret env variable is not ser");
  }
  return secret;
};

export const verifyAuth = async (token: string) => {
  try {
    const verified = await jwtVerify(
      token,
      new TextEncoder().encode(getJwtSecretKey()),
      { algorithms: ["HS256"] }
    );

    return verified.payload as tokenType;
  } catch (error: any) {
    throw new Error(error);
  }
};
