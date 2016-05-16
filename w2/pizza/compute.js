
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
  t8_11: [0,4],
  t11_14: [0,7],
  t14_17: [2,15],
  t17_20: [15,35],
  t20_23: [12,31],
  t23_2: [5,20]
};

//Store delivery minimums and maximums in object
var dDeliveries = {
  t8_11: [0,4],
  t11_14: [0,4],
  t14_17: [1,4],
  t17_20: [3,8],
  t20_23: [5,12],
  t23_2: [6,11]
};

var hours = [['t8', 't9', 't10'], ['t11', 't12', 't13'], ['t14', 't15', 't16'], ['t17', 't18', 't19'], ['t20', 't21', 't22'], ['t23', 't0', 't1']];

function Location(name){
  this.name = name;
  this.shop = {};
  for (i = 0; i < hours.length; i++){
    if (hours[i][0] === 't8'){
      for (j = 0; j < 3; j++){
        this.shop[hours[i][j]] = hourStats(dPizzas.t8_11,dDeliveries.t8_11);
      }
    }
    else if (hours[i][0] === 't11'){
      for (j = 0; j < 3; j++){
        this.shop[hours[i][j]] = hourStats(dPizzas.t11_14,dDeliveries.t11_14);
      }
    }
    else if (hours[i][0] === 't14'){
      for (j = 0; j < 3; j++){
        this.shop[hours[i][j]] = hourStats(dPizzas.t14_17,dDeliveries.t14_17);
      }
    }
    else if (hours[i][0] === 't17'){
      for (j = 0; j < 3; j++){
        this.shop[hours[i][j]] = hourStats(dPizzas.t17_20,dDeliveries.t17_20);
      }
    }
    else if (hours[i][0] === 't20'){
      for (j = 0; j < 3; j++){
        this.shop[hours[i][j]] = hourStats(dPizzas.t20_23,dDeliveries.t20_23);
      }
    }
    else if (hours[i][0] === 't23'){
      for (j = 0; j < 3; j++){
        this.shop[hours[i][j]] = hourStats(dPizzas.t23_2,dDeliveries.t23_2);
      }
    }
    else {
      console.log('ERROR');
    }
  };
};

var hillsboro = new Location('Hillsboro');

console.table(hillsboro);
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
