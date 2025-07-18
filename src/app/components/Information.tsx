'use client'
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
interface QAItem {
  question: string;
  answer: string;
  items?: string;
  items2?: string;
  items3?: string;
}

const qaData: QAItem[] = [
  {
    question: "¿Qué es el Puntaje de Corte Universitario?",
    answer:
      "El Puntaje de corte es el puntaje mínimo que necesitó el último estudiante en ser aceptado en una carrera y universidad específica el año anterior. Es como la nota de entrada que marca la línea para esa carrera. Estos puntajes cambian cada año, porque dependen de: ",
      items: "1.- La cantidad de gente que postula a la carrera (la demanda)",
      items2: "2.- Los cupos disponibles en esa carrera y universidad",
      items3: "3.- El rendimiento general de los postulantes de ese año"
  },
  {
    question: "¿Cada cuánto se actualizan los Puntajes de Corte",
    answer:
      "Los puntajes de corte se actualizan cada año después de que termina el proceso de admisión universitaria. Esto ocurre, generalmente, entre enero y marzo de cada año. En CorteNet, nos aseguramos de tener esta información al día lo antes posible, apenas las universidades y el sistema de admisión nacional publican los resultados oficiales",
  },
  {
    question: "¿La información que veo en CorteNet es oficial?",
    answer:
      "Sí, absolutamente. Toda la información que encuentras en CorteNet proviene directamente de fuentes oficiales. Esto incluye datos de las universidades y del sistema de admisión centralizado. Revisamos y actualizamos constantemente nuestros datos para que siempre sean precisos y confiables. Queremos que tengas la seguridad de que estás viendo información real y validada.",
  },
  {
    question: "Mi puntaje está cerca del corte, ¿qué debería hacer?",
    answer:
      "si tu puntaje está cerca del puntaje de corte de unac arrera que te interesa, ¡no te desanimes! Aquí tiene algunas ideas:",
      items: "1.- Postula a esa carrera como tu primera opción, si es la que más quieres",
      items2: "2.- Pero, ¡también incluye otras opciones! Elige carreras o universidades con puntajes de corte un poco más bajos como respaldo, por si acaso.",
      items3: "3.- Recuerda que los puntajes de corte cambian cada año, así que un puntaje cercano hoy podría ser suficiente mañana."
  },
  {
    question: "¿Usar CorteNet tiene algún costo?",
    answer:
      "No, CorteNet es completamente gratuito. Creemos firmemente que todos los estudiantes deben tener acceso a información educativa de calidad, sin que el dinero sea una barrera. Queremos apoyarte en tus oportunidades de crecimiento académico.",
  }
];

export default function Information(){
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return(
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container px-4 md:px-6 mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre puntajes de corte y admisión universitaria
          </p>
        </div>

        <div className="space-y-4">
          {qaData.map((item, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-0">
                <Button
                  variant="ghost"
                  className="w-full p-6 text-left justify-between hover:bg-slate-700/50 rounded-lg"
                  onClick={() => toggleItem(index)}
                >
                  <span className="text-white font-medium text-base md:text-lg pr-4">{item.question}</span>
                  {openItems.includes(index) ? (
                    <ChevronUp className="h-5 w-5 text-orange-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-orange-400 flex-shrink-0" />
                  )}
                </Button>

                {openItems.includes(index) && (
                  <div className="px-6 pb-6">
                    <div className="pt-4 border-t border-slate-600">
                      <p className="text-slate-300 leading-relaxed">{item.answer}</p>
                      <p className="text-slate-300 leading-relaxed">{item.items}</p>
                      <p className="text-slate-300 leading-relaxed">{item.items2}</p>
                      <p className="text-slate-300 leading-relaxed">{item.items3}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-400 mb-4">¿No encuentras la respuesta que buscas?</p>
          <Button className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-medium px-8 py-3">
            Contáctanos
          </Button>
        </div>
      </div>
    </section>
  )
}