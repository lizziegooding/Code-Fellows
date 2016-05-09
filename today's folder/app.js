// Simple example of an interactive web page
var greeting = document.getElementByID('greeting');

var userName = prompt('What is your dog\'s name?');
greeting.textContent = 'Hello '+userName+'the dog!';
console.log('Woof Woof Woof ' + userName + '!!!!');

console.log('userGame before prompt: ', userGame);
var userGame = prompt('What is your dog\'s game?');
console.log('userGame after prompt: ', userGame);
alert('So, ' + userName + ', I heard your dog likes ' + userGame);

var loveHate = confirm(userName + ' do you love interweb?');
alert('Does ' + userName + ' love bones? ' + loveHate);
