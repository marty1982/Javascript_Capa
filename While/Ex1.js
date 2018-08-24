// Ejemplo basico del while loop

var prompt = require('prompt-sync')()

var edad = ""

while (edad < 10) {
    input = prompt('Ingrese su edad o presione x para salir: ')
    if (input === 'x') {
        process.exit()
}   else if (input <= 10) {
        console.log('Sos menor a 10 anos de edad')
}   else if (input >= 10) {
        console.log('Sos mayor a 10 anos de edad')
    }
}
