
//Create a function which given two minimum and maximum numbers returns a random number
function randCalc(minMaxArray){
  return Math.floor((Math.random() * (minMaxArray[1] - minMaxArray[0] + 1)) + minMaxArray[0]);
}

//Call randCalc function and return an array with pizza, deliveries and drivers information
function hourStats(pizzaArray, deliveryArray){
  var pizzas = randCalc(pizzaArray); //4
  var deliveries = randCalc(deliveryArray); //2
  if (pizzas < deliveries){
    deliveries = pizzas;
    var drivers = Math.ceil(deliveries / 3);
  }
  else {
    var drivers = Math.ceil(deliveries / 3);
  }
  var output = [pizzas, deliveries, drivers];
  return output;
}

//Store pizza minimums and maximums in object
var dPizzas = {
  t8_11am: [0,4],
  t11_2am: [0,7],
  t2_5pm: [2,15],
  t5_8pm: [15,35],
  t8_11pm: [12,31],
  t11_2pm: [5,20]
};

//Store delivery minimums and maximums in object
var dDeliveries = {
  t8_11am: [0,4],
  t11_2am: [0,4],
  t2_5pm: [1,4],
  t5_8pm: [3,8],
  t8_11pm: [5,12],
  t11_2pm: [6,11]
};

function Location(name){
  this.name = name;
  this.t8am = hourStats(dPizzas.t8_11am,dDeliveries.t8_11am);
}

console.log(hourStats(dPizzas.t8_11pm,dDeliveries.t8_11pm));
//Create each location object using literal notation
// var hillsboro = {
//   t8am: randCalc(mktAnalysis.t8_11am),
//   t9am: randCalc(mktAnalysis.t8_11am),
//   t10am: randCalc(mktAnalysis.t8_11am),
//
//   t11am: randCalc(mktAnalysis.t11_2am),
//   t12pm: randCalc(mktAnalysis.t11_2am),
//   t1pm: randCalc(mktAnalysis.t11_2am),
//
//   t2pm: randCalc(mktAnalysis.t2_5pm),
//   t3pm: randCalc(mktAnalysis.t2_5pm),
//   t4pm: randCalc(mktAnalysis.t2_5pm),
//
//   t5pm: randCalc(mktAnalysis.t5_8pm),
//   t6pm: randCalc(mktAnalysis.t5_8pm),
//   t7pm: randCalc(mktAnalysis.t5_8pm),
//
//   t8pm: randCalc(mktAnalysis.t8_11pm),
//   t9pm: randCalc(mktAnalysis.t8_11pm),
//   t10pm: randCalc(mktAnalysis.t8_11pm),
//
//   t11pm: randCalc(mktAnalysis.t11_2pm),
//   t12am: randCalc(mktAnalysis.t11_2pm),
//   t1am: randCalc(mktAnalysis.t11_2pm)
//   // t8_11: [0,4],
//   // t11_2: [0,7],
//   // t2_5: [2,15],
//   // t5_8: [15,35],
//   // t8_11: [12,31],
//   // t11_2: [5,20]
//   // genRandom: function() {
// };
