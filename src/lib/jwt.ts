import { SignJWT, jwtVerify } from "jose"  

const secret = new TextEncoder().encode(process.env.JWT_SECRET!)

export const singToken = async (user_id: string, email: string) => {
    const jwt = await new SignJWT({ user_id, email }).setProtectedHeader({ alg: "HS256" }).setExpirationTime("7d").sign(secret)

    return jwt
}

export const verifyToken = async (token: string) => {
    const verify = await jwtVerify(token, secret)

    return verify.payload
}