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
var images = [];
//Initialize variables to hold index of what's being shown

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

// return a random integer between 0 and images.length - 1
function getRand(){
  return Math.floor(Math.random() * imageNames.length);
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

//Show charts
var results = document.getElementById('results');
results.addEventListener('click',showResults);
//Canvas 1 is for absolute values
var canvas1 = document.getElementById('canvas1');
//Canvas 2 is for percentages
var canvas2 = document.getElementById('canvas2');

//Give user 8 more votes
var moreGuesses = document.getElementById('moreGuesses');
moreGuesses.addEventListener('click',guessAgain);

//Start proccess again
var refresh = document.getElementById('refresh');
refresh.addEventListener('click',function (){ window.location.reload(false);
  localStorage.totClicks = 0;
});

//***IMAGE 1***Call show image the first time (without event) to populate website with random image. Store that index in local storage
var ri1 = localStorage.currentIndex1;
if (!ri1) { //if app hasn't run yet...
  console.log('first time generating image 1, first time constructing images array');
  ri1 = getRand();
  //Loop through all file names, construct image object, push to images array
  for (var xx = 0; xx < imageNames.length; xx++){
    var img = new ImgObj(imageNames[xx]);
    images.push(img);
  }
  var currentIndex1 = 0;
  var currentIndex2 = 0;
  var currentIndex3 = 0;
  var totClicks = 0;
}
else {
  console.log('getting values from localStorage img 1');
  var imagesBack = JSON.parse(localStorage.images);
  //Loop through all file names, construct image object, push to images array
  for (var ii = 0; ii < imageNames.length; ii++){
    var img = new ImgObj(imageNames[ii]);
    img.clicks = imagesBack[ii].clicks;
    img.shown = imagesBack[ii].shown;
    // console.log(img);
    images.push(img);
  }
  totClicks = localStorage.totClicks;
}
showImage1(ri1);

//***IMAGE 2***Call show image the first time (without event) to populate website with random image. Store that index in local storage
var ri2 = localStorage.currentIndex2;
if (!ri2) { //if app hasn't run yet...
  console.log('first time generating image 2');
  ri2 = getRand();
  //Loop through all file names, construct image object, push to images array
  // for (var xx = 0; xx < imageNames.length; xx++){
  //   var img = new ImgObj(imageNames[xx]);
  //   images.push(img);
  // }
}
// else {
//   console.log('getting values from localStorage img 2');
//   var imagesBack = JSON.parse(localStorage.images);
//   //Loop through all file names, construct image object, push to images array
//   for (var ii = 0; ii < imageNames.length; ii++){
//     var img = new ImgObj(imageNames[ii]);
//     img.clicks = imagesBack[ii].clicks;
//     img.shown = imagesBack[ii].shown;
//     // console.log(img);
//     images.push(img);
//   }
// }
showImage2(ri2);

//*** IMAGE 3 *** Call show image the first time (without event) to populate website with random image. Store that index in local storage
var ri3 = localStorage.currentIndex3;
if (!ri3) { //if app hasn't run yet...
  console.log('first time generating image 3');
  ri3 = getRand();
  //Loop through all file names, construct image object, push to images array
  // for (var xx = 0; xx < imageNames.length; xx++){
  //   var img = new ImgObj(imageNames[xx]);
  //   images.push(img);
  // }
}
// else {
//   console.log('getting values from localStorage img 3');
//   var imagesBack = JSON.parse(localStorage.images);
//   //Loop through all file names, construct image object, push to images array
//   for (var ii = 0; ii < imageNames.length; ii++){
//     var img = new ImgObj(imageNames[ii]);
//     img.clicks = imagesBack[ii].clicks;
//     img.shown = imagesBack[ii].shown;
//     // console.log(img);
//     images.push(img);
//   }
// }
showImage3(ri3);

// console.log('images is currently ' + images.length + ' elements long');
// console.log('clicks so far: ' + totClicks);

//Listen for click event, increment when clicked
function changeImage1(){
  console.log('CLICK');
  //Increment shown property
  images[currentIndex1].incrementClicks();
  console.log(currentIndex1 + ' was clicked ' + images[currentIndex1].clicks + ' times');
  localStorage.images = JSON.stringify(images);

  totClicks++;
  console.log('totClicks = ' + totClicks);
  localStorage.totClicks = totClicks;

  click16(totClicks);

  var ri1 = getRand();
  var ri2 = getRand();
  var ri3 = getRand();
  showImage1(ri1);
  showImage2(ri2);
  showImage3(ri3);
  localStorage.currentIndex1 = ri1;
  localStorage.currentIndex2 = ri2;
  localStorage.currentIndex3 = ri3;
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
  localStorage.images = JSON.stringify(images);
}

//Listen for click event, increment when clicked
function changeImage2(){
  console.log('CLICK');
  //Increment shown property
  images[currentIndex2].incrementClicks();
  console.log(currentIndex2 + ' was clicked ' + images[currentIndex2].clicks + ' times');
  localStorage.images = JSON.stringify(images);

  totClicks++;
  console.log('totClicks = ' + totClicks);
  localStorage.totClicks = totClicks;

  click16(totClicks);

  var ri1 = getRand();
  var ri2 = getRand();
  var ri3 = getRand();
  showImage1(ri1);
  showImage2(ri2);
  showImage3(ri3);
  localStorage.currentIndex1 = ri1;
  localStorage.currentIndex2 = ri2;
  localStorage.currentIndex3 = ri3;
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
  localStorage.images = JSON.stringify(images);
}

//Listen for click event, increment when clicked
function changeImage3(){
  console.log('CLICK');
  //Increment shown property
  images[currentIndex3].incrementClicks();
  //Save to local storage
  localStorage.images = JSON.stringify(images);
  console.log(currentIndex3 + ' was clicked ' + images[currentIndex3].clicks + ' times');
  localStorage.images = JSON.stringify(images);

  totClicks++;
  console.log('totClicks = ' + totClicks);
  localStorage.totClicks = totClicks;

  click16(totClicks);

  var ri1 = getRand();
  var ri2 = getRand();
  var ri3 = getRand();
  showImage1(ri1);
  showImage2(ri2);
  showImage3(ri3);
  localStorage.currentIndex1 = ri1;
  localStorage.currentIndex2 = ri2;
  localStorage.currentIndex3 = ri3;
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
  //Save to local storage
  console.log(index + ' was shown ' + images[index].shown + ' times');
  localStorage.images = JSON.stringify(images);
}

function click16(clicks){
  console.log('check number clicks');
  if (clicks % 16 === 0 && clicks > 0){
    console.log('There have been 16 clicks');
    results.style.visibility = 'visible';
    moreGuesses.style.visibility = 'visible';
    img1.removeEventListener('click',changeImage1);
    img2.removeEventListener('click',changeImage2);
    img3.removeEventListener('click',changeImage3);
  }
  else if (clicks % 24 === 0 && clicks > 0){
    console.log('There have been 24 clicks');
    showResults();
    localStorage.totClicks = 0;
    img1.removeEventListener('click',changeImage1);
    img2.removeEventListener('click',changeImage2);
    img3.removeEventListener('click',changeImage3);
  }
}

function draw(numArray, labelArray1, labelArray2) {
  // **Shamelessly** copied from mob coding, from Chart.js documentation
  var absoluteChart = new Chart(canvas1, {
    type: 'bar',
    data: {
      labels: labelArray1,
      datasets: [{
        label: '# of Votes',
        data: numArray,
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)'
      }]},
        // {
        //   type: 'line',
        //   label: 'votes/shown %',
        //   data: labelArray2
        // }]
    options: {
      scales: {
        yAxes: [{
          ticks: { beginAtZero: true }
        }]
      }
    }
  });
  var percentChart = new Chart(canvas2, {
    type: 'bar',
    data: {
      labels: labelArray1,
      datasets: [{
        label: '% of Votes given # of times Shown',
        data: labelArray2,
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)'
      }]},
    //     {
    //       type: 'line',
    //       label: 'votes/shown %',
    //       data:
    //     }]
    // },
    options: {
      scales: {
        yAxes: [{
          ticks: { beginAtZero: true }
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
  var percLabels = [];
  for (var ii = 0; ii < images.length; ii++) {
    dataClicks.push(images[ii].clicks);
    chartLabels.push(images[ii].iName);
    var percent = Math.round((images[ii].clicks / images[ii].shown) * 100);
    if (isNaN(percent)){
      percent = 0;
    }
    percLabels.push(percent);
  }
  console.log('Data, clicks: ' + dataClicks);
  console.log('Labels: ' + chartLabels);
  console.log('Percent of times shown: ' + percLabels);
  draw(dataClicks, chartLabels, percLabels);
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
