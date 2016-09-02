// Create a function that counts the cars by colors
// With an output like: {red: 3, yellow: 2, white: 1, green: 1}


const cars = [{
    color: 'red',
    type: 'Volvo'
  }, {
    color: 'yellow',
    type: 'VW'
  }, {
    color: 'red',
    type: 'Ferrari'
  }, {
    color: 'white',
    type: 'Tesla'
  }, {
    color: 'yellow',
    type: 'Toyota'
  }, {
    color: 'red',
    type: 'Lada'
  }, {
    color: 'green',
    type: 'Trabant'
}];

function countCarsByColor(cars) {
  var totalByColor = {};
  cars.forEach(function (e) {
    if (e.color in totalByColor) {
      totalByColor[e.color]++;
    } else {
      totalByColor[e.color] = 1;
    }
  });
  return totalByColor;
}

console.log(countCarsByColor(cars));
