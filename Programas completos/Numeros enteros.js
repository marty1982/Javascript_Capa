// Dada una lista de nros enteros, ordenarlos de mayor a menor:
// La entrada y la salida entonces deben ser listas. Acá se puede modelar la lista como una serie de ingresos secuenciales, 
// o bien como un unico ingreso de nros separados por coma (lo cual llevará a "parsear" el string de entrada detectando las comas, puede ser mas complejo pero es una opcion)

var prompt = require('prompt-sync')()

var array_num = []

function sortNumber (a,b) {
    return a-b
}

for(i = 0; i < 5; i ++) {
    array_num.push(prompt('Ingrese 5 numeros: '))
    array_num.sort(sortNumber)
}

console.log(`Se ordenaron los numeros de mayor a menor de la siguiente manera: ${array_num}`)