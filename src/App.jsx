import { equipo } from './data/equipo.js';
import TarjetaPerfil from './components/TarjetaPerfil.jsx';

export default function App() {
  return (
    <div className="pagina">
      <header className="encabezado">
        <h1>Nuestro equipo</h1>
        <p>
          Estudiantes de Ingeniería en Cibernética y Sistemas Computacionales,
          Universidad La Salle.
        </p>
      </header>

      <main>
        <ul className="equipo">
          {equipo.map((miembro) => (
            <li key={miembro.id} className="equipo__item">
              <TarjetaPerfil miembro={miembro} />
            </li>
          ))}
        </ul>
      </main>

      <footer className="pie">Hecho con React</footer>
    </div>
  );
}
