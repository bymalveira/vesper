import { verifyToken } from "./lib/jwt"
import { NextRequest, NextResponse } from "next/server"

export async function middleware(req: NextRequest) {
    // 1. Pega o caminho atual da rota
    const { pathname } = req.nextUrl

    // 2. Se for a rota raiz, libera o acesso sem checar token
    if (pathname === "/") {
        return NextResponse.next()
    }

    const getToken = req.cookies.get("vesper_token")

    if (!getToken) {
        return NextResponse.redirect(new URL("/login", req.url))
    } else {
        try {
            await verifyToken(getToken.value)
            return NextResponse.next()
        } catch {
            return NextResponse.redirect(new URL("/login", req.url))
        }
    }
}

// Mantém o matcher como está, pois o controle da raiz já é feito na função acima
export const config = {
    matcher: ["/((?!login|register|_next/static|_next/image|favicon.ico|api).*)"]
}