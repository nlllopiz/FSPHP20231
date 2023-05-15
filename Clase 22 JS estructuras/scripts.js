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

edad = 17;

if (edad > 18) {
    console.log("Edad: " + edad);
    console.log("Es mayor de edad");
} else {
    console.log("Edad: " + edad);
    console.log("Es menor de edad");
}


//***********if anidados *************/

//si es menor de 13 es niño
//si es menor de 18 es adolescente
//si es mayor de 25 es adulto joven
//si es mayor de 40 es adulto

edad = 35;

if(edad > 0 && edad <= 12) {
    console.log("Es niño/a");
} else if(edad >= 13 && edad <= 18){
    console.log("Es adolescente");
} else if(edad >= 19 && edad <=25){
    console.log("Es joven");
} else if(edad >= 26 && edad <= 40) {
    console.log("Es adulto joven");
} else {
    console.log("Es una persona sabia");
}

/* Switch case */
let dia = 6;

switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5,6,7:
        console.log("Fin de semana");
        break;
    default:
        console.log("No es un día válido");
        break;
}


/* Estructuras de repetición */

/* while */

let contadorr = 1;
/*
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
*/
while(salir = "s"){
    console.log(contadorr);
    contadorr++;
}


/* do while*/ 
contadorr = 1;
do{
    console.log(contadorr);
    contadorr++;
}while (contadorr <= 10)

/* for */
