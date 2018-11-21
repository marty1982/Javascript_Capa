// Dada una palabra de 4 letras, devolver todos sus anagramas, Es decir, dada la palabra "hola", devolver:
// hola ohla lhoa hloa olha loha aohl oahl haol ahol ohal hoal hlao lhao ahlo halo laho alho aloh laoh oalh aolh loah olah

function anagrams(str) {
  return str.split("").reverse()
}

console.log(anagrams("hola"))

// continuarlo