// Write a callback function and add it as a 'click' event listener on each image. The callback should change the image file that is rendered inside the <img> element. I.e., when the user clicks on an image, the image changes to a different image.

//Array of image names
var imageNames = ['chocolates.jpg',
              'coffee.jpg',
              'flowers.jpg',
              'scone.jpg',
              'bread.jpg',
              'caribou.jpg',
              'cookie.jpg',
              'grapefruit.jpg',
              'jam.jpg',
              'oats.jpg',
              'oven.jpg',
              'picnic.jpg',
              'store.jpg',
              'strawberry.jpg',
              'toast.jpg'];

//Create empty array to hold image objects
images = [];

//Construct objects using images array, push to new object array
function ImgObj(src) {
  this.iName = src.split('.')[0];
  this.src = 'images/' + src;
  this.clicks = 0;
  this.shown = 0;
  this.incrementClicks = function() {
    this.clicks++;
  };
  this.incrementShown = function() {
    this.shown++;
  };
}

//Loop through all file names, construct image object, push to images array
for (var xx = 0; xx < imageNames.length; xx++){
  var img = new ImgObj(imageNames[xx]);
  images.push(img);
}

console.log(images);

//Initialize variables to hold index of what's being shown
var currentIndex1 = 0;
var currentIndex2 = 0;
var currentIndex3 = 0;
var totClicks = 0;

// return a random integer between 0 and images.length - 1
function getRand(){
  return Math.floor(Math.random() * images.length);
}

//Add event listener for each image, image text, and button
var img1 = document.getElementById('img1');
var name1 = document.getElementById('name1');
img1.addEventListener('click',changeImage1);

var img2 = document.getElementById('img2');
var name2 = document.getElementById('name2');
img2.addEventListener('click',changeImage2);

var img3 = document.getElementById('img3');
var name3 = document.getElementById('name3');
img3.addEventListener('click',changeImage3);

var results = document.getElementById('results');
results.addEventListener('click',showResults);
var canvas = document.getElementById('canvas');

var moreGuesses = document.getElementById('moreGuesses');
moreGuesses.addEventListener('click',guessAgain);

var refresh = document.getElementById('refresh');
refresh.addEventListener('click',function (){ window.location.reload(false);});

//Call show image the first time (without event) to populate website with random image
showImage1(getRand());
showImage2(getRand());
showImage3(getRand());

//Listen for click event, increment when clicked
function changeImage1(){
  console.log('CLICK');
  //Increment shown property
  images[currentIndex1].incrementClicks();
  console.log(currentIndex1 + ' was clicked ' + images[currentIndex1].clicks + ' times');
  totClicks++;
  click16(totClicks);
  showImage1(getRand());
}

//Display new image, increment that it was shown
function showImage1(index){
  //Store index of current image
  currentIndex1 = index;
  //Display current image
  img1.setAttribute('src', images[index].src);
  name1.textContent = images[index].iName;
  //Increment shown property
  images[index].incrementShown();
  console.log(index + ' was shown ' + images[index].shown + ' times');
}

//Listen for click event, increment when clicked
function changeImage2(){
  console.log('CLICK');
  //Increment shown property
  images[currentIndex2].incrementClicks();
  console.log(currentIndex2 + ' was clicked ' + images[currentIndex2].clicks + ' times');
  totClicks++;
  click16(totClicks);
  showImage2(getRand());
}

//Display new image, increment that it was shown
function showImage2(index){
  //Store index of current image
  currentIndex2 = index;
  //Display current image
  img2.setAttribute('src', images[index].src);
  name2.textContent = images[index].iName;
  //Increment shown property
  images[index].incrementShown();
  console.log(index + ' was shown ' + images[index].shown + ' times');
}

//Listen for click event, increment when clicked
function changeImage3(){
  console.log('CLICK');
  //Increment shown property
  images[currentIndex3].incrementClicks();
  console.log(currentIndex3 + ' was clicked ' + images[currentIndex3].clicks + ' times');
  totClicks++;
  click16(totClicks);
  showImage3(getRand());
}

//Display new image, increment that it was shown
function showImage3(index){
  //Store index of current image
  currentIndex3 = index;
  //Display current image
  img3.setAttribute('src', images[index].src);
  name3.textContent = images[index].iName;
  //Increment shown property
  images[index].incrementShown();
  console.log(index + ' was shown ' + images[index].shown + ' times');
}

function click16(clicks){
  if (clicks === 16){
    results.style.visibility = 'visible';
    moreGuesses.style.visibility = 'visible';
    img1.removeEventListener('click',changeImage1);
    img2.removeEventListener('click',changeImage2);
    img3.removeEventListener('click',changeImage3);
  }
  else if (clicks === 24){
    showResults();
    img1.removeEventListener('click',changeImage1);
    img2.removeEventListener('click',changeImage2);
    img3.removeEventListener('click',changeImage3);
  }
}

function draw(numArray, labelArray) {
  // **Shamelessly** copied from mob coding, from Chart.js documentation
  var myChart = new Chart(canvas, {
    type: 'bar',
    data: {
      labels: labelArray,
      datasets: [{
        label: '# of Votes',
        data: numArray,
      }]
        // {
        //   type: 'line',
        //   label: 'votes/shown %',
        //   data: pcntArray
        // }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: { beginAtZero:true }
        }]
      }
    }
  });
}

function showResults() {
  console.log('show results running!');
  //Hide results and try again buttons
  results.style.visibility = 'hidden';
  moreGuesses.style.visibility = 'hidden';
  var dataClicks = [];
  var chartLabels = [];
  // var percents = [];
  for (var ii = 0; ii < images.length; ii++) {
    dataClicks.push(images[ii].clicks);
    chartLabels.push(images[ii].iName);
    // percents.push(Math.ceil(Math.random() * 100));
  }
  console.log('Data, clicks: ' + dataClicks);
  console.log('Labels: ' + chartLabels);
  draw(dataClicks, chartLabels);
  refresh.style.visibility = 'visible';
}

// Implement a callback for the "8 More Votes" button; the callback should hide all buttons, then allow 8 more votes. After the 8th extra vote, hide buttons, plot the vote histogram and show the "New Round" button.
function guessAgain(){
  results.style.visibility = 'hidden';
  moreGuesses.style.visibility = 'hidden';
  img1.addEventListener('click',changeImage1);
  img2.addEventListener('click',changeImage2);
  img3.addEventListener('click',changeImage3);
}
