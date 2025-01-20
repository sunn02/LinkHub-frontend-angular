
# 🌟 Frontend Angular

Este repositorio contiene la versión del frontend del proyecto **LinkHub**, desarrollada con **Angular**.

## ✅ Requisitos Previos

- [Node.js](https://nodejs.org/) instalado en tu sistema.
- [Angular CLI](https://angular.io/cli) instalado globalmente:
   ```bash
   npm install -g @angular/cli
   ```

---

## 🛠️ Cómo Instalar

1. Clona este repositorio:
   ```bash
   git clone https://github.com/sunn02/LinkHub-frontend-angular
   cd LinkHub-frontend-angular/link-project
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

---

## ▶️ Cómo Ejecutar

1. Inicia el servidor de desarrollo:
   ```bash
   ng serve
   ```

2. Abre tu navegador y visita [http://localhost:4200](http://localhost:4200).

---

## 🚀 Cómo Desplegar

1. Genera una versión optimizada para producción:
   ```bash
   ng build --prod
   ```

2. Sube la carpeta `dist/` al servidor de tu elección:
   - **Netlify**
   - **Vercel**
   - **GitHub Pages**
   - Cualquier servidor estático.

---

## 📜 Notas

- Este proyecto es una **Single Page Application (SPA)** y se conecta a un backend RESTful para manejar enlaces, comentarios y votos.
- Configura la URL del backend en el archivo `api.service.ts`en la carpeta `services`:
   ```typescript
    private API_URL = 'http://localhost:3005'
   ```
