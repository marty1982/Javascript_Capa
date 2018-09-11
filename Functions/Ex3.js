// Programa para saber que numero es mas grande
// Escribir una funcion llamada greaterNum que tome dos numeros y diga cual es mayor de esta manera: Entre el numero 5 y 10 el 10 es mayor.
// Fuente: www.teaching-materials.org/javascript/excercises/ifelse
 
var prompt = require('prompt-sync')()

var num1 = prompt('Ingrese el primer numero: ')
var num2 = prompt('Ingrese el segundo numero: ')

function greaterNum(num1, num2) {
}  if (num1 > num2) {
        console.log(`El numero ${num1} es mayor que el numero ${num2}`)
} else if(num1 < num2) {
        console.log(`El numero ${num1} es menor que el numero ${num2}`)
}

greaterNum()