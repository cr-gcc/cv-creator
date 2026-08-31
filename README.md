<h1 align="center">
  <br/>
  📄 CV Creator
  <br/>
</h1>

<p align="center">
  <strong>Tu mini Canva para currículums personales — diseña, personaliza y descarga tu CV profesional en minutos.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Vue-3.5-42b883?style=for-the-badge&logo=vue.js&logoColor=white" alt="Vue 3" />
  <img src="https://img.shields.io/badge/TypeScript-6.0-3178c6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/TailwindCSS-4.3-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Vite-8.2-646cff?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Pinia-4.0-ffd859?style=for-the-badge&logo=pinia&logoColor=black" alt="Pinia" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/estado-en%20desarrollo-yellow?style=flat-square" />
  <img src="https://img.shields.io/badge/licencia-MIT-green?style=flat-square" />
</p>

---

## 🎯 El Problema que Resuelve

Crear un currículum atractivo y profesional es un proceso frustrante: herramientas como Word producen resultados genéricos, los servicios en línea de pago restringen la personalización, y los diseñadores cobran por algo que debería ser accesible para todos.

**CV Creator** es una aplicación web gratuita e intuitiva que permite a cualquier persona diseñar su CV con una vista previa **en tiempo real**, personalizando colores, tipografía y contenido — sin suscripciones, sin curva de aprendizaje y sin fricción.

---

## ✨ Características Principales

| Feature | Descripción |
|---|---|
| 🎨 **Paleta de colores** | +20 temas de color predefinidos (Rojo, Azul, Esmeralda, Violeta, etc.) aplicados en tiempo real |
| 🔤 **Selector de fuentes** | 6 tipografías modernas de Google Fonts (Nunito, Inter Tight, Manrope, DM Sans…) |
| 🌙 **Tema claro/oscuro** | Toggle de tema persistente gracias a `@vueuse/core` |
| 📋 **Editor de secciones** | Formulario estructurado para: datos personales, perfil profesional, experiencia laboral (full-time y freelance), formación académica, habilidades, certificados e información adicional |
| 📐 **Vista previa A4** | El CV se renderiza en tiempo real a tamaño de papel (794×1123px), listo para impresión o PDF |
| 📱 **Diseño responsive** | Sidebar adaptable: colapsado en mobile, minimizado en tablet, completo en desktop |
| 💾 **Estado persistente** | La configuración de estilos se mantiene entre sesiones con `pinia-plugin-persistedstate` |

---

## 🏗️ Arquitectura y Stack Técnico

### Frontend

```
Vue 3          →  Composition API + <script setup>
TypeScript     →  Tipado estático end-to-end
Vite 8         →  Dev server ultrarrápido con HMR
TailwindCSS 4  →  Utility-first CSS con safelist dinámica
Pinia          →  State management modular y reactivo
Vue Router 5   →  Navegación SPA con named routes
VueUse         →  Composables (breakpoints, dark mode, toggle)
```

### Patrones de Diseño

```
Atomic Design  →  atoms / molecules / organisms
Domain-Driven  →  src/domains/admin/ para vistas de negocio
Store Pattern  →  useStyleCvStore · useThemeStore · useToastStore
Composables    →  lógica reutilizable desacoplada de la UI
```

---

## 📁 Estructura del Proyecto

```
cv-creator/
├── src/
│   ├── components/
│   │   ├── atoms/          # Botones, inputs, títulos, párrafos, loaders
│   │   ├── molecules/      # Dropdowns, modales base, listas, links
│   │   └── organisms/      # Sidebar, ModalColors
│   ├── domains/
│   │   └── admin/
│   │       ├── Home.vue    # Vista principal con preview A4 del CV
│   │       └── Sections.vue # Editor de secciones del CV
│   ├── stores/
│   │   ├── useStyleCvStore.ts   # Color y fuente del CV (reactivo)
│   │   ├── useThemeStore.ts     # Dark/Light mode
│   │   └── useToastStore.ts     # Notificaciones
│   ├── data/
│   │   ├── info.ts         # Datos personales/profesionales del CV
│   │   ├── companies.ts    # Historial de experiencia laboral
│   │   └── fonts.ts        # Fuentes disponibles
│   ├── layouts/            # Layout principal con Sidebar
│   └── router/             # Configuración de rutas
├── index.html
├── vite.config.ts
└── package.json
```

