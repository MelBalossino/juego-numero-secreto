function indiceMasaCorporal(altura, peso) {
    let imc = peso / (altura * altura);
    return imc;
}

function calculoFactorial(numero) {
    if (numero == 0 || numero == 1) {
        return 1;
    } else {
        return numero * calculoFactorial(numero - 1);
    }
}

function dolarAReal(dolares) {
    let cotizacionDolar = 4.80;
    let reales = dolares * cotizacionDolar;
    return reales;
}

function areaYPerimetroRectangular(alto, ancho) {
    let area = alto * ancho;
    let perimetro = (alto + ancho) * 2;
    return `El área es ${area}, y el perímetro es ${perimetro}.`
}

function areaYPerimetroCircular(radio) {
    let pi = 3.14;
    let area = pi * radio * radio;
    let perimetro = 2 * pi * radio;
    return `El área es ${area}, y el perímetro es ${perimetro}.`
}

function tablaMultiplicar(numero) {
    for (let i = 0; i <= 10; i++) {
        let resultado = numero * i;
        console.log(numero + "x" + i + "=" + resultado);
    }
}

//////////////////////////////////////////////////////////

let listaGenerica = [];
let lenguajesDeProgramacion = ["JavaScript", "C", "C++", "Kotlin", "Python"];
lenguajesDeProgramacion.push("Java", "Ruby", "GoLang");

function mostrarLenguajes() {
    for (let i = 0; i < lenguajesDeProgramacion.length; i++) {
        console.log(lenguajesDeProgramacion[i]);
    }
}

function mostrarLenguajesInverso() {
    for (let i = lenguajesDeProgramacion.length - 1; i >= 0; i--) {
        console.log(lenguajesDeProgramacion[i]);
    }
}

let listaNumeros = [1, 2, 3, 4, 5, 6];

function calcularPromedioNumeros() {
    let suma = 0;
    for (let i = 0; i < listaNumeros.length; i++) {
        suma += listaNumeros[i];
    }
    return suma / listaNumeros.length;
}

function encontrarMayorYMenor() {
    let mayor = listaNumeros[0];
    let menor = listaNumeros[0];
    for (let i = 0; i < listaNumeros.length; i++) {
        if (listaNumeros[i] > mayor) {
            mayor = listaNumeros[i];
        } else {
            if (listaNumeros[i] < menor) {
                menor = listaNumeros[i];
            }
        }
    }
    console.log("Número mayor: ", mayor);
    console.log("Número menor: ", menor);
}

function sumarLista() {
    let suma = 0;
    for (let i = 0; i < listaNumeros.length; i++) {
        suma += listaNumeros[i]
    }
    return suma;
}

function encontrarIndiceElemento(lista, elemento) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] == elemento) {
            return i;
        }
    }
    return -1;
}

