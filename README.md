# 💇‍♀️ Xtylo Peluquería

Web corporativa full-stack para una peluquería en Madrid, desarrollada como proyecto final de prácticas tras un curso de programación. Incluye frontend, backend y despliegue completo en producción.

🔗 **Demo en vivo:** [proyecto-peluqueria-pi.vercel.app](https://proyecto-peluqueria-pi.vercel.app)

---

## 📋 Sobre el proyecto

Xtylo Peluquería es una web diseñada para un salón de belleza real, con presentación de servicios (peluquería, novias, uñas) y un formulario de contacto funcional que envía las consultas directamente al correo del negocio.

El objetivo del proyecto fue cubrir el ciclo completo de desarrollo de una aplicación web moderna: diseño de interfaz, desarrollo de API, y despliegue en infraestructura real en producción — no solo una maqueta que corre en local.

## ✨ Características

- Diseño responsive, minimalista y adaptado a la identidad visual del salón (paleta en tonos pastel: azul empolvado, rosa, blanco)
- Páginas de servicios: Peluquería, Novias, Uñas
- Formulario de contacto con validación y envío de email en tiempo real
- Backend desacoplado con API REST propia
- Despliegue independiente de frontend y backend, comunicados vía variables de entorno y CORS configurado

## 🛠️ Stack tecnológico

**Frontend**
- React + Vite
- CSS moderno (diseño responsive)

**Backend**
- Node.js + Express
- [Resend](https://resend.com) para envío de emails transaccionales (HTTP API, sin depender de SMTP)

**Infraestructura**
- [Vercel](https://vercel.com) — hosting del frontend
- [Render](https://render.com) — hosting del backend

```

## 🚀 Instalación local

Clona el repositorio e instala las dependencias de cada parte por separado:

```bash
git clone https://github.com/micrana23/proyecto-peluqueria.git
cd proyecto-peluqueria
```

**Backend**

```bash
cd BACK
npm install
```

Crea un archivo `.env` dentro de `BACK/` con:

```env
PORT=5000
EMAIL_USER=tu_correo@gmail.com
EMAIL_PASS=tu_contraseña_de_aplicación
RESEND_API_KEY=tu_api_key_de_resend
CORS_ORIGIN=http://localhost:5173
```

```bash
npm start
```

**Frontend**

```bash
cd peluqueria-frontend
npm install
```

Crea un archivo `.env` dentro de `peluqueria-frontend/` con:

```env
VITE_API_URL=http://localhost:5000
```

```bash
npm run dev
```

## 🌐 Despliegue

El proyecto está desplegado con arquitectura desacoplada:

- **Backend** en Render, como Web Service conectado directamente al repositorio de GitHub
- **Frontend** en Vercel, con auto-deploy en cada push a `main`
- Comunicación entre ambos mediante variables de entorno (`VITE_API_URL` en el frontend, `CORS_ORIGIN` en el backend)

### Un reto real resuelto

Durante el despliegue, el envío de emails vía SMTP directo con Gmail sufría timeouts intermitentes en el plan gratuito de Render (conexiones salientes poco fiables por puertos SMTP). Se resolvió migrando el envío de correos a **Resend**, un servicio de email transaccional que funciona vía HTTPS en lugar de SMTP, eliminando el problema de raíz y consiguiendo envíos instantáneos y fiables.

## 📸 Capturas

<img width="452" height="853" alt="Captura desde 2026-09-26 15-41-02" src="https://github.com/user-attachments/assets/00837988-e265-4c52-ae50-95c74936379b" />
<img width="452" height="853" alt="Captura desde 2026-09-26 15-40-32" src="https://github.com/user-attachments/assets/9a46b8df-c5e1-4053-99af-2c4d651d9ea9" />





## 👤 Autora

Proyecto desarrollado por **micrana23** como práctica.

- GitHub: [@micrana23](https://github.com/micrana23)

---

⭐️ Si te ha gustado el proyecto, no dudes en dejarle una estrella en GitHub.
