//alert("Hola Mundo");
console.log("Hola Mundo");

//Comentario de una línea

/*Este comentario se puede extender
por varias líneas.
Las que quieras*/

let nombreUsuario;

nombreUsuario = 'Juan';

console.log(nombreUsuario);

let edad = 24;

console.log(edad);

/*document.write(nombreUsuario);
document.write(edad);*/

const parrafo1 = document.getElementById("parrafo1");
parrafo1.innerHTML = nombreUsuario;
parrafo1.style = "color: red";


let contador = 1;
//             1
console.log(contador);
contador = contador + 1; //2
//           2
console.log(contador);
contador = contador + 1; //3
console.log(contador);
++contador; //4
console.log(contador);
contador += 5;  // 9
console.log(contador);
contador = contador + 5;


//una persona quiere saber
//si es mayor de edad

/*
print "ingrese su edad"
14
si edad >= 18
entonces "Es mayor de edad"
*/
let edad1;
edad1 = "45";
let edad2;
edad2 = 45;

console.log(edad == edad2);
console.log(edad1 === edad2);

let verdadero = true;

let altura = 1.72;

edad = 25;

if (edad > 18) {
    console.log("Edad: " + edad);
    console.log("Es mayor de edad");
} else {
    console.log("Edad: " + edad);
    console.log("Es menor de edad");
}
