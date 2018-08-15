// Grabar en una variable tu año de nacimiento
// Grabar un año futuro en otra variable
// Calcular dos posibles edades basado en los valores guardados. Ej: Si naciste en el 1982 entonces en 2018 tendras 35 años.
// Mostrar mensaje: En el año 2040 tendre...
// www.teaching-materials.org/javascript/exercises/varibles

var prompt = require('prompt-sync')()

var añoNac = ""
var añoFuturo = ""

añoNac = prompt('Ingrese su año de nacimiento (YYYY): ')
añoFuturo = prompt('Ingrese un año aleatorio (YYYY): ')

var edad = añoFuturo - añoNac

console.log(`Usted tiene ${edad}`)