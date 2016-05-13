// Code 201 Day 02
// Demo code for lecture & lab
//Grab element from the DOM for switch and each question to ask the user
var userAction = document.getElementById('quizMe');
var prompt1 = document.getElementById('q1');
var prompt2 = document.getElementById('q2');
var prompt3 = document.getElementById('q3');
var prompt4 = document.getElementById('q4');
var prompt5 = document.getElementById('q5');
var prompt6 = document.getElementById('q6');

//Quiz button. From Stackoverflow question found here: http://stackoverflow.com/questions/1947263/using-an-html-button-to-call-a-javascript-function
/*if (userAction.addEventListener)*/
userAction.addEventListener('click', quizUser, false);

/*For some reason, when I defined this function the other way it always ran twice rather than once. Not three times but twice. Any idea why this is the case? I tried sandboxing it but couldn't find a reason. Even added return at the end of the function */
var quizUser = function(){
  //Keep track of number of correct answers, all questions, and responses to all questions
  var correct = 0;
  var questions = [];
  var answers = [];
  //Get user's name
  var q1Text = prompt1.textContent;
  questions.push(q1Text);
  var userName = prompt(q1Text);
  answers.push(userName);
  console.log('The user\'s name is ' + userName);

  //Ask which city Lizzie studied abroad in
  var cityNames = ['valparaiso', 'valpo', 'valparaiso, chile', 'valparaiso chile'];
  var q2Text = prompt2.textContent;
  questions.push(q2Text);
  var city = prompt(q2Text).toLowerCase();
  console.log(userName + ' thinks Lizzie studied abroad in ' + city);
  if (cityNames.indexOf(city) >= 0){
    alert('Congratulations! Lizzie did study abroad in Valparaiso');
    answers.push(city);
    correct++;
  }
  else {
    alert('Oops! Actually, Lizzie studied aborad in Valparaiso. Let\'s try another question.');
    answers.push(city);
  }

  //Ask if Lizzie knows C++
  var q3Text = prompt3.textContent;
  questions.push(q3Text);
  var skillsC = prompt(q3Text).toLowerCase();
  if (skillsC === 'n'){
    alert('Well done! Lizzie is not proficient in C++.');
    console.log(userName + ' is right, Lizzie doesn\'t know C++');
    answers.push(skillsC);
    correct++;
  } else {
    alert('Oops! Actually, Lizzie is not proficient in C++.');
    console.log(userName + ' is incorrect, Lizzie doesn\'t know C++');
    answers.push(skillsC);
  }

  //Ask if Lizzie knows C++
  var q4Text = prompt4.textContent;
  questions.push(q4Text);
  var skillsID = prompt(q4Text).toLowerCase();
  if (skillsID === 'y'){
    alert('Well done! Lizzie is proficient in Adobe InDesign.');
    console.log(userName + ' is right, Lizzie does know Adobe InDesign');
    answers.push(skillsID);
    correct++;
  } else {
    alert('Oops! Actually, Lizzie is proficient in Adobe InDesign.');
    console.log(userName + ' is incorrect, Lizzie does know Adobe InDesign');
    answers.push(skillsID);
  }

  //Ask what year Lizzie graduated college
  var q5Text = prompt5.textContent;
  questions.push(q5Text);
  var tryAgain = true;
  var numTries = 0;
  while (tryAgain){ //Could have added Number() around prompt once to be more efficient
    var beganCollege = parseInt(prompt(q5Text));
    if (beganCollege === 2010){
      alert('Correct! Lizzie did start school in ' + beganCollege);
      console.log(userName + ' is right, Lizzie did start school in ' + beganCollege);
      answers.push(beganCollege);
      if (numTries === 0){
        correct++;}
      tryAgain = false;
    } else if (beganCollege < 2010){
      alert('Sorry! That answer is too low. Please try again');
      console.log(userName + '\'s guess is too low');
      numTries++;
      answers.push(beganCollege);
    } else if (beganCollege > 2010){
      alert('Sorry! That answer is too high. Please try again');
      console.log(userName + '\'s guess is too high');
      numTries++;
      answers.push(beganCollege);
    } else if (isNaN(beganCollege)){
      alert('Sorry! That is not a numeric answer. Please try again');
      console.log(userName + '\'s guess is not a number');
      numTries++;
      answers.push(beganCollege);
    } else {
      alert('Sorry! I can\'t understand you. Please try again');
      console.log(userName + '\'s guess is not valid');
      numTries++;
      answers.push(beganCollege);
    }
  }

  //Ask Lizzie's major in college
  var q6Text = prompt6.textContent;
  questions.push(q6Text);
  var major = prompt(q6Text).toLowerCase();
  if (major === 'geography'){
    alert('Well done! Lizzie did study Geography in college.');
    console.log(userName + ' is right, Lizzie did study Geography');
    correct++;
    answers.push(major);
  } else {
    alert('Oops! Actually, Lizzie did not study ' + major + '. She actually studied Geography.');
    console.log(userName + ' is incorrect, Lizzie didn\'t study ' + major);
    answers.push(major);
  }

  //Give the user their final score
  alert('You got ' + correct + ' of 5 questions right ' + userName + '! Thanks for taking the quiz');
  console.log('Questions asked during quiz: ' + questions);
  console.log('All answers submitted by user: ' + answers);
  return;
};
