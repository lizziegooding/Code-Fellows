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
for (xx = 0; xx < imageNames.length; xx++){
  var img = new ImgObj(imageNames[xx]);
  images.push(img);
}

console.log(images);

//Initialize variables to hold index of what's being shown
var currentIndex1 = 0;
var currentIndex2 = 0;
var currentIndex3 = 0;
var totClicks = 0;

//Add event listener for each image
var img1 = document.getElementById('img1');
img1.addEventListener('click',changeImage1);

// var img2 = document.getElementById('img2');
// img2.addEventListener('click',changeImage2);
//
// var img3 = document.getElementById('img3');
// img3.addEventListener('click',changeImage3);

//Show new image; given an index show that image in the DOM
//call random int using show image to show a random image every time
//

function changeImage1(){
  console.log('CLICK');
  //Increment shown property
  images[currentIndex1].incrementClicks();
  console.log(currentIndex1 + ' was clicked ' + images[currentIndex1].clicks + ' times');
  totClicks++;
  showImage1(getRand());
}

function showImage1(index){
  //Store index of current image
  currentIndex1 = index;
  //Display current image
  img1.setAttribute('src', images[index].src);
  //Increment shown property
  images[index].incrementShown();
  console.log(index + ' was shown ' + images[index].shown + ' times');
}

// return a random integer between 0 and images.length - 1
function getRand(){
  return Math.floor(Math.random() * images.length);
}

//Call show image the first time (without event) to populate website with random image
showImage1(getRand());
