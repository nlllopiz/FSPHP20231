console.log("eventos");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const expRegular = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/

const botonEnviar = document.getElementById("enviar");

//nombre.value = "no";

console.log(nombre.value.length);

function validarNombre() {
    if(nombre.value.length<3){
        document.getElementById("errorNombre").innerHTML = "El nombre no es válido";
    } else {
        document.getElementById("errorNombre").innerHTML = "El nombre es correcto";
    }
}

function validarApellido() {
    if(apellido.value.length<3){
        document.getElementById("errorApellido").innerHTML = "El apellido no es válido";
    } else {
        document.getElementById("errorApellido").innerHTML = "El apellido es correcto";
    }
}

function validarEmail() {
    if(!expRegular.test(email.value)){
        document.getElementById("errorCorreo").innerHTML = "El email no es válido"
    } else {
        document.getElementById("errorCorreo").innerHTML = "El email es correcto"
    }
}

botonEnviar.addEventListener("click", validarNombre);
botonEnviar.addEventListener("click", validarApellido);
botonEnviar.addEventListener("click", validarEmail);


document.getElementById("p1").innerHTML = "Total a pagar: $" + "550";


/*
perro
atributos: color, tamaño, peso, altura
acciones: ladrar(), moverLaCola(), comer()

perro {
    color: negro;
    tamaño: mediano;

    function ladrar() {
        console.log("Guau guau");
    }

    function comer() {

    }
}




console.log(perro.color);  //negro
perro.ladrar(Guau guau);    //método
*/

