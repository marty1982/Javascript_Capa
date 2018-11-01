// Diccionario con foreach

prompt = require('prompt-sync')()

var estudiantes = [
  {
    nombre: 'Martin',
    edad: '35',
    profesion: 'Sistemas',
  },
  {
    nombre: 'Pedro',
    edad: '40',
    profesion: 'Contador',
  },
  {
    nombre: 'Eugenio',
    edad: '22',
    profesion: 'RRHH',
  },
  {
    nombre: 'Sebastian',
    edad: '55',
    profesion: 'Sistemas',
  },
  {
    nombre: 'Juan',
    edad: '26',
    profesion: 'Soporte IT',
  },
  {
    nombre: 'Lucila',
    edad: '33',
    profesion: 'Diseñadora',
  },
  {
    nombre: 'Pablo',
    edad: '52',
    profesion: 'Abogado',
  }
]

console.log('\n1. Listado completo \n2. Por nombre de estudiante \n')
input = prompt('\nSeleccione una opción: ')
console.log('=====================')

if (input == '1') {
    console.log(estudiantes)
} else {
  if (input == '2') {
    persona = prompt('Ingrese el nombre del estudiante: ')
    console.log(estudiantes)
  }
}
