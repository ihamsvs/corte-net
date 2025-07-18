'use client'
import { useState } from "react"
import {useRouter, useSearchParams} from "next/navigation";

interface FilterFormProps {
    initialCarrera: string;
    initialPuntaje: string;
    initialUniversidad: string;
}

export const FilterFormClient : React.FC<FilterFormProps> = ({initialCarrera, initialPuntaje, initialUniversidad}) => {
    
    const [carreraInput, setCarreraInput] = useState<string>(initialCarrera);
    const [puntajeInput, setPuntajeInput] = useState<string>(initialPuntaje);
    const [universidadInput, setUniversidadInput] = useState<string>(initialUniversidad);

    const router = useRouter();
    const searchParams = useSearchParams();

    // Función que se ejecuta al enviar el formulario
    const handleFilterChange = (e: React.FormEvent) => {
        e.preventDefault();

        // Creamos el objeto URLSearchParams 
        const params = new URLSearchParams(searchParams.toString());

        // Actualizamos o eliminamos los parámetros de filtro
        if(carreraInput){
            params.set('nombre', carreraInput)
        } else {
            params.delete('nombre');
        }

        if(puntajeInput){
            params.set('puntaje', puntajeInput);
        } else {
            params.delete('puntaje');
        }

        if(universidadInput){
            params.set('universidad', universidadInput);
        } else {
            params.delete('universidad');
        }

        // Siempre resetear la página a 1 cuando se aplican nuevos filtros
        params.set('page', '1');

        router.push(`?${params.toString()}`)

    };

    return(
        <form onSubmit={handleFilterChange} className="flex flex-wrap gap-4 mb-8 w-full max-w-6xl justify-center">
      <input
        type="text"
        placeholder="Filtrar por nombre"
        value={carreraInput}
        onChange={(e) => setCarreraInput(e.target.value)}
        className="p-3 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
      />
      <input
        type="number"
        placeholder="Filtrar por puntaje"
        value={puntajeInput}
        onChange={(e) => setPuntajeInput(e.target.value)}
        className="p-3 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
      />
      <input
        type="text"
        placeholder="Filtrar por universidad"
        value={universidadInput}
        onChange={(e) => setUniversidadInput(e.target.value)}
        className="p-3 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
      >
        Aplicar Filtros
      </button>
    </form>
    )

}