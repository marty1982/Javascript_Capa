// introduce la contrasena que debe ser para poder seguir en el programa. De lo contrario sigue solicitandola.

var prompt = require('prompt-sync')()

var clave = ''

while(clave != '123') {
    clave = prompt('Ingrese su contraseña para continuar: ' )
    console.log('Error, intente nuevamente') 
}
    console.log('Gracias') 

// ver porque al ingresar la contraseña me salen ambos mensajes de console log.