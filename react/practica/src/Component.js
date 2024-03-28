//Imports 
import React from "react";
//Funciones, siempre se debe de hacer todo dentro de un div 
const Component = () => {
    const nombre = "Victor Mancillas";
    const edad = 17;
    let usuario = {
        nombre:"Isaac Montalvo",
        edad:29,
        correo:"isaac123@gmail.com"
    }
  return (
    <div> 
        <h1>Este es mi primer componente</h1>
        <ul>
            <li>
                Contactor
            </li>
            <li>
                Sobrecarga
            </li>
            <li>
                Clemas
            </li>
            <hr/>
        </ul>
        
        <h2>Hola, mi nombre es <strong>{nombre}</strong></h2>
        <h2>Tengo {edad} años de edad</h2>
        <hr/>
        <h1>{JSON.stringify(usuario)}</h1>
        <hr/>
        <ul>
            <li>
                Nombre: {usuario.nombre}
            </li>
            <li>
                Edad: {usuario.edad}
            </li>
            <li>
                Correo: {usuario.correo}
            </li>
        </ul>
    </div>
  )
};





//Exports
export default Component;