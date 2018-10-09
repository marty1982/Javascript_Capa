// Itinerar un Array con for anidado 

var peliculas = [['terminator', 1984], ['back to the future', 1985], ['robocop', 1989], ['superman', 1987], ['batman', 1991]]


for (i = 0; i < peliculas.length; i++) {  // loopeo del array externo
  var innerArrayLength = peliculas[i].length  // obtiene el tamaño del array interno
  for (j = 0; j < innerArrayLength; j++) {  // loopeo del array interno
    console.log('[' + i + ',' + j + '] = ' + peliculas[i][j])
  }
}