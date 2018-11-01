// Dada una palabra, devolver la misma palabra al reves, por ejemplo, si la entrada es "hola", el programa debe devolver "aloh".

function reverseString(str) {
  return str.split("").reverse().join("")
}

console.log(reverseString("string dado vuelta"))