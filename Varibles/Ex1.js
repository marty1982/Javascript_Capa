// pide la edad y si es mayor de 18 años ya puede conducir.

var prompt = require('prompt-sync')()

var ingEdad = prompt('Ingrese su edad: ')

if(ingEdad <= 17) {
    console.log('No puedes manejar!')
} else if(ingEdad >= 18) {
    console.log('Puedes manejar!')
}
