// Ejemplo basico de Array con los dias de la semana

var prompt = require('prompt-sync')()

var diasSem = []
var meses = []

for(i=0; i < 7; i++)
    diasSem.push(prompt('Ingrese dia: '))
for(i=0; i < 12; i++)
    meses.push(prompt('ingrese los meses del año: '))
    
    console.log('Los dias de la semana son: ' + diasSem)
    console.log('Los meses del año son: ' + meses) 
