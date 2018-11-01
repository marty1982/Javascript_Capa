// Sorteador aleatorio con nombre de personas. Se ingresan hasta 5 participantes 
// y el programa sortea aleatoriamente del puesto 1 al 5 los nombres ingresados.

prompt = require('prompt-sync')()

var arr_nombres = []

for (i = 0; i < 5; i++) {
  arr_nombres.push(prompt('Ingrese un nombre: '))
  arr_nombres.sort(arr_nombres)


}

console.log(`Los nombres ingresados son: \n${arr_nombres} \n`)


// falta hacer que sortee aleatoriamente