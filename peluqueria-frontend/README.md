# Peluquería Xtylo

Frontend de la web de Peluquería Xtylo, construido con React, Vite,
React Router, Material UI y Tailwind CSS.

## Requisitos

- Node.js 18 o superior
- npm

## Puesta en marcha

```bash
npm install
npm run dev
```

Vite mostrará en la terminal la URL local de desarrollo.

## Scripts

| Comando           | Uso                                      |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Inicia el servidor de desarrollo         |
| `npm run build`   | Genera la compilación de producción      |
| `npm run preview` | Sirve localmente la compilación generada |
| `npm run lint`    | Comprueba la calidad estática del código |
| `npm test`        | Ejecuta las pruebas con Vitest           |

## Estructura principal

```text
src/
  components/       Componentes compartidos y navegación
  data/             Contenido reutilizable de servicios y galerías
  pages/            Vistas asociadas a las rutas
  styles/           Estilos globales
  App.jsx           Router y carga perezosa de páginas
```

## Rutas

- `/` Inicio
- `/servicios/peluqueria` Peluquería
- `/servicios/novias` Novias
- `/servicios/unas` Uñas
- `/contacto` Contacto
- `/politica-privacidad` Política de privacidad

“Servicios” es un menú desplegable de navegación; no tiene una página propia.

## Notas de mantenimiento

- Las galerías y los servicios se mantienen en `src/data/serviceContent.js`.
- Las páginas cargan de forma perezosa desde `src/App.jsx`.
- Las imágenes inferiores usan carga diferida para reducir el trabajo inicial.
- `ErrorBoundary` muestra una salida recuperable si una vista falla durante el renderizado.
