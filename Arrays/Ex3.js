// Escribir un programa que junte todos los elementos del array en una cadena

var prompt = require('prompt-sync')()

var colores = []

for (i = 0; i < 5; i++) {
    colores.push(prompt('Ingrese 5 colores: '))
}

console.log('Los colores ingresados son: ' + colores)