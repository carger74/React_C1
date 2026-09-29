import Avatar from './Avatar.jsx';
import BotonesRedes from './BotonesRedes.jsx';

export default function TarjetaPerfil({ miembro }) {
  const { nombre, rol, foto, intereses, redes } = miembro;

  return (
    <article className="tarjeta">
      <Avatar nombre={nombre} foto={foto} />
      <h2 className="tarjeta__nombre">{nombre}</h2>
      <p className="tarjeta__rol">{rol}</p>

      <h3 className="tarjeta__subtitulo">Intereses profesionales</h3>
      <ul className="intereses">
        {intereses.map((interes) => (
          <li key={interes}>{interes}</li>
        ))}
      </ul>

      <BotonesRedes redes={redes} nombre={nombre} />
    </article>
  );
}
