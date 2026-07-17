# Backend de contacto

Pequeño servidor Express que da soporte a dos funciones desde [ContactPage.jsx](../src/pages/ContactPage.jsx):

- `POST /api/send-cv` — recibe un correo y envía el CV (PDF adjunto) a esa dirección.
- `POST /api/contact` — recibe un mensaje de una empresa interesada y lo reenvía a `OWNER_EMAIL`.

## Configuración

1. Copia `.env.example` a `.env` y completa las variables:

   ```
   cp .env.example .env
   ```

2. Configura las credenciales SMTP. Con Gmail:
   - Activa la verificación en dos pasos en tu cuenta de Google.
   - Genera una "contraseña de aplicación" en https://myaccount.google.com/apppasswords.
   - Usa esa contraseña de 16 caracteres como `SMTP_PASS` (no tu contraseña normal).
   - También puedes usar cualquier proveedor SMTP transaccional (SendGrid, Mailgun, Brevo, etc.), cambiando `SMTP_HOST`/`SMTP_PORT`.

3. Instala dependencias y arranca el servidor:

   ```
   npm install
   npm run dev
   ```

   El servidor queda escuchando en `http://localhost:4000` (o el `PORT` que definas).

## Frontend

El frontend llama al backend usando `VITE_API_URL`.

- En Docker (Nginx + reverse proxy): por defecto usa `/api`.
- En Vite dev: se recomienda proxy por `vite.config.js`.

Para frontend y backend en dominios diferentes, define en frontend:

```
VITE_API_URL=https://tu-backend-en-produccion.com/api
```

Y en el backend, define `CLIENT_ORIGIN` con la URL publica del frontend para restringir CORS.
Tambien puedes enviar mas de un origen separado por comas.

Dios es bueno
