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
lenguajesDeProgramacion.push("Java","Ruby","GoLang");

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
