import React from 'react';
import '../hojas-estilos/Testimonio.css'

function Testimonio(props) {
  return (
    <div className="contenedor-testimonio ">
      <img
        className="imagen-testimonio"
        src={require(`../imagenes/${props.imagen}.jpeg`)}
        alt="Foto de Luciana"
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">{props.nombre}</p>
        <p className="cargo-testimonio"> {props.precio}</p>
        <p className="cargo-testimonio">{props.cargo}</p>
        <p className="texto-testimonio">{props.texto}</p>
        <button className="btn-testimonio">Seleccionar</button>
      </div>
    </div>
  )
}

export default Testimonio;

// HORA DE GRABACION 02:37:00