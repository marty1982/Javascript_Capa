// Convertidor de temperatura de grados a Fahreheit y viceversa

var prompt = require('prompt-sync')()

var valor1 = 32
var valor2 = 1.8
var valor3 = 273.15

while(input != 'x') {    
    
console.log('1 Grados => Fahrenheit \n')
console.log('2 Fahrenheit => Grados \n')
console.log('3 Grados => Kelvin \n')
console.log('4 Presione x para salir \n')

var input = prompt('Ingrese una opcion: ')

var num = prompt('Ingrese un numero: ')

    if (input === '1') {
        cToF()
}   else if (input === '2') {
        fToC()       
}   else if (input === '3') {
        cToK()
} 

function cToF() {
    var resultado = (num * valor2) + valor1
    console.log('El resultado es: \n ' + resultado + '\n')
}

function fToC() {
    var resultado = (num - valor1) / valor2
    console.log('El resultado es: \n' + resultado + '\n')
}

function cToK() {
    var resultado = (num - valor3)
    console.log('El resultado es: \n' + resultado + '\n')
        }
    }