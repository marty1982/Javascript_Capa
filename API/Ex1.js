// programa basico que devulve una busqueda a la api de vuelos

var request = require('sync-request');

var res = request('GET', 'http://navi.api.prd.devtrip.com.ar/flights-api/v1/flights/roundtrips?clientKey=2ddffe14f22f63d33a7f&from=BUE&to=MIA&departureDate=2018-11-17&adults=1&children=1&infants=0&cabinClass=economy&returningDate=2018-11-27')

var result = JSON.parse(res.getBody('utf8'));

console.log(result)
