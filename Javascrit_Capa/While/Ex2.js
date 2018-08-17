// introduce la contrasena que debe ser para poder seguir en el programa. De lo contrario sigue solicitandola.

var prompt = require('prompt-sync')()

var clave = ''

while(clave != '123') {
    clave = prompt('Ingrese su contrasena para continuar: ' )
    console.log('Contrasena incorrecta, reintente nuevamente.')
}
    console.log('Gracias!')
