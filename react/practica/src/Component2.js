//Imports 
import React from "react";

//Funciones
const Component2 = () => {
    const proveedores = ["Ideal","MBC","Kombitec"];
    //const proveedores = [];
  return (
    <div >
        <h3>Componente 2</h3>
        <h3>Lista de proveedores</h3>
        {proveedores.length >= 1 ? //Esto es un if con operador ternario, si funciona se ejecuta lo del primer parentesis
        (<ul>
            {proveedores.map((proveedor,indice) => {
              return <li key={indice}>{proveedor}</li>  
            })}
        </ul>) 
        : (<li>No hay proveedores disponibles</li>) //Si no entonces se ejecutara lo de esta linea
        }
    </div>
  )
}

//Exports
export default Component2;