import { verifyToken } from "./lib/jwt"
import { NextRequest, NextResponse } from "next/server"


export async function middleware(req: NextRequest) {
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

export const config = {
    matcher: ["/((?!login|register|_next/static|_next/image|favicon.ico|api).*)"]
}