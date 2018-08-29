// Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es 
// par o impar. Mostrar por pantalla el resultado devuelto por la función.

var prompt = require('prompt-sync')()

while(true) {
var numero = prompt('Ingrese un numero: ')
    if(numero === 'x')
    process.exit()

var resultado = parImpar(numero)
    console.log('El numero ' +numero+' es ' +resultado)
  
function parImpar(numero) {
    if(numero % 2 == 0) {
        return 'par'
    }
    else {
        return 'impar'
     }
    }
}