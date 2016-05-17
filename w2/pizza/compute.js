//**********DATA************//
//Store pizza minimums and maximums in object
var dPizzas = {
  hillsboro: {
    t08: [0,4],
    t09: [0,4],
    t10: [0,4],
    t11: [0,7],
    t12: [0,7],
    t13: [0,7],
    t14: [2,15],
    t15: [2,15],
    t16: [2,15],
    t17: [15,35],
    t18: [15,35],
    t19: [15,35],
    t20: [12,31],
    t21: [12,31],
    t22: [12,31],
    t23: [5,20],
    t00: [5,20],
    t01: [5,20]
  },
  pearl: {
    t08: [1,7],
    t09: [1,7],
    t10: [1,7],
    t11: [5,9],
    t11: [5,9],
    t11: [5,9],
    t14: [2,13],
    t15: [2,13],
    t16: [2,13],
    t17: [18,32],
    t18: [18,32],
    t19: [18,32],
    t20: [5,12],
    t21: [5,12],
    t22: [5,12],
    t23: [8,20],
    t00: [8,20],
    t01: [8,20]
  },
  downtownPDX: {
    t08: [0,4],
    t09: [0,4],
    t10: [0,4],
    t11: [0,7],
    t12: [0,7],
    t13: [0,7],
    t14: [2,15],
    t15: [2,15],
    t16: [2,15],
    t17: [10,26],
    t18: [10,26],
    t19: [10,26],
    t20: [8,22],
    t21: [8,22],
    t22: [8,22],
    t23: [0,8],
    t00: [0,8],
    t01: [0,8]
  },
  buckman: {
    t08: [0,4],
    t09: [0,4],
    t10: [0,4],
    t11: [0,7],
    t12: [0,7],
    t13: [0,7],
    t14: [5,15],
    t15: [5,15],
    t16: [5,15],
    t17: [25,39],
    t18: [25,39],
    t19: [25,39],
    t20: [22,36],
    t21: [22,36],
    t22: [22,36],
    t23: [16,31],
    t00: [16,31],
    t01: [16,31],
  },
  PDXairport: {
    t08: [2,7],
    t09: [2,7],
    t10: [2,7],
    t11: [3,9],
    t12: [3,9],
    t13: [3,9],
    t14: [1,5],
    t15: [1,5],
    t16: [1,5],
    t17: [5,13],
    t18: [5,13],
    t19: [5,13],
    t20: [22,42],
    t21: [22,42],
    t22: [22,42],
    t23: [15,21],
    t00: [15,21],
    t01: [15,21]
  },
  clackamas: {
    t08: [0,4],
    t09: [0,4],
    t10: [0,4],
    t11: [0,7],
    t12: [0,7],
    t13: [0,7],
    t14: [2,15],
    t15: [2,15],
    t16: [2,15],
    t17: [6,19],
    t18: [6,19],
    t19: [6,19],
    t20: [4,8],
    t21: [4,8],
    t22: [4,8],
    t23: [2,5],
    t00: [2,5],
    t01: [2,5]
  }
};

//Store delivery minimums and maximums in object
var dDeliveries = {
  hillsboro: {
    t08: [0,4],
    t09: [0,4],
    t10: [0,4],
    t11: [0,4],
    t12: [0,4],
    t13: [0,4],
    t14: [1,4],
    t15: [1,4],
    t16: [1,4],
    t17: [3,8],
    t18: [3,8],
    t19: [3,8],
    t20: [5,12],
    t21: [5,12],
    t22: [5,12],
    t23: [5,11],
    t00: [5,11],
    t01: [5,11]
  },
  pearl: {
    t08: [1,3],
    t09: [1,3],
    t10: [1,3],
    t11: [2,8],
    t12: [2,8],
    t13: [2,8],
    t14: [1,6],
    t15: [1,6],
    t16: [1,6],
    t17: [3,9],
    t18: [3,9],
    t19: [3,9],
    t20: [1,3],
    t21: [1,3],
    t22: [1,3],
    t23: [6,16],
    t00: [6,16],
    t01: [6,16]
  },
  downtownPDX: {
    t08: [0,4],
    t09: [0,4],
    t10: [0,4],
    t11: [0,4],
    t12: [0,4],
    t13: [0,4],
    t14: [1,4],
    t15: [1,4],
    t16: [1,4],
    t17: [4,6],
    t18: [4,6],
    t19: [4,6],
    t20: [7,15],
    t21: [7,15],
    t22: [7,15],
    t23: [0,2],
    t00: [0,2],
    t01: [0,2]
  },
  buckman: {
    t08: [0,4],
    t09: [0,4],
    t10: [0,4],
    t11: [0,4],
    t12: [0,4],
    t13: [0,4],
    t14: [0,4],
    t15: [0,4],
    t16: [0,4],
    t17: [13,18],
    t18: [13,18],
    t19: [13,18],
    t20: [5,22],
    t21: [5,22],
    t22: [5,22],
    t23: [5,21],
    t00: [5,21],
    t01: [5,21]
  },
  PDXairport: {
    t08: [0,0],
    t09: [0,0],
    t10: [0,0],
    t11: [0,0],
    t12: [0,0],
    t13: [0,0],
    t14: [0,0],
    t15: [0,0],
    t16: [0,0],
    t17: [0,0],
    t18: [0,0],
    t19: [0,0],
    t20: [0,0],
    t21: [0,0],
    t22: [0,0],
    t23: [0,0],
    t00: [0,0],
    t01: [0,0]
  },
  clackamas: {
    t08: [0,4],
    t09: [0,4],
    t10: [0,4],
    t11: [0,4],
    t12: [0,4],
    t13: [0,4],
    t14: [1,4],
    t15: [1,4],
    t16: [1,4],
    t17: [5,9],
    t18: [5,9],
    t19: [5,9],
    t20: [2,5],
    t21: [2,5],
    t22: [2,5],
    t23: [2,4],
    t00: [2,4],
    t01: [2,4]
  }
};

