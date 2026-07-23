import gestorRestaurantes from '../assets/GestorRestaurantes.png';
import gestorBancario from '../assets/GestorBancario.png';
import gestorPeluqueria from '../assets/GestorPeluqueria.png';
import gestorPeluqueria2 from '../assets/GestorPeluqueria2.png';
import restaurante from '../assets/Restaurante.png';
import banco from '../assets/Banco.png';

export const projects = [
  {
    title: 'Gestor de restaurantes',
    description: 'Sistema para administrar pedidos, inventario y clientes con una interfaz intuitiva y flujo rápido para operaciones diarias.',
    stack: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    image: gestorRestaurantes,
    secondaryImage: restaurante,
    accent: 'restaurant',
  },
  {
    title: 'Gestor bancario',
    description: 'Aplicación de control financiero con vistas de gestión de usuarios, registros y seguimiento de operaciones.',
    stack: ['.NET', 'MongoDB', 'React'],
    image: gestorBancario,
    secondaryImage: banco,
    accent: 'bank',
  },
  {
    title: 'Gestor de peluquería',
    description: 'Panel para agendamiento, servicios y clientes, pensado para mejorar la experiencia del negocio y el personal.',
    stack: ['React Native', 'Node.js', 'MongoDB'],
    image: gestorPeluqueria,
    secondaryImage: gestorPeluqueria2,
    accent: 'salon',
  },
];
