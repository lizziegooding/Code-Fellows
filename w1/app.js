//Keep track of number of correct answers, all questions, and responses to all questions
//Grab element from the DOM for switch and each question to ask the user
var userAction = document.getElementById('quizMe');
userAction.addEventListener('click', quizUser, false);
var correct = 0;
var answers = [['valparaiso', 'valpo', 'valparaiso, chile', 'valparaiso chile'], 'n', 'y', 2010, 'geography'];

function quizUser(){
  questionArray();
  question1();
  question2();
  question3();
  question4();
  question5();
  question6();

  //Give the user their final score
  alert('You got ' + correct + ' of 5 questions right ' + userName + '! Thanks for taking the quiz');
  console.log('Questions asked during quiz: ' + questions);
  console.log('All answers submitted by user: ' + answers);
};

function questionArray(){
  questions = [];
  for (var xx = 0; xx < 6; xx++){
    var promptName = document.getElementById('q' + (xx + 1));
    var qText = promptName.textContent;
    questions.push(qText);
  }

}
function question1(){
  userName = prompt(questions[0]);
  console.log('The user\'s name is ' + userName);
  var a1 = document.getElementById('a1');
  a1.textContent = 'Your name is ' + userName;
}

//Ask which city Lizzie studied abroad in
function question2(){
  var city = prompt(questions[1]).toLowerCase();
  console.log(userName + ' thinks Lizzie studied abroad in ' + city);
  var a2 = document.getElementById('a2');
  if (answers[0].indexOf(city) >= 0){
    a2.textContent = 'Congratulations! Lizzie did study abroad in Valparaiso';
    correct++;
  }
  else {
    a2.textContent = 'Oops! Actually, Lizzie studied aborad in Valparaiso. Let\'s try another question.';
  }
}

//Ask if Lizzie knows C++
function question3(){
  var skillsC = prompt(questions[2]).toLowerCase();
  var a3 = document.getElementById('a3');
  if (skillsC === answers[1]){
    a3.textContent = 'Well done! Lizzie is not proficient in C++.';
    console.log(userName + ' is right, Lizzie doesn\'t know C++');
    correct++;
  } else {
    a3.textContent = 'Oops! Actually, Lizzie is not proficient in C++.';
    console.log(userName + ' is incorrect, Lizzie doesn\'t know C++');
  }
}

//Ask if Lizzie knows Adobe InDesign
function question4(){
  var skillsID = prompt(questions[3]).toLowerCase();
  var a4 = document.getElementById('a4');
  if (skillsID === answers[2]){
    a4.textContent = 'Well done! Lizzie is proficient in Adobe InDesign.';
    console.log(userName + ' is right, Lizzie does know Adobe InDesign');
    correct++;
  } else {
    a4.textContent = 'Oops! Actually, Lizzie is proficient in Adobe InDesign.';
    console.log(userName + ' is incorrect, Lizzie does know Adobe InDesign');
  }
}

//Ask what year Lizzie graduated college
function question5(){
  var tryAgain = true;
  var numTries = 0;
  var a5 = document.getElementById('a5');
  while (tryAgain){
    var beganCollege = parseInt(prompt(questions[4]));
    if (beganCollege === answers[3]){
      a5.textContent = 'Correct! Lizzie did start school in ' + beganCollege;
      console.log(userName + ' is right, Lizzie did start school in ' + beganCollege);
      if (numTries === 0){
        correct++;}
      tryAgain = false;
    } else if (beganCollege < answers[3]){
      a5.textContent = 'Sorry! That answer is too low. Please try again';
      console.log(userName + '\'s guess is too low');
      numTries++;
    } else if (beganCollege > answers[3]){
      a5.textContent = 'Sorry! That answer is too high. Please try again';
      console.log(userName + '\'s guess is too high');
      numTries++;
    } else if (isNaN(beganCollege)){
      a5.textContent = 'Sorry! That is not a numeric answer. Please try again';
      console.log(userName + '\'s guess is not a number');
      numTries++;
    } else {
      a5.textContent = 'Sorry! I can\'t understand you. Please try again';
      console.log(userName + '\'s guess is not valid');
      numTries++;
    }
  }
}

function question6(){
  var major = prompt(questions[5]).toLowerCase();
  var a6 = document.getElementById('a6');
  if (major === answers[4]){
    a6.textContent = 'Well done! Lizzie did study Geography in college.';
    console.log(userName + ' is right, Lizzie did study Geography');
    correct++;
  } else {
    a6.textContent = 'Oops! Actually, Lizzie did not study ' + major + '. She actually studied Geography.';
    console.log(userName + ' is incorrect, Lizzie didn\'t study ' + major);
  }
}
