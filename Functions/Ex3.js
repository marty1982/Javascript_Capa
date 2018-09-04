// Convertidor de temperatura de grados a Fahreheit y viceversa

var prompt = require('prompt-sync')()

console.log('1 Grados a Fahrenheit')
console.log('2 Fahrenheit a Grados')

var input = prompt('Ingrese una opcion: ')


function cToF() {
    num = prompt('Ingrese un numero: ')
    var valor1 = 10
    var valor2 = 1.8
    resultado = (num * valor2) 
    console.log('El resultado es: ' + resultado)

}

cToF()

// no hace bien el calculo