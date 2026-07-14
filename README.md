# Portafolio Monorepo (Frontend + Backend)

Este proyecto ahora esta organizado como monorepo:

- `apps/frontend`: React + Vite (servido en produccion con Nginx).
- `apps/backend`: API Express para formularios y envio de CV por correo.

## Requisitos

- Docker y Docker Compose.

## Levantar todo con Docker Compose

1. Copia variables de entorno:

	 ```bash
	 cp .env.example .env
	 ```

2. Ajusta credenciales SMTP en `.env` (obligatorio para correos reales).

3. Levanta servicios:

	 ```bash
	 docker compose up -d --build
	 ```

4. Accede a:

- Frontend: `http://localhost:8080`
- Backend health: `http://localhost:4000/api/health`

## Logs reales en Docker

- Logs backend en tiempo real:

	```bash
	docker compose logs -f backend
	```

- Logs frontend en tiempo real:

	```bash
	docker compose logs -f frontend
	```

## Desarrollo local sin Docker (opcional)

Con pnpm (workspace):

```bash
pnpm install
pnpm dev
```

## Despliegue en Render

Render no ejecuta Docker Compose directamente en un unico servicio, por lo que debes desplegar dos servicios:

1. `backend` como **Web Service** usando `apps/backend/Dockerfile`.
2. `frontend` como **Web Service** usando `apps/frontend/Dockerfile`.

Variables recomendadas:

- Backend:
	- `PORT=4000`
	- `NODE_ENV=production`
	- `CLIENT_ORIGIN=https://TU_FRONTEND.onrender.com`
	- `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`, `MAIL_FROM`, `OWNER_EMAIL`
- Frontend:
	- `VITE_API_URL=/api` (si tienes proxy en el mismo dominio)
	- Si frontend y backend quedan en dominios distintos: `VITE_API_URL=https://TU_BACKEND.onrender.com/api`

Para revisar registros reales en Render, usa la pestana **Logs** de cada servicio (frontend y backend).