//Use object.key method to return an array of key values from previously defined objects
var hours = Object.keys(dPizzas.hillsboro);
console.log(hours);

//Define locations
var locations = Object.keys(dPizzas);
console.log(locations);
console.log(dPizzas['hillsboro']['t09']);
// var locations = ['hillsboro', 'pearl', 'downtownPDX', 'buckman', 'PDXairport', 'clackamas'];

//******************************GLOBAL FUNCTIONS***********************************//

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
  }
  var drivers = Math.ceil(deliveries / 3);
  var output = [pizzas, deliveries, drivers];
  return output;
}

// Object.prototype.storeData = function() {
//   this.isOn = (! this.isOn);
//   console.log('isOn = ' + this.isOn);
// }
//
// console.log(hourStats([0,2],[4,5]));
// console.log(hourStats(dPizzas['hillsboro']['t08'],dDeliveries['hillsboro']['t08']));

//Constructor object that automatically generates random numbers given a location name
function pizzaStore(places){
  for (var hh = 0; hh < places.length; hh++){
    var store = places[hh];
    console.log(store);
    this[store] = {};
    console.log(this[store]);
    // this[locations[hh]]['name'] = locations[hh];
    var total = 0;
    for (var ii = 0; ii < hours.length; ii++){ //
      var time = hours[ii];
      console.log(typeof(store), typeof(time));
      this[store][time] = hourStats(dPizzas[store][time], dDeliveries[store][time]);
      // this[places[hh]][hours[ii]] = hourStats(dPizzas[places[hh]][hours[ii]], dDeliveries[places[hh]][hours[ii]]);
      total += this[places[hh]][hours[ii]][0];
    }
    this[places[hh]]['dailyPizzas'] = total;
  }
};

var pizza3001 = new pizzaStore(locations);
console.log(pizza3001);

// console.log(hillsboro);
// console.log(hillsboro.shop['t0'][0]);
// console.log(hillsboro.shop.t0[1]);
// console.log(hillsboro.shop.t0[2]);
//  8:00am 0 pizzas, 0 deliveries -- [ driver not recommended ]

//Create a loop the generates data for sales page
// function postData(city, index){
//   var hourIDs = ['t8', 't9', 't10', 't11', 't12', 't13', 't14', 't15', 't16', 't17', 't18', 't19', 't20', 't21', 't22', 't23', 't0', 't1'];
//   for (x = 0; x < hourIDs.length; x++){
//     var newP = document.createElement('p');
//     var newTxt = document.createTextNode(hourIDs[x].slice(-(hourIDs[x].length - 1)) + ':00 ' + hillsboro.shop[hourIDs[x]][0] + ' pizzas, ' + hillsboro.shop[hourIDs[x]][1] + ' deliveries -- [' + hillsboro.shop[hourIDs[x]][2] + ' drivers recommended]');
//     newP.appendChild(newTxt);
//     var place = document.getElementsByTagName('h2')[index]; //TODO: need to have ul/li or parent child relationship for this to work; h2 and p do not have this kind of relationship
//     place.appendChild(newP);
//       // document.getElementById(x).textContent = hillsboro.shop.dailyPizzas + 'pizzas delivered';
//   }
// };

//**********CALL FUNCTIONS, CONNECT TO DOM************//

//Create new location obejects with each of the 6 given locations
// var hillsboro = new Location('hillsboro');
// console.log(hillsboro);
// var pearl = new Location('Pearl');
// var downtownPDX = new Location('Downtown Portland');
// var buckman = new Location('Buckman');
// var PDXairport = new Location('Portland Airport');
// var clackamas = new Location('Clackamas');

//Calculate weekly pizzas
// var weeklyPizzas = (hillsboro.shop.dailyPizzas + pearl.shop.dailyPizzas + downtownPDX.shop.dailyPizzas + buckman.shop.dailyPizzas + PDXairport.shop.dailyPizzas + clackamas.shop.dailyPizzas) * 6;
// console.log(weeklyPizzas);

//Write to the document the total weekly pizzas at all locations
// var totPizzas = document.getElementById('total');
// totPizzas.textContent = weeklyPizzas + ' happy Pizza\'s this week!';

//Call postData function with each location
// postData('hillsboro',0);
// postData('pearl',1);
// postData('downtownPDX',2);
// postData('buckman',3);
// postData('PDXairport',4);
// postData('clackamas',5);

//Write to document object literals
// var basicCrust = document.getElementById('c1');
// basicCrust.textContent = basicRecipe.crust + ' crust is our most popular';
// var specialCrust = document.getElementById('c2');
// specialCrust.textContent = 'But ' + specialRecipe.crust + ' crust is our most special';
