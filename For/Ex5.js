// El factorial de un número entero n es una operación matemática que consiste en multiplicar todos los factores n x (n-1) x (n-2) x ... x 1. 
// Así, el factorial de 5 (escrito como 5!) es igual a: 5! = 5 x 4 x 3 x 2 x 1 = 120
// Utilizando la estructura for, crear un script que calcule el factorial de un número entero.

var prompt = require('prompt-sync')()

var num = prompt('Ingrese un numero y se mostrara su factorial: ')

var resultado = 1

for (i = 1; i <= num; i++) {
    resultado *= i;
}

console.log(`El resultado es ${resultado}`)

// hacer loop decreciente, que el calculo lo haga al reves y no empezando por el 1 como ahora
