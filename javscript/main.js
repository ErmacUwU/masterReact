//Alerta en javascript
//alert("Hola mundo, esta es mi primer alerta!");

//Variables
var nombre = "Victor Mancillas";
var altura = 180;
//Imprimir variables en el documento, aunque esta funcion no es la optima
//document.write(nombre+" "+altura); 
//Tambien se podria asignar en una variable separada y mandar imprimir la variable
/*
var concatenacion = nombre+" "+altura; //De esta manera
document.write(concatenacion);
*/
//Esta seria la manera o mas utilzada para imprimir datos en JS
var datos = document.getElementById("datos");
datos.innerHTML = `
<h1>ESTE ES UN H1</h1> <hr><br>
<h2>Mi nombre es: ${nombre}</h2>
<h2>Mi altura es: ${altura}</h2>
`;
//Asi funcionaria una condicional con las variables que declaramos inicialmente
if (altura >= 175) {
    datos.innerHTML += `<h3>Eres una persona alta</h3>`;
} else {
    datos.innerHTML += `<h3>Eres una persona chaparra</h3>`;
}
datos.innerHTML += `<hr>`

datos.innerHTML += `<h1>Bucle for en js</h1>`
var datos = document.getElementById("datos");
for(var meses = 1; meses <= 12; meses++){
    if (meses == 12) {
        datos.innerHTML += `<h2>Ya paso un año</h2>`
    } else {
        datos.innerHTML += `<h2>Aun no ha pasado un año</h2>`
    }
};


datos.innerHTML += `<hr>`
datos.innerHTML += `<h1>Funciones en js</h1>`




