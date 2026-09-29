import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { SiResearchgate, SiHuggingface } from 'react-icons/si';

const REDES = [
  { clave: 'linkedin', etiqueta: 'LinkedIn', Icono: FaLinkedinIn },
  { clave: 'github', etiqueta: 'GitHub', Icono: FaGithub },
];

export default function BotonesRedes({ redes, nombre }) {
  const disponibles = REDES.filter(({ clave }) => redes?.[clave]);

  return (
    <ul className="redes" aria-label={`Perfiles profesionales de ${nombre}`}>
      {disponibles.map(({ clave, etiqueta, Icono }) => (
        <li key={clave}>
          <a
            className="redes__boton"
            href={redes[clave]}
            target="_blank"
            rel="noopener noreferrer"
            title={etiqueta}
            aria-label={`${etiqueta} de ${nombre}`}
          >
            <Icono aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}
