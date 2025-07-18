import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap,  MapPin } from "lucide-react";
import { Careers } from "@/lib/careersTypes";

interface UniversityCardProps {
    carreras: Careers;
}

export function UniversityCard({carreras} : UniversityCardProps){
    const {carrera, puntaje, universidad} = carreras

    return(
        <div className="relative group">
      {/* Gradient border wrapper */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300 blur-sm group-hover:blur-none"></div>

      {/* Main card */}
      <Card className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-0 hover:bg-gray-900/50 transition-all duration-300">
        <CardContent className="p-6">
          {/* Header with ranking badge (mantener si quieres agregar ranking de forma externa) */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-lg">
                <GraduationCap className="w-5 h-5 text-orange-400" />
              </div>
              {/* Si tuvieras un ranking en tu DB o lo pasaras como prop adicional a la tarjeta, lo pondrías aquí */}
              {/* {ranking && (
                <div className="flex items-center gap-1 px-2 py-1 bg-yellow-500/20 rounded-full">
                  <Star className="w-3 h-3 text-yellow-400" />
                  <span className="text-xs font-medium text-yellow-400">#{ranking}</span>
                </div>
              )} */}
            </div>

            {/* Score badge */}
            <div className={`px-3 py-1 rounded-full  border border-gray-700 bg-black`}>
              <span className={`text-sm font-bold text-white`}>{puntaje} pts</span>
            </div>
          </div>

          {/* University name */}
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-400 group-hover:to-orange-400 group-hover:bg-clip-text transition-all duration-300">
            {carrera}
          </h3>

          {/* Degree */}
          <p className="text-gray-300 font-medium mb-3 line-clamp-2 capitalize">{universidad}</p>

          {/* Location (hardcoded to Chile for now, as it's not in your current data) */}
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <MapPin className="w-4 h-4" />
            {/* Si tuvieras una columna 'ubicacion' en tu DB, la usarías aquí: */}
            <span>Chile</span> {/* O {carrera.ubicacion} si la añades a tu interfaz y DB */}
          </div>

          {/* Bottom gradient line */}
          <div className="mt-4 h-0.5 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
        </CardContent>
      </Card>
    </div>
    )
}