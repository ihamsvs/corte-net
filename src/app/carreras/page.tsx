import { UniversityCard } from "../components/UniversityCard";
import { supabase } from "@/lib/supabase";
import { Careers } from "@/lib/careersTypes";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { FilterFormClient } from "../components/FilterFormClient"; // Importa el nuevo componente de filtro

// Definicion de cuantas carreras por página
const ITEMS_PER_PAGE = 12;

interface CarrerasPageProps {
  searchParams?: {
    page?: string;
    nombre?: string;
    puntaje?: string;
    universidad?: string;
  };
}

export default async function CarrerasPage({ searchParams }: CarrerasPageProps) {
  const currentPage = Number(searchParams?.page) || 1;
  const filterNombre = searchParams?.nombre || '';
  const filterPuntaje = searchParams?.puntaje || '';
  const filterUniversidad = searchParams?.universidad || '';

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE - 1;

  let query = supabase.from('carreras').select('*', { count: 'exact' });

  // Aplicar filtros condicionalmente
  if (filterNombre) {
    query = query.ilike('nombre', `%${filterNombre}%`);
  }
  if (filterPuntaje) {
    const puntajeNum = parseInt(filterPuntaje);
    if (!isNaN(puntajeNum)) {
      query = query.eq('puntaje', puntajeNum);
    }
  }
  if (filterUniversidad) {
    query = query.ilike('universidad', `%${filterUniversidad}%`);
  }

  const { data: carreras, error, count } = await query
    .order('puntaje', { ascending: false })
    .range(startIndex, endIndex);

  if (error) {
    console.error("Error fetching careers:", error);
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <h1 className="text-4xl font-extrabold mb-8 text-gray-50">Catálogo de Carreras</h1>
        <div className="text-red-500">
          Error al cargar la lista de carreras. Por favor, inténtalo de nuevo más tarde.
        </div>
      </main>
    );
  }

  const typedCarreras: Careers[] = carreras || [];
  const totalItems = count || 0;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  return (
    <main className="flex min-h-screen flex-col items-center p-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <h1 className="text-4xl font-extrabold mb-12 text-white text-center">
        Descubre tu Futuro Universitario
      </h1>

      {/* Renderizar el componente de filtro, pasándole los valores actuales */}
      <FilterFormClient
        initialCarrera={filterNombre}
        initialPuntaje={filterPuntaje}
        initialUniversidad={filterUniversidad}
      />

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {typedCarreras.length > 0 ? (
          typedCarreras.map((carrera) => (
            <UniversityCard key={carrera.id} carreras={carrera} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-600 text-lg">
            No hay carreras universitarias disponibles que coincidan con los filtros.
          </p>
        )}
      </section>

      {/* Controles de Paginación */}
      <div className="flex justify-center items-center gap-4 mt-12 mb-8 w-full max-w-6xl">
        {/* Botón Anterior */}
        <Link
          href={{
            pathname: '/carreras',
            query: {
              page: Math.max(1, currentPage - 1),
              nombre: filterNombre,
              puntaje: filterPuntaje,
              universidad: filterUniversidad,
            },
          }}
          aria-disabled={currentPage <= 1}
          tabIndex={currentPage <= 1 ? -1 : undefined}
          className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-200 ${
            currentPage <= 1
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Anterior
        </Link>

        {/* Indicador de página actual */}
        <span className="text-lg font-semibold text-white">
          Página {currentPage} de {totalPages}
        </span>

        {/* Botón Siguiente */}
        <Link
          href={{
            pathname: '/carreras',
            query: {
              page: currentPage + 1,
              nombre: filterNombre,
              puntaje: filterPuntaje,
              universidad: filterUniversidad,
            },
          }}
          aria-disabled={currentPage >= totalPages}
          tabIndex={currentPage >= totalPages ? -1 : undefined}
          className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-200 ${
            currentPage >= totalPages
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
        >
          Siguiente
          <ChevronRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </main>
  );
}