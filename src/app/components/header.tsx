import { Button } from "@/components/ui/button"
import { Download, StarIcon } from "lucide-react"
import Link from "next/link"
export function Header(){
    return(
        <header className="flex items-center justify-between px-6 py-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                    <span className="text-xl font-semibold">
                        corteNet
                    </span>
                </div>
            </div>
            <nav className="hidden md:flex items-center gap-8">
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                    Inicio
                </Link>
                <Link href="/carreras" className="text-gray-300 hover:text-white transition-colors">
                    Explora Cortes
                </Link>
                <Link href="/informacion" className="text-gray-300 hover:text-white transition-colors">
                    Guías y Consejos 
                </Link>
            </nav>
            <Button className="bg-red-500 hover:bg-red-600 text-white">
                <StarIcon className="w-4 h-4 mr-2"/>
                    
                
            </Button>

        </header>
    )
}