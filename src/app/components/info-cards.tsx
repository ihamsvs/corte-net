import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Search, Sparkles, TrendingUp, University } from "lucide-react";

export function InfoCards(){
    return(
      <div className="space-y-8 px-4 py-8">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Explora la{" "}
          <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            Información Clave
          </span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Descubre las tendencias y accede rápidamente a la información que necesitas
        </p>
      </div>

      {/* Stats Card */}
      <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-red-500/50 transition-all duration-300 group">
        <CardContent className="p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-red-500/20 rounded-xl group-hover:bg-red-500/30 transition-colors">
              <TrendingUp className="text-red-400 w-6 h-6" />
            </div>
            <h3 className="text-2xl font-semibold text-white">Tendencias y Datos Rápidos</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group/stat">
              <div className="relative">
                <div className="text-4xl font-bold text-red-400 mb-2 group-hover/stat:scale-110 transition-transform">
                  10+
                </div>
                <div className="absolute -inset-2 bg-red-500/10 rounded-lg opacity-0 transition-opacity"></div>
              </div>
              <div className="text-gray-300 font-medium">Universidades</div>
              <div className="text-gray-500 text-sm mt-1">Instituciones verificadas</div>
            </div>

            <div className="text-center group/stat">
              <div className="relative">
                <div className="text-4xl font-bold text-orange-400 mb-2 group-hover/stat:scale-110 transition-transform">
                  40+
                </div>
                <div className="absolute -inset-2 bg-orange-500/10 rounded-lg opacity-0  transition-opacity"></div>
              </div>
              <div className="text-gray-300 font-medium">Carreras</div>
              <div className="text-gray-500 text-sm mt-1">Programas disponibles</div>
            </div>

            <div className="text-center group/stat">
              <div className="relative">
                <div className="text-4xl font-bold text-yellow-400 mb-2 group-hover/stat:scale-110 transition-transform">
                  300+
                </div>
                <div className="absolute -inset-2 bg-yellow-500/10 rounded-lg opacity-0  transition-opacity"></div>
              </div>
              <div className="text-gray-300 font-medium">Puntajes Buscados</div>
              <div className="text-gray-500 text-sm mt-1">Consultas realizadas</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Access Card */}
      <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-orange-500/50 transition-all duration-300 group">
        <CardContent className="p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-orange-500/20 rounded-xl group-hover:bg-orange-500/30 transition-colors">
              <Search className="text-orange-400 w-6 h-6" />
            </div>
            <h3 className="text-2xl font-semibold text-white">Tu Búsqueda Rápida</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="#"
              className="flex items-center gap-4 p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-red-500/50 hover:bg-gray-800/80 transition-all duration-300 group/link"
            >
              <div className="p-3 bg-red-500/20 rounded-lg group-hover/link:bg-red-500/30 transition-colors">
                <GraduationCap className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <div className="font-semibold text-white mb-1">Buscar por Universidad</div>
                <div className="text-gray-400 text-sm">Encuentra información específica</div>
              </div>
            </a>

            <a
              href="#"
              className="flex items-center gap-4 p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-orange-500/50 hover:bg-gray-800/80 transition-all duration-300 group/link"
            >
              <div className="p-3 bg-orange-500/20 rounded-lg group-hover/link:bg-orange-500/30 transition-colors">
                <Sparkles className="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <div className="font-semibold text-white mb-1">Explorar por Carrera</div>
                <div className="text-gray-400 text-sm">Descubre opciones académicas</div>
              </div>
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
    )
}