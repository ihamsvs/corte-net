import { UniversityCard } from "../components/UniversityCard";
import { supabase } from "@/lib/supabase";
import { Careers } from "@/lib/careersTypes";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { FilterFormClient } from "../components/FilterFormClient";

// Definicion de cuantas carreras por página
const ITEMS_PER_PAGE = 12;

// Definir el tipo para los parámetros de búsqueda
type SearchParams = {
  page?: string;
  nombre?: string;
  puntaje?: string;
  universidad?: string;
  [key: string]: string | string[] | undefined;
};

// Función para obtener un parámetro de búsqueda
function getParam(value: string | string[] | undefined): string {
  return Array.isArray(value) ? value[0] : value || '';
}

// Función para obtener las carreras
async function fetchCarreras({
  startIndex,
  endIndex,
  filterNombre,
  filterPuntaje,
  filterUniversidad,
}: {
  startIndex: number;
  endIndex: number;
  filterNombre: string;
  filterPuntaje: string;
  filterUniversidad: string;
}) {
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

  return await query
    .order('puntaje', { ascending: false })
    .range(startIndex, endIndex);
}

export default async function CarrerasPage({
  searchParams,
}: {
  searchParams?: SearchParams;
}) {
  const params = await searchParams;
  // Parsear los parámetros de búsqueda
  const currentPage = Number(getParam(params?.page)) || 1;
  const filterNombre = getParam(params?.nombre);
  const filterPuntaje = getParam(params?.puntaje);
  const filterUniversidad = getParam(params?.universidad);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE - 1;

  // Obtener los datos usando la función auxiliar
  const { data: carreras, error, count } = await fetchCarreras({
    startIndex,
    endIndex,
    filterNombre,
    filterPuntaje,
    filterUniversidad,
  });

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

  // Función para construir la URL de paginación
  const buildPageUrl = (page: number) => {
    const params = new URLSearchParams();
    
    if (filterNombre) params.set('nombre', filterNombre);
    if (filterPuntaje) params.set('puntaje', filterPuntaje);
    if (filterUniversidad) params.set('universidad', filterUniversidad);
    params.set('page', page.toString());
    
    return `/carreras?${params.toString()}`;
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <h1 className="text-4xl font-extrabold mb-12 text-white text-center">
        Descubre tu Futuro Universitario
      </h1>

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
          <p className="col-span-full text-center text-gray-400 text-lg">
            No hay carreras universitarias disponibles que coincidan con los filtros.
          </p>
        )}
      </section>

      {/* Controles de Paginación */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-12 mb-8 w-full max-w-6xl">
          {/* Botón Anterior */}
          <Link
            href={buildPageUrl(Math.max(1, currentPage - 1))}
            className={`flex items-center gap-1 px-4 py-2 rounded-lg ${
              currentPage === 1
                ? 'text-gray-500 cursor-not-allowed'
                : 'text-blue-400 hover:bg-blue-900/30'
            }`}
            aria-disabled={currentPage === 1}
          >
            <ChevronLeft className="w-5 h-5" />
            Anterior
          </Link>

          {/* Números de página */}
          <div className="flex items-center gap-2">
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              // Mostrar máximo 5 páginas en la navegación
              let pageNum;
              if (totalPages <= 5) {
                pageNum = i + 1;
              } else if (currentPage <= 3) {
                pageNum = i + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + i;
              } else {
                pageNum = currentPage - 2 + i;
              }

              return (
                <Link
                  key={pageNum}
                  href={buildPageUrl(pageNum)}
                  className={`w-10 h-10 flex items-center justify-center rounded-lg ${
                    currentPage === pageNum
                      ? 'bg-blue-600 text-white'
                      : 'text-blue-400 hover:bg-blue-900/30'
                  }`}
                >
                  {pageNum}
                </Link>
              );
            })}
          </div>

          {/* Botón Siguiente */}
          <Link
            href={buildPageUrl(Math.min(totalPages, currentPage + 1))}
            className={`flex items-center gap-1 px-4 py-2 rounded-lg ${
              currentPage === totalPages
                ? 'text-gray-500 cursor-not-allowed'
                : 'text-blue-400 hover:bg-blue-900/30'
            }`}
            aria-disabled={currentPage === totalPages}
          >
            Siguiente
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      )}
    </main>
  );
}