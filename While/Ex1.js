// Ejemplo basico del while loop

var prompt = require('prompt-sync')()

var edad = 5

while (edad < 10) {
    input = prompt('Ingrese su edad: ')
    if (input =! 'x') {
        process.exit()
    } else if (input < 10) {
    console.log('Sos menor a 10 anos de edad')
    } else if (input > 10) {
    console.log('Sos mayor a 10 anos de edad')
    }
}
