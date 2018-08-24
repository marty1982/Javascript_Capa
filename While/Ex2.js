// introduce la contrasena que debe ser para poder seguir en el programa. De lo contrario sigue solicitandola.

var prompt = require('prompt-sync')()

var clave = ''

while(clave != '123') {
<<<<<<< HEAD
    clave = prompt('Ingrese su contrasena para continuar: ' ) 
        console.log('Contrasena incorrecta, reintente nuevamente.') 
}
    console.log('Gracias!')


// ver porque no me pone el Gracias solo cuando es correcta
=======
    clave = prompt('Ingrese su contrasena para continuar: ' )
    console.log('Contrasena incorrecta, reintente nuevamente.')
}
    console.log('Gracias!')
>>>>>>> 44862ded01ffc7549adc06f71b4db29d501e1bc2
