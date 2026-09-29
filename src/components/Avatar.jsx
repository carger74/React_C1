import { useState } from 'react';

function obtenerIniciales(nombre) {
  return nombre
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((palabra) => palabra[0])
    .join('')
    .toUpperCase();
}

export default function Avatar({ nombre, foto }) {
  const [fallo, setFallo] = useState(false);
  const mostrarFoto = foto && !fallo;

  return (
    <div className="avatar">
      {mostrarFoto ? (
        <img src={foto} alt={`Foto de ${nombre}`} onError={() => setFallo(true)} />
      ) : (
        <span aria-hidden="true">{obtenerIniciales(nombre)}</span>
      )}
    </div>
  );
}
