import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
export function HeroSection(){
    return(
        <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-4"> 
                Tu Acceso a la Universidad
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent mb-8">
                Encuentra los Puntajes de Corte Actualizados
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
            En CorteNet, te damos la información clave para tu futuro universitario.
            Descubre los puntajes de corte de todas las carreras y universidades, siempre
            actualizados y fáciles de encontrar. Tu camino hacia la U empieza aquí
            </p>
        </div>
    )
}