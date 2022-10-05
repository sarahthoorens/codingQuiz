// set variables for DOM manipulation 
const startButton = document.getElementById('start-button')
const questionSectionElement = document.getElementById('question-section')
const welcomeElement = document.getElementById('welcome')
const formElement = document.getElementById('form')
const answerButtonsElement = document.getElementById('answer-buttons')
let questionElement = document.getElementById('question')
let answer1Element = document.getElementById('answer1')
let answer2Element = document.getElementById('answer2')
let answer3Element = document.getElementById('answer3')
let answer4Element = document.getElementById('answer4')
let scoreButton = document.getElementById('score-button')
let response = document.getElementById('response')
let scoresList = document.getElementById('scoresList')

//set score to zero
let score = 0
scoreButton.textContent = score

//set countdown and conditions for time changes
let countdownClock = document.getElementById('countdown-clock')
let secondsLeft = 59;

function countdown() {
  let timerInterval = setInterval(function() {
    secondsLeft--;
    countdownClock.innerHTML = secondsLeft + " seconds remain";
    if (secondsLeft <=0 ) {
    endPage();
    }
  }, 1000);
}

// Define questions to iterate through
let questionsList = [
    {
    question: 'Commonly used data types do NOT include: ',
    answers: {
    answer1: 'alerts',
    answer2: 'booleans',
    answer3: 'numbers',
    answer4: 'strings'},
    correct: 'alerts',
},
    {
    question: 'The condition of an if/else statement is enclosed with: ',
    answers: {
    answer1: 'curly braces',
    answer2: 'parentheses',
    answer3: 'backticks',
    answer4: 'brackets'},
    correct: 'parentheses',
},
    {
    question: 'Arrays in JavaScript can be used to store ________. ',
    answers: {
    answer1: 'numbers & strings',
    answer2: 'other arrays',
    answer3: 'booleans',
    answer4: 'all of the above'},
    correct: 'all of the above',
} ,
{
  question: 'String values must be enclosed with _________ when being assigned to variables.',
  answers: {
  answer1: 'semicolons',
  answer2: 'brackets',
  answer3: 'quotes',
  answer4: 'commas'},
  correct: 'quotes',
},
{
  question: 'The correct bash terminal command to check if your local GitHub file is up to date is_________',
  answers: {
  answer1: 'git stash',
  answer2: 'mkdir',
  answer3: 'git status',
  answer4: 'git commit'},
  correct: 'git status',
} 
]


let questionCounter = 0 

// Initialize game
function startGame() {
    startButton.setAttribute('class', 'hidden');
    welcomeElement.children[0].setAttribute('class', 'hidden');
    welcomeElement.children[1].setAttribute('class', 'hidden');
    questionSectionElement.setAttribute('class', 'hidden');
    questionSectionElement.classList.remove('hidden');
    countdown();
    setNextQuestion();
}

startButton.addEventListener('click', startGame)
 
// Function to loop through the next question based on conditions
function setNextQuestion () {
  const currentQuestion = questionsList[questionCounter] 
 
  if (!currentQuestion) {
    secondsLeft===0;
    endPage();

  } else {
    let title = currentQuestion.question;
    questionElement.children[0].textContent = title;
    var choiceOption = currentQuestion.answers
    var choice1 = choiceOption['answer1'];
    var choice2 = choiceOption['answer2'];
    var choice3 = choiceOption['answer3'];
    var choice4 = choiceOption['answer4'];
    answer1Element.textContent = choice1;
      answer1Element.setAttribute('value', choice1);
    answer2Element.textContent = choice2;
      answer2Element.setAttribute('value', choice2);
    answer3Element.textContent = choice3;
      answer3Element.setAttribute('value', choice3);
    answer4Element.textContent = choice4;
      answer4Element.setAttribute('value', choice4);  
    }
}

// Listen for user input/clicks
answer1Element.addEventListener('click', checkAnswer)
answer2Element.addEventListener('click', checkAnswer)
answer3Element.addEventListener('click', checkAnswer)
answer4Element.addEventListener('click', checkAnswer)

// Check user choice against correct answer
function checkAnswer(event) {
  response.textContent = " "
  const currentQuestion = questionsList[questionCounter] 
  const selectedButton = event.target;
  console.log(event.target.textContent);
  const isCorrect = event.target.textContent === currentQuestion.correct; 
  if (isCorrect) { 
  score++;
  console.log(score)
  questionCounter++;
  response.textContent = 'Correct!'
  console.log(questionCounter);
  setNextQuestion();
  }
  else {
  secondsLeft -= 15;
  response.textContent = 'Wrong, try again!';
  }
}

// When time is up or questions are all answered (whichever comes first), display score and request intitials
function endPage() {
  answerButtonsElement.setAttribute('class', 'hidden')
  countdownClock.textContent = 'Time up!';
  countdownClock.setAttribute('class', 'hidden');
  questionSectionElement.textContent = `You're done! \nYour final score is ${score} out of 5.`
  formElement.setAttribute('class', ' ');
} 
submitButton = document.querySelector('#submit');
scoresList.setAttribute('class', ' ');
scoreboard = document.getElementById('scoreboard')

/// Set and retreive scores to the local storage 
// Currently, the function logs the score and initials in local storage, but
// does not successfully render the scores to the page

function renderLastScores() {
  var initials = window.localStorage.getItem('initials');
  var score = local.Storage.getItem('score');

submitButton.addEventListener('click', function(event) {
  event.preventDefault();

  var initials = document.querySelector('#initials').value;
  
  window.localStorage.setItem('initials', initials);
  localStorage.setItem('score', score);
 
  renderLastScores();
})
}



// function getLastScores() {
//   var initials = localStorage.getItem("initials");
//   var score = localStorage.getItem("score");

//   if (!initials || !score) {
//     return;
//   }
//   
// }

// scoreButton.addEventListener('click', function (event) {
//     event.preventDefault();
//     getLastScores();
// });

