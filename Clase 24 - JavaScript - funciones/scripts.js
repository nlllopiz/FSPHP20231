console.log("funciones");

let edad;

function suma (numero1, numero2) {
    console.log(numero1);
    console.log(numero2);
    let sumaTotal = numero1 + numero2;
    return sumaTotal;
}

function saludar(){
    console.log("Hola Mundo");
}

let suma2030 = suma(20,30);

console.log(suma("cien", 100));

console.log(suma2030);

console.log(saludar());

let selCategoria = document.getElementById("categorias").value;
console.log(selCategoria);

document.getElementById("p1").innerHTML = suma2030;


