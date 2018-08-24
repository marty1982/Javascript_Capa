// hacer una calculadora que nos pregunte primero que operacion aritmetica queremos hacer entre dos numeros.
// luego que calcule lo que queremos calcular y cuando termine que vuelva a preguntar que operacion queremos hacer.
// Agregar una opcion de salida.
// variable simple de suma entre dos numeros

var prompt = require('prompt-sync')()
var input = ''

console.log('***************')
console.log('* CALCULADORA *')
console.log('***************')

while (input !== 'x') { 
input = prompt('Elija una operacion a realizar entre dos numeros (+,-,*,/) ó presione x para salir: ')  

var num1 = prompt('Ingrese un numero: ')
var num2 = prompt('Ingrese otro numero: ') 

var suma = parseInt(num1) + parseInt(num2)
var resta = num1 - num2
var multi = num1 * num2
var div = num1 / num2

        if(input == '+') {
        console.log(`El resultado de la suma es: ${suma}`)
}       else if (input == '-') {
        console.log(`El resultado de la resta es: ${resta}`)
}       else if (input == '*') {
        console.log(`El resultado de la multiplicación es: ${multi}`)
}       else if (input == '/') {
        console.log(`El resultado de la division es: ${div}`)      
        }

process.exit() 
}

console.log('Saliendo...')