import React from "react";
import '../hojas-de-estilo/Pantalla.css';

// Se pueden definir tambien los componentes como funciones flecha
//Se usa esta presentacion para componentes mas sencillos que no tienen logica por asi decirlo
const Pantalla = ({input}) =>
(
    <div className="input">
        {input}
    </div>
);

export default Pantalla;