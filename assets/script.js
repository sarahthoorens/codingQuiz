const startButton = document.getElementById('start-button')
const questionSectionElement = document.getElementById('question-section')
const welcomeElement = document.getElementById('welcome')
const formElement = document.getElementById('form')
let questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
let answer1Element = document.getElementById('answer1')
let answer2Element = document.getElementById('answer2')
let answer3Element = document.getElementById('answer3')
let answer4Element = document.getElementById('answer4')
let scoreElement = document.getElementById('score-button')


let response = document.getElementById('response')
let score = 0
scoreElement.textContent = score

let countdownClock = document.getElementById('countdown-clock')
let secondsLeft = 59;

function countdown() {
  let timerInterval = setInterval(function() {
    secondsLeft--;
    countdownClock.innerHTML = secondsLeft + " seconds remain";
    if (secondsLeft <=0 ) {
      countdownClock.setAttribute('class', 'hidden');
      endPage();
    }
  }, 1000);
}

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
   
function setNextQuestion () {
  response.setAttribute('class', 'hidden')
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

answer1Element.addEventListener('click', checkAnswer)
answer2Element.addEventListener('click', checkAnswer)
answer3Element.addEventListener('click', checkAnswer)
answer4Element.addEventListener('click', checkAnswer)

function checkAnswer(event) {
  const currentQuestion = questionsList[questionCounter] 
  const selectedButton = event.target;
  console.log(event.target.textContent);
  const isCorrect = event.target.textContent === currentQuestion.correct; 
  if (isCorrect) { 
  score++;
  console.log(score)
  questionCounter++;
  console.log(questionCounter);
  response.children[0].textContent = "Correct";
  setNextQuestion();
  }
  else {
  secondsLeft -= 15;
  response.children[0].textContent = "Wrong. Try again";
  }
  }
 
  function endPage() {
    answerButtonsElement.setAttribute('class', 'hidden')
    countdownClock.textContent = 'Time up!';
    questionSectionElement.textContent = `You're done! \nYour final score is ${score} out of 5.`
    formElement.setAttribute('class', 'block');


  } 
    

var highscore = 0
var storedHighScore = localStorage.getItem("highscore");
if (storedHighScore  || score > parseInt(storedHighScore)) {
  localStorage.setItem("highscore", score);
}
function highScores() {
    var listEl = document.createElement("ol");
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");
    var li4 = document.createElement("li");
    var li5 = document.createElement("li");
    form.addEventListener('submit', (event) => {
    
    });

}

/////////////////////////
// var student = document.getElementById("student-names");
// var grade = document.getElementById("grades");
// var comment = document.getElementById("msg");
// var saveButton = document.getElementById("save");
// var savedName = document.getElementById("saved-name");

// function saveLastGrade() {
//   // Save related form data as an object
//   var studentGrade = {
//     student: student.value,
//     grade: grade.value,
//     comment: comment.value.trim()
//   };
//   // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
//   localStorage.setItem("studentGrade", JSON.stringify(studentGrade));
// }

// function renderLastGrade() {
//   // Use JSON.parse() to convert text to JavaScript object
//   var lastGrade = JSON.parse(localStorage.getItem("studentGrade"));
//   // Check if data is returned, if not exit out of the function
//   if (lastGrade !== null) {
//   document.getElementById("saved-name").innerHTML = lastGrade.student;
//   document.getElementById("saved-grade").innerHTML = lastGrade.grade;
//   document.getElementById("saved-comment").innerHTML = lastGrade.comment;
//   } else {
//     return;
//   }
// }

// saveButton.addEventListener("click", function(event) {
// event.preventDefault();
// saveLastGrade();
// renderLastGrade();
// });

// // The init() function fires when the page is loaded 
// function init() {
//   // When the init function is executed, the code inside renderLastGrade function will also execute
//   renderLastGrade();
// }
// init();
