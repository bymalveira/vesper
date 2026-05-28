"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../../../../components/ui/button";
import { useRouter } from "next/navigation";

const Register = () => {

    const router = useRouter()

    const [username, setUsername] = useState("")

    const [email, setEmail] = useState("")

    const [password, setPassword] = useState("")

    const [confirmPassword, setConfirmPassword] = useState("")

    const handleSubmit = async () => {
        if(password !== confirmPassword){
            alert("As senhas não coincidem")
            return
        }

        const response = await fetch("/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, email, password })
        })

        const data = await response.json()

        if (data.error){
            alert("Error")
        } else {
            router.push("/dashboard")
        }
    }

  return (
    <main className="relative w-full min-h-screen bg-black bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-zinc-900 to-black overflow-hidden flex flex-col">
      
      {/* Efeito de iluminação sutil de fundo (Glow Dourado) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-125 h-125 bg-amber-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <header className="fixed top-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/5 w-full py-4 flex items-center justify-center">
        <Link href="/">
          <Image
            className="object-contain cursor-pointer drop-shadow-md"
            src="/images/logo Vesper.png"
            alt="Vesper - Finanças"
            width={60}
            height={60}
          />
        </Link>
      </header>

      <section className="relative z-10 w-full grow flex items-center justify-center px-4 pt-24 pb-12">
        
        <div className="w-full max-w-md p-8 sm:p-10 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl flex flex-col items-center">
          
          <div className="w-full mb-6 text-center border-b border-white/10 pb-4">
            <h1 className="text-white text-2xl tracking-widest font-light uppercase">
              Crie sua <span className="text-amber-400 font-medium">Conta</span>
            </h1>
            <p className="text-zinc-400 text-sm mt-2">Comece a dominar suas finanças hoje</p>
          </div>

          <form className="w-full flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <input 
                type="text" 
                placeholder="Nome completo" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all" 
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <input 
                type="email" 
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all" 
              />
            </div>
            
            <div className="flex flex-col gap-1.5">
              <input 
                type="password" 
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all" 
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <input 
                type="password" 
                placeholder="Confirme sua senha" 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all" 
              />
            </div>

            <div className="flex items-start text-sm px-1 mt-1">
              <label className="flex items-start gap-2.5 text-zinc-400 cursor-pointer hover:text-zinc-300 transition-colors leading-tight">
                <input type="checkbox" className="accent-amber-500 w-4 h-4 rounded border-white/10 bg-white/5 mt-0.5" />
                <span>
                  Li e aceito os <Link href="/termos" className="text-amber-400 hover:underline">Termos de Uso</Link> e a <Link href="/privacidade" className="text-amber-400 hover:underline">Política de Privacidade</Link>.
                </span>
              </label>
            </div>

            <Button type="button" onClick={handleSubmit} className="w-full mt-4 py-6 bg-amber-500 hover:bg-amber-400 text-black font-bold uppercase tracking-wider rounded-xl transition-all shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:shadow-[0_0_25px_rgba(245,158,11,0.4)]">
              Criar Conta
            </Button>
          </form>

          <p className="mt-8 text-zinc-400 text-sm">
            Já tem uma conta? <Link href="/login" className="text-white hover:text-amber-400 font-medium transition-colors">Entrar</Link>
          </p>
          
        </div>
      </section>
    </main>
  );
}

export default Register;