
# Spot - Frontend en Next.js

Este proyecto es el frontend para Spot, desarrollado con **Next.js**, utilizando **TailwindCSS** y **Ant Design** como frameworks principales.

---

## Despliegue en Vercel

Sigue los pasos a continuación para desplegar este proyecto en Vercel:

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/ArlingHolguin/spot.git
   cd spot
   ```

2. **Sube el repositorio a GitHub** (si aún no lo has hecho).

3. **Crea un proyecto en Vercel**:
   - Accede a [https://vercel.com/](https://vercel.com/).
   - Haz clic en **New Project**.
   - Importa el repositorio desde GitHub.

4. **Configura las variables de entorno**:
   En el panel de configuración del proyecto en Vercel, agrega las siguientes variables de entorno:
   ```
   NEXT_PUBLIC_NODE_PROD=integration
   NEXT_PUBLIC_DEV_URL=http://spotly.test
   NEXT_PUBLIC_PROD_URL=https://whatfy.com
   NEXT_PUBLIC_DEV_AUTH_URL=http://spotly.test
   NEXT_PUBLIC_PROD_AUTH_URL=https://whatfy.com
   NEXT_PUBLIC_CLIENT_ID=9d4cfd52-3057-43be-8214-b01aed7b6b56
   NEXT_PUBLIC_CLIENT_SECRET=7DTSK0UZVE2TMCtnBPsD3qubvXJMLh9Ou5bT1zgz
   ```

5. **Despliega el proyecto**:
   - Vercel detectará automáticamente el framework **Next.js** y configurará el entorno.
   - Una vez desplegado, obtendrás una URL de producción como `https://spot.vercel.app`.

---

## Despliegue en Local

Sigue estos pasos para ejecutar el proyecto localmente:

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/ArlingHolguin/spot.git
   cd spot
   ```

2. **Instala las dependencias**:
   Asegúrate de tener **Node.js** y **npm** instalados. Luego, ejecuta:
   ```bash
   npm install
   ```

3. **Configura las variables de entorno**:
   Crea un archivo `.env.local` en la raíz del proyecto y copia el contenido de `.env.example`. Configura las variables de entorno según tu entorno local:
   ```
   NEXT_PUBLIC_NODE_PROD=integration
   NEXT_PUBLIC_DEV_URL=http://spotly.test
   NEXT_PUBLIC_PROD_URL=https://whatfy.com
   NEXT_PUBLIC_DEV_AUTH_URL=http://spotly.test
   NEXT_PUBLIC_PROD_AUTH_URL=https://whatfy.com
   NEXT_PUBLIC_CLIENT_ID=9d4cfd52-3057-43be-8214-b01aed7b6b56
   NEXT_PUBLIC_CLIENT_SECRET=7DTSK0UZVE2TMCtnBPsD3qubvXJMLh9Ou5bT1zgz
   ```

4. **Ejecuta el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

5. **Accede a la aplicación**:
   Abre tu navegador y ve a [http://localhost:3000](http://localhost:3000).

---

## Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Compila la aplicación para producción.
- `npm start`: Inicia el servidor de producción (necesita un `npm run build` previo).
- `npm run lint`: Ejecuta el linter para revisar errores en el código.

---

## Tecnologías Utilizadas

- **Next.js**: Framework para aplicaciones React.
- **TailwindCSS**: Framework de diseño para estilos rápidos y responsivos.
- **Ant Design**: Biblioteca de componentes UI.
- **Axios**: Cliente HTTP para consumo de APIs.

---

## Repositorio

El código fuente está disponible en GitHub: [https://github.com/ArlingHolguin/spot.git](https://github.com/ArlingHolguin/spot.git)

---

Si tienes preguntas o problemas, ¡no dudes en contactarme! 🚀
