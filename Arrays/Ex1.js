// Ejemplo basico de Array con los dias de la semana

var prompt = require('prompt-sync')()

var diasSem = []

for(i=0; i < 7; i++)
    diasSem.push(prompt('Ingrese dia: '))
    console.log('Los dias de la semana son: ' + diasSem)