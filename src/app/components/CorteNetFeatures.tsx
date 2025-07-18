import { Clock, Search, ShieldCheck } from "lucide-react";

export function CorteNetFeatures() {
    return (
      <div className="flex flex-col items-center py-16 px-4"> {/* Añadido padding vertical y horizontal */}
        {/* Título de la Sección de Características */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          ¿Por qué elegir <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">CorteNet</span>?
        </h2>
  
        {/* Contenedor de las Características (flex wrap para responsive) */}
        <div className="flex flex-wrap justify-center gap-12 max-w-6xl mx-auto">
  
          {/* Característica 1: Puntajes Actualizados */}
          <div className="flex flex-col items-center text-center max-w-xs">
            <div className="relative w-24 h-24 mb-4 flex items-center justify-center"> {/* Tamaño más discreto para el icono */}
              <div className="absolute inset-0 rounded-full border-4 border-red-500 opacity-20"></div> {/* Borde decorativo suave */}
              <Clock className="text-red-500" size={64} /> {/* Icono de Reloj o Recargar */}
            </div>
            <h3 className="text-2xl font-semibold mb-2">Siempre al Día</h3>
            <p className="text-gray-400">
              Accede a los puntajes de corte **más recientes y verificados** de todas las universidades. ¡Información fresca para tus decisiones!
            </p>
          </div>
  
          {/* Característica 2: Búsqueda Fácil e Intuitiva */}
          <div className="flex flex-col items-center text-center max-w-xs">
            <div className="relative w-24 h-24 mb-4 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-4 border-orange-500 opacity-20"></div>
              <Search className="text-orange-500" size={64} /> {/* Icono de Lupa o Brújula */}
            </div>
            <h3 className="text-2xl font-semibold mb-2">Búsqueda Sencilla</h3>
            <p className="text-gray-400">
              Encuentra rápidamente los puntajes por universidad, carrera o región. ¡Tu información, a solo unos clics!
            </p>
          </div>
  
          {/* Característica 3: Datos Confiables y Completos */}
          <div className="flex flex-col items-center text-center max-w-xs">
            <div className="relative w-24 h-24 mb-4 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-4 border-red-500 opacity-20"></div>
              <ShieldCheck className="text-red-500" size={64} /> {/* Icono de Escudo con Check o Libro abierto */}
            </div>
            <h3 className="text-2xl font-semibold mb-2">Información Confiable</h3>
            <p className="text-gray-400">
              Nuestros datos son recopilados con precisión para darte la seguridad que necesitas al tomar decisiones.
            </p>
          </div>
  
        </div>
      </div>
    );
  }