import Link from "next/link"
import Image from "next/image"



const Navbar = () => {
    return (
        <header className="fixed top-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/5 w-full py-4 flex items-center justify-center">
            <div className="flex items-center justify-center">
                <Link href="/"><Image className="object-contain cursor-pointer" src="/images/logo Vesper.png" alt="Vesper - Finanças" width={70} height={70} /></Link>
            </div>

            <div className="flex items-center gap-4">
                <Link href="/login" className="text-white font-semibold">Login</Link>
                <Link href="/register" className="text-white font-semibold">Cadastro</Link>
            </div>

        </header>
    )
}

export default Navbar