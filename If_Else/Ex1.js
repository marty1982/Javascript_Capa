// Escribr una funcion llamada HelloWorld que:
// Tome 1 argumento, un codigo de idioma (EN, FR, BR, DE)
// Devuelva la traduccion en dicho idioma, al menos con 4 idiomas. 
// Fuente: www.teaching-materials.org/javascript/excercises/ifelse
 
var prompt = require('prompt-sync')()

console.log('En que idioma desea traducir "Hola Mundo?"')
var lang = prompt('Seleccione cual desea (EN, FR, BR, DE): ')

   if (lang == 'en') {
     console.log('Hello World')
}   else if (lang == 'fr') {
     console.log('Bounjour a tout le monde') 
}   else if (lang == 'br') {
    console.log('Olá Mundo')
}   else if (lang == 'de') {
    console.log('Hallo Welt')  
}