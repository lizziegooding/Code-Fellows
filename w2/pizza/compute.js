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
    t12: [5,9],
    t13: [5,9],
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
// console.log(dPizzas['hillsboro']['t09']);

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

//Constructor object that automatically generates random numbers given a location name
function pizzaStore(places){
  for (var hh = 0; hh < places.length; hh++){
    var store = places[hh];
    var pS = this;
    pS[store] = {};
    var total = 0;
    for (var ii = 0; ii < hours.length; ii++){ //
      var time = hours[ii];
      pS[store][time] = hourStats(dPizzas[store][time], dDeliveries[store][time]);
      total += pS[places[hh]][hours[ii]][0];
    }
    pS[places[hh]]['dailyPizzas'] = total;
  }
};

var pizza3001 = new pizzaStore(locations);
console.log(pizza3001);

//Create a loop the generates data for sales page
function postData(){ //TODO: clean up variable names
  var headers = ['Time','Pizzas','Deliveries','Drivers'];
  //Get reference for parent div element-- one per location
  for (var xx = 0; xx < locations.length; xx++){
    var div = document.getElementById([locations[xx]]);
    //create table, table body, and table head elements
    var table = document.createElement('table');
    var tableHead = document.createElement('thead');
    var tableBody = document.createElement('tbody');
    // Make a single table row (<tr>) to hold table header
    var rowHead = document.createElement('tr');
    //Add table header row
    for (var hh = 0; hh < headers.length; hh++){
      //Create new cell (<td>) for table headers
      var rowHeadCell = document.createElement('td');
      //Create new text node for table header cell
      var rowHeadText = document.createTextNode(headers[hh]);
      //Append header cell text to row header cell
      rowHeadCell.appendChild(rowHeadText);
      //Append header cell to row header
      rowHead.appendChild(rowHeadCell);
    }
    //Append row header to table head
    tableHead.appendChild(rowHead);
    //Begin loop to populate table body
    for (var yy = 0; yy < hours.length; yy++){
      //Create table row, one for each hour
      var bodyRow = document.createElement('tr');
      //Create column head element, one per each hour
      var columnHead = document.createElement('th');
      //Create new text node for column head using the keys from data objects dPizza and dDeliveries
      var columnHeadText = document.createTextNode(hours[yy].slice(-2) + ':00 ');
      //Append column head text to column head cell
      columnHead.appendChild(columnHeadText);
      //Append column head cell to the given row
      bodyRow.appendChild(columnHead);
      //Now that row has he column header we want, loop through to add pizza, deliveries, and drivers cells; limit of 3 in for loop because arrays stored in data objects are length 3
      for (var zz = 0; zz < 3; zz++){
        //Create table cell
        var cell = document.createElement('td');
        //Create table cell text node; will store pizzas, then deliveries, then drivers, one element from the array per iteration of the loop
        var cellText = document.createTextNode(pizza3001[locations[xx]][hours[yy]][zz]);
        //Append cell text to cell
        cell.appendChild(cellText);
        //Append cell to the row
        bodyRow.appendChild(cell);
      }
      //Append row with column header and three body cells to the table body
      tableBody.appendChild(bodyRow);
    }
    //Append table head to table
    table.appendChild(tableHead);
    //Append table body to table
    table.appendChild(tableBody);
    //Append table to parent/containing div
    div.appendChild(table);
  }
};

//function that adds a summary list to the sales page
function postSummary(){
  //Connect to summary element in DOM (<ul>)
  var summary = document.getElementById('summary');
  for (var kk = 0; kk < locations.length; kk++){
    var li = document.createElement('li');
    //access elements in object pizza3001 and create a text node with them
    var liText = document.createTextNode('The ' + locations[kk] + ' store sold ' + pizza3001[locations[kk]]['dailyPizzas'] * 6 + ' pizzas last week, averaging ' + Math.round(pizza3001[locations[kk]]['dailyPizzas'] / hours.length) + ' pizzas per hour.');
    //Append li text to <li> element
    newLi.appendChild(liText);
    //Append li to <ul> element in DOM
    summary.appendChild(li);
  }
}
//Call functions and a write to DOM
postData();
postSummary();
