// Escriba un for loop que vaya de 0 a 10. Para cada iteracion del ciclo
// multiplicara el numero por 9 y mostrará el resultado.
// por ejemplo "2 * 9 = 18"

var prompt = require('prompt-sync')()
    console.log('Tabla de multiplicar del 9 \n')

var multiplicador = 9

for (i = 0; i <= 10; i++) {
    resultado = multiplicador * i
    console.log(multiplicador + ' * ' + i + ' = ' + resultado)    
}
