import { Router } from 'express';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { transporter, MAIL_FROM } from '../mailer.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CV_PATH = path.resolve(__dirname, '../../', process.env.CV_FILE_PATH || './assets/CV-Zimri-Lopez.pdf');

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const router = Router();

router.post('/send-cv', async (req, res) => {
  const { email, name } = req.body ?? {};

  if (!email || !EMAIL_REGEX.test(email)) {
    return res.status(400).json({ error: 'Proporciona un correo electrónico válido.' });
  }

  if (!fs.existsSync(CV_PATH)) {
    console.error(`[send-cv] No se encontró el archivo del CV en: ${CV_PATH}`);
    return res.status(500).json({ error: 'El CV no está disponible en el servidor por el momento.' });
  }

  try {
    await transporter.sendMail({
      from: MAIL_FROM,
      to: email,
      subject: 'CV de Zimri López',
      text: `Hola${name ? ` ${name}` : ''},\n\nGracias por tu interés. Adjunto encontrarás mi CV.\n\nSaludos,\nZimri López`,
      html: `<p>Hola${name ? ` ${name}` : ''},</p><p>Gracias por tu interés. Adjunto encontrarás mi CV.</p><p>Saludos,<br/>Zimri López</p>`,
      attachments: [
        {
          filename: 'CV-Zimri-Lopez.pdf',
          path: CV_PATH,
        },
      ],
    });

    res.status(200).json({ message: 'CV enviado correctamente.' });
  } catch (error) {
    console.error('[send-cv] Error al enviar el correo:', error);
    res.status(502).json({ error: 'No se pudo enviar el correo. Intenta nuevamente más tarde.' });
  }
});

export default router;
