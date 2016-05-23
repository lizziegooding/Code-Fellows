// Write a callback function and add it as a 'click' event listener on each image. The callback should change the image file that is rendered inside the <img> element. I.e., when the user clicks on an image, the image changes to a different image.

//Add event listener for each image
var img1 = document.getElementById('img1');
img1.addEventListener('click',changeImage1);

var img2 = document.getElementById('img2');
img2.addEventListener('click',changeImage2);

//Array of image names
var images = ['chocolates.jpg', 'coffee.jpg', 'flowers.jpg', 'scone.jpg'];

function changeImage1(){
  //Generate randome number between 0 and length of images array - 1
  var index = Math.floor(Math.random() * images.length);
  //Replace shown image
  img1.setAttribute('src', 'images/' + images[index]);
}

function changeImage2(){
  //Generate randome number between 0 and length of images array - 1
  var index = Math.floor(Math.random() * images.length);
  //Replace shown image
  img2.setAttribute('src', 'images/' + images[index]);
}
