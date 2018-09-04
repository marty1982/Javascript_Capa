// hacer una calculadora que nos pregunte primero que operacion aritmetica queremos hacer entre dos numeros.
// luego que calcule lo que queremos calcular y cuando termine que vuelva a preguntar que operacion queremos hacer.

var prompt = require('prompt-sync')()
var input = ''

console.log('***************')
console.log('* CALCULADORA *')
console.log('***************')

while (input != 'x') { 

var input = prompt('Elija una operacion a realizar entre dos numeros (+,-,*,/) ó presione x para salir: ')          
        
var num1 = prompt('Ingrese un numero: ')
var num2 = prompt('Ingrese otro numero: ') 

        if (input === '+') {
        suma()
}       else if (input === '-') {
        resta()
}       else if (input === '*') {
        multi()
}       else if (input === '/') {
        div()
}

function suma() {
        var resultado = parseInt (num1) + parseInt (num2)
        console.log(`El resultado de la suma es: ${resultado}`)
}
function resta() {
        var resultado = num1 - num2
        console.log(`El resultado de la resta es: ${resultado}`)
}
function div() {
        var resultado = num1 / num2
        console.log(`El resultado de la division es: ${resultado}`)
}
function multi() {
        var resultado = num1 * num2
        console.log(`El resultado de la multiplicacion es: ${resultado}`)
        }

}