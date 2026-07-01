import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { rateLimit } from 'express-rate-limit';
import sendCvRouter from './routes/sendCv.js';
import contactRouter from './routes/contact.js';

const app = express();
const PORT = process.env.PORT || 4000;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:5173';
const isProduction = process.env.NODE_ENV === 'production';

app.use(
  cors({
    origin(origin, callback) {
      // Sin origin (curl, health checks) o coincide con el origen configurado.
      if (!origin || origin === CLIENT_ORIGIN) return callback(null, true);
      // En desarrollo, Vite puede tomar un puerto distinto si 5173 está ocupado.
      if (!isProduction && /^https?:\/\/(localhost|127\.0\.0\.1):\d+$/.test(origin)) {
        return callback(null, true);
      }
      callback(new Error('Origen no permitido por CORS'));
    },
  })
);
app.use(express.json());

// Evita abuso de los formularios de correo (máx. 5 envíos cada 15 min por IP).
const mailLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Demasiadas solicitudes. Intenta de nuevo más tarde.' },
});

app.use('/api', mailLimiter);
app.use('/api', sendCvRouter);
app.use('/api', contactRouter);

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

const server = app.listen(PORT, () => {
  console.log(`Backend escuchando en http://localhost:${PORT}`);
});

server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(
      `\nEl puerto ${PORT} ya está en uso por otro proceso.\n` +
        'Es probable que ya haya una instancia del backend corriendo. ' +
        'Ciérrala antes de volver a ejecutar "npm run dev", o cambia el puerto en server/.env (PORT=...).\n'
    );
    process.exit(1);
  }
  throw error;
});
