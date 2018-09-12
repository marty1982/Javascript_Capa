// Generador random de passwords

var chr = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz"
var str_length = 1

for(i = 0; i < str_length; i++) {
    var pass = Math.random().toString(16).slice(-10)
}

console.log(`Su contraseña nueva es: ${pass}`)

// https://www.w3schools.com/js/js_math.asp