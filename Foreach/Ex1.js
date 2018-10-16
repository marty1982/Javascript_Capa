console.log('\n')
console.log('Ejemplo con un Array normal y un For \n')

var animales = ['perro', 'gato', 'pez']

for (i = 0; i < animales.length; i++) {
  console.log(animales[i])
}

console.log('\n ---------------------------------------------')
console.log('\n')
console.log('Ejemplo con un Array recorrido con Foreach \n')

var animales = ['perro', 'gato', 'pez']

animales.forEach(animal => {
  console.log(animal)
})