"use server";
import bcrypt from "bcryptjs";
import { prisma } from "../../utils/prisma";
export const registerUser = async (
  username: string,
  email: string,
  password: string,
) => {
  try {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return { error: "Email ja cadastrado!" };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    return { success: true, userId: user.user_id };
  } catch (error: unknown) {
    console.log(error);
    return { error: "Erro interno do servidor" };
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    const getUser = await prisma.user.findUnique({
      where: { email },
    });

    if (!getUser) {
      return { error: "Usuario não encontrado" };
    }

    const hashCompare = await bcrypt.compare(password, getUser.password);

    if (!hashCompare) {
      return { error: "Usuario ou senha incorretos!" };
    }

    return { success: true, user_id: getUser.user_id };
    
  } catch (error: unknown) {
    console.log(error);
    return { error: "Erro interno no servidor" };
  }
};
