import { NextRequest, NextResponse } from "next/server";
import { registerUser } from "@/actions/auth.actions";

export async function POST(req: NextRequest) {

    const { username, email, password } = await req.json()

    const result = await registerUser(username, email, password)

    return NextResponse.json(result)


};