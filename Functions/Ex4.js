// Escribir una funcion que voltee un numero de dos digitos o mas.
// Detectar si el input es un numero o una letra.

var prompt = require('prompt-sync')()


input = prompt('Ingrese un número: ')

function numReverso () {
    if (isNaN(input)){
        console.error('Debe ingresar un número, no una letra!.');
        process.exit()
    }

    num = input.split("").reverse().join("")
    console.log(`El numero reverso es: ${num}`)
}
    
numReverso()