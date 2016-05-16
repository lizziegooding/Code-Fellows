function randCalc(min, max){
  var pizzas = Math.floor((Math.random() * (max - min + 1)) + min);
  var drivers = Math.ceil(pizzas / 3);
  console.log(pizzas, drivers);
  var output = [pizzas, drivers];
  return output;
}

console.log(randCalc(2,15));
