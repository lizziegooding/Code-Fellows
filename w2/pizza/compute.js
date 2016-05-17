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

//Array of Key values for object properties
var hours = [['t8', 't9', 't10'], ['t11', 't12', 't13'], ['t14', 't15', 't16'], ['t17', 't18', 't19'], ['t20', 't21', 't22'], ['t23', 't0', 't1']];

//Constructor object that automatically generates random numbers given a location name
function Location(name){
  this.name = name;
  this.shop = {};
  var total = 0;
  for (i = 0; i < hours.length; i++){ //index / 3 round down
    if (hours[i][0] === 't8'){
      for (j = 0; j < 3; j++){
        this.shop[hours[i][j]] = hourStats(dPizzas.t8_11,dDeliveries.t8_11);
        total += this.shop[hours[i][j]][0];
      }
    }
    else if (hours[i][0] === 't11'){
      for (j = 0; j < 3; j++){
        this.shop[hours[i][j]] = hourStats(dPizzas.t11_14,dDeliveries.t11_14);
        total += this.shop[hours[i][j]][0];
      }
    }
    else if (hours[i][0] === 't14'){
      for (j = 0; j < 3; j++){
        this.shop[hours[i][j]] = hourStats(dPizzas.t14_17,dDeliveries.t14_17);
        total += this.shop[hours[i][j]][0];
      }
    }
    else if (hours[i][0] === 't17'){
      for (j = 0; j < 3; j++){
        this.shop[hours[i][j]] = hourStats(dPizzas.t17_20,dDeliveries.t17_20);
        total += this.shop[hours[i][j]][0];
      }
    }
    else if (hours[i][0] === 't20'){
      for (j = 0; j < 3; j++){
        this.shop[hours[i][j]] = hourStats(dPizzas.t20_23,dDeliveries.t20_23);
        total += this.shop[hours[i][j]][0];
      }
    }
    else if (hours[i][0] === 't23'){
      for (j = 0; j < 3; j++){
        this.shop[hours[i][j]] = hourStats(dPizzas.t23_2,dDeliveries.t23_2);
        total += this.shop[hours[i][j]][0];
      }
    }
    else {
      console.log('ERROR');
    }
  };
  this.shop.dailyPizzas = total;
};

//Using object literal notation
var basicRecipe = {
  tomatoes: 3,
  cheese: 'parmesan',
  crust: 'white'
};

var specialRecipe = {
  tomatoes: 5,
  cheese: 'three cheese blend',
  crust: 'cheesey'
};
// console.log(hillsboro);
// console.log(hillsboro.shop['t0'][0]);
// console.log(hillsboro.shop.t0[1]);
// console.log(hillsboro.shop.t0[2]);
//  8:00am 0 pizzas, 0 deliveries -- [ driver not recommended ]

//Create a loop the generates data for sales page
function postData(city, index){
  var hourIDs = ['t8', 't9', 't10', 't11', 't12', 't13', 't14', 't15', 't16', 't17', 't18', 't19', 't20', 't21', 't22', 't23', 't0', 't1'];
  for (x = 0; x < hourIDs.length; x++){
    var newP = document.createElement('p');
    var newTxt = document.createTextNode(hourIDs[x].slice(-(hourIDs[x].length - 1)) + ':00 ' + hillsboro.shop[hourIDs[x]][0] + ' pizzas, ' + hillsboro.shop[hourIDs[x]][1] + ' deliveries -- [' + hillsboro.shop[hourIDs[x]][2] + ' drivers recommended]');
    newP.appendChild(newTxt);
    var place = document.getElementsByTagName('h2')[index]; //TODO: need to have ul/li or parent child relationship for this to work; h2 and p do not have this kind of relationship
    place.appendChild(newP);
      // document.getElementById(x).textContent = hillsboro.shop.dailyPizzas + 'pizzas delivered';
  }
};

//Create new location obejects with each of the 6 given locations
var hillsboro = new Location('Hillsboro');
var pearl = new Location('Pearl');
var downtownPDX = new Location('Downtown Portland');
var buckman = new Location('Buckman');
var PDXairport = new Location('Portland Airport');
var clackamas = new Location('Clackamas');

//Calculate weekly pizzas
var weeklyPizzas = (hillsboro.shop.dailyPizzas + pearl.shop.dailyPizzas + downtownPDX.shop.dailyPizzas + buckman.shop.dailyPizzas + PDXairport.shop.dailyPizzas + clackamas.shop.dailyPizzas) * 6;
console.log(weeklyPizzas);

//Write to the document the total weekly pizzas at all locations
var totPizzas = document.getElementById('total');
totPizzas.textContent = weeklyPizzas + ' happy Pizza\'s this week!';

//Call postData function with each location
postData('hillsboro',0);
postData('pearl',1);
postData('downtownPDX',2);
postData('buckman',3);
postData('PDXairport',4);
postData('clackamas',5);

//Write to document object literals
var basicCrust = document.getElementById('c1');
basicCrust.textContent = basicRecipe.crust + ' crust is our most popular';
var specialCrust = document.getElementById('c2');
specialCrust.textContent = 'But ' + specialRecipe.crust + ' crust is our most special';
