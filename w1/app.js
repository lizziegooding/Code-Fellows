// Code 201 Day 02
// Demo code for lecture & lab

var userAction = document.getElementById("quizMe");
//From Stackoverflow question found here: http://stackoverflow.com/questions/1947263/using-an-html-button-to-call-a-javascript-function
if (userAction.addEventListener)
    userAction.addEventListener("click", quizUser, false);
else if (userAction.attachEvent)
    userAction.attachEvent('onclick', quizUser);

var quizMe = function(){
  var userName = prompt('Thank you for taking this quiz. What is your name?');
  console.log('The user\'s name is ' + userName);
  var city = prompt('Ok ' + userName + ', let\'s begin. In what city did Lizzie study abroad?');
  console.log('The user thinks Lizzie studied abroad in ' + city )
  if (city.toLowerCase() === 'valparaiso'){
    alert('Congratulations! Lizzie did stuy abroad in Valparaiso');
  } else {
    alert('Oops! Actually, Lizzie studied aborad in Valparaiso. Let\'s try another question.');
    }
  }
  var skills = prompt('Yes or No; Lizzie is skilled in C++ (Enter \'Y\' or \'N\')');
  if (skills.toLowerCase() === 'n'){
    alert('Well done! Lizzie is not proficient in C++');
    console.log('The user is right, Lizzie doesn\'t know CSS');
  } else {
    alert('Oops! Actually, Lizzie studied aborad in Valparaiso. Let\'s try another question.');
    console.log('The user is incorrect, Lizzie doesn\'t know CSS');
    }
  }
  console.log('The user thinks Lizzie is ' + city ))
}
var userName = prompt('What is your name?');
console.log('The user said there name is ' + userName);

alert('Hey there ' + userName + ', I\'m going to ask you some questions about me. Please click "ok", then answer Y or N to the next question.');

var numTries = 0;
var keepAsking = true;

while (keepAsking) {
  numTries++;
  var userResponse = prompt('Was, I born on the moon?');
  console.log('userResponse: ' + userResponse);

  if (userResponse.toLowerCase() === 'n' || userResponse.toUpperCase() === 'NO') {
    alert('Nope, I was actualy born on the moon. I\'ma moonian computer language.');
    keepAsking = false;
  } else if (userResponse === 'Y') { // TODO: Make this more robust!
    alert('Nice, I was born on the moon');
    keepAsking = false;
  } else {
    alert('Ooops!, you should have given a Y or N, so you loose this round.');
  }

} // while
