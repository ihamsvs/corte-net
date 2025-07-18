# CorteNet - Plataforma de Consulta de Carreras Universitarias

![CorteNet Logo](https://via.placeholder.com/150x50.png?text=CorteNet)  
*Tu guía para encontrar la carrera universitaria perfecta*

## Acerca de

CorteNet es una plataforma web diseñada para ayudar a los estudiantes a encontrar información detallada sobre carreras universitarias, incluyendo puntajes de corte, universidades y detalles específicos de cada programa académico.

## Características

- Búsqueda avanzada de carreras por nombre, universidad o puntaje
- Visualización detallada de puntajes de corte
- Diseño completamente responsive para todos los dispositivos
- Interfaz de usuario intuitiva y moderna
- Filtros avanzados para encontrar la carrera perfecta

## Tecnologías Utilizadas

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **Backend**: Supabase
- **UI Components**: Shadcn/ui
- **Iconos**: Lucide Icons
- **Despliegue**: Vercel

## Cómo Empezar

### Requisitos Previos

- Node.js 18 o superior
- npm o yarn
- Cuenta de Supabase (para la base de datos)

### Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tuusuario/corte-net.git
   cd corte-net
   ```

2. Instala las dependencias:
   ```bash
   npm install
   # o
   yarn install
   ```

3. Configura las variables de entorno:
   Crea un archivo `.env.local` en la raíz del proyecto con las siguientes variables:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=tu_url_de_supabase
   NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_clave_anonima_de_supabase
   ```

4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   # o
   yarn dev
   ```

5. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Estructura del Proyecto

```
src/
├── app/                    # Rutas de la aplicación
│   ├── carreras/          # Página de búsqueda de carreras
│   ├── informacion/       # Página de información y guías
│   └── components/        # Componentes reutilizables
├── lib/                   # Utilidades y configuraciones
└── styles/                # Estilos globales
```

## Contribuir

¡Las contribuciones son bienvenidas! Por favor, lee nuestras [pautas de contribución](CONTRIBUTING.md) antes de enviar un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## Contacto

¿Preguntas o sugerencias? ¡Nos encantaría saber de ti!
- Email: contacto@cortenet.com
- Sitio web: [https://cortenet.com](https://cortenet.com)

---

<div align="center">
  Hecho con ❤️ por el equipo de CorteNet
</div>
