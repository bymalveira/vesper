import { singToken } from "@/lib/jwt";
import { NextRequest, NextResponse } from "next/server";
import { loginUser } from "@/actions/auth.actions";


export async function POST(req: NextRequest) {

    const { email, password} = await req.json()

    const result = await loginUser(email, password)

    if(result.error) {
        return NextResponse.json(result.error)
    }

    if (!result.user_id) {
        return NextResponse.json({ error: "Falha em achar o usuario"}) 
    }

    const cookie = await singToken(result.user_id ,email)

    if (!cookie) {
        return NextResponse.json({  error: "Erro ao gerar token"  })
    }

    const response = NextResponse.json({ success: true })

    response.cookies.set("vesper_token", cookie, { httpOnly: true, sameSite: "lax", path: "/" } )

    return response

}
