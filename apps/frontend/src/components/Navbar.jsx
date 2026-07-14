import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="topbar">
      <NavLink className="brand" to="/">Zimri López</NavLink>
      <nav className="nav-links">
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/about">Acerca de</NavLink>
        <NavLink to="/projects">Proyectos</NavLink>
        <NavLink to="/contact">Contacto</NavLink>
      </nav>
    </header>
  );
}
