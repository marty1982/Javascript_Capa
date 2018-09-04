// Dibuja x cantidad de veces en distintas lineas

var prompt = require('prompt-sync')()

var x
var y
var chr

for(x=0; x <30; x++) 
{ for(y=0; y < x; y++) {

chr=chr+("*");
}
 console.log(chr);
 chr=''
}