---

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js `>= 18`
- npm `>= 9`

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/cr-gcc/cv-creator.git
cd cv-creator

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
cp .env.example .env
# Editar VITE_APP_NAME_SHORT con el nombre de tu app

# 4. Iniciar servidor de desarrollo
npm run dev
```

La app estará disponible en `http://localhost:5173`

### Build para producción

```bash
npm run build
npm run preview
```

---

## 🖥️ Cómo Funciona

```
1. Abre la app  →  Ve el CV renderizado en tiempo real (formato A4)
2. Sidebar       →  Cambia color, fuente y tema sin recargar la página
3. Secciones     →  Edita cada campo del CV desde el panel de Secciones
4. Preview       →  Los cambios se reflejan instantáneamente en el diseño
5. Descarga      →  Exporta tu CV como PDF listo para enviar
```

---

## 🧩 Decisiones Técnicas Destacadas

**¿Por qué Pinia con persistedstate?**  
El color y la fuente elegidos se guardan en `localStorage` automáticamente. Al recargar la página, el CV mantiene el último diseño configurado sin ningún paso extra del usuario.

**¿Por qué `safelist.ts`?**  
TailwindCSS purga las clases no usadas en build. Como los colores del CV se generan dinámicamente (`bg-${color}-950`), se mantiene una safelist que garantiza que todas las variantes de color estén disponibles en producción.

**¿Por qué Atomic Design?**  
La UI está construida sobre átomos (`ButtonBase`, `Input`, `HeaderTwo`…) compuestos en moléculas y organismos, lo que permite modificar el look & feel de forma centralizada y escalable.

**¿Por qué VueUse para breakpoints?**  
El sidebar detecta si el usuario está en mobile, tablet o desktop con `breakpointsTailwind` y ajusta su estado automáticamente, sin media queries manuales.

---

## 📦 Dependencias Clave

| Paquete | Versión | Propósito |
|---|---|---|
| `vue` | ^3.5 | Framework reactivo |
| `vue-router` | ^5.2 | Navegación SPA |
| `pinia` | ^4.0 | State management |
| `pinia-plugin-persistedstate` | ^4.7 | Persistencia de estado |
| `@vueuse/core` | ^14.4 | Composables utilitarios |
| `tailwindcss` | ^4.3 | Estilos utility-first |
| `vite` | ^8.2 | Bundler y dev server |
| `typescript` | ~6.0 | Tipado estático |

---

## 🗺️ Roadmap

- [ ] Exportación a PDF nativa (html2pdf / puppeteer)
- [ ] Múltiples plantillas de CV
- [ ] Drag & drop para reordenar secciones
- [ ] Guardado en la nube (Firebase / Supabase)
- [ ] Modo multi-idioma (i18n)
- [ ] Compartir CV con link único

---

## 👤 Autor

**Cristóbal Gutiérrez Chávez**  
Desarrollador Full Stack

[![GitHub](https://img.shields.io/badge/GitHub-cr--gcc-181717?style=flat-square&logo=github)](https://github.com/cr-gcc)
[![Email](https://img.shields.io/badge/Email-cris.gcc%40outlook.com-0078d4?style=flat-square&logo=microsoft-outlook)](mailto:cris.gcc@outlook.com)

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**. Libre para usar, modificar y distribuir.

---

<p align="center">
  Hecho con ❤️ y Vue 3 · <em>Porque tu CV merece verse tan bien como tu trabajo</em>
</p>
