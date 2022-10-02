const startButton = document.getElementById('start-button');
const questionSectionElement = document.getElementById('question-section')
const submitButton = document.getElementById('submit-button')
const scoreButton = document.getElementById('score-button')
let questionElement = document.getElementById('question');
let answer1Element = document.getElementById('answer1')
let answer2Element = document.getElementById('answer2')
let answer3Element = document.getElementById('answer3')
let answer4Element = document.getElementById('answer4')
let countdownClock = document.getElementById('countdown-clock')



function timer () { 
var minute = 3;
var sec = 59;
setInterval(function() {
  countdownClock.innerHTML = minute + " : " + sec;
  sec--;
  if (sec == 00) {
    minute --;
    sec = 60;
    if (minute == 0) {
      minute = 3;
    }
  }
}, 1000);
}

let questionsList = [
    {question: 'Commonly used data types do NOT include: ',
    answer1: 'alerts',
    answer2: 'booleans',
    answer3: 'numbers',
    answer4: 'strings',
    answer: answer1,
},
    {question: 'The condition of an if/else statement is enclosed with: ',
    answer1: 'curly braces',
    answer2: 'parentheses',
    answer3: 'backticks',
    answer4: 'brackets',
       answer: answer2,
},
    {question: 'Commonly used data types do NOT include: ',
    answer1: 'curly braces',
    answer2: 'parentheses',
    answer3: 'backticks',
    answer4: 'brackets',
    answer: 2,
},
    {question: 'Commonly used data types do NOT include: ',
    answer1: 'curly braces',
    answer2: 'parentheses',
    answer3: 'backticks',
    answer4: 'brackets',
    answer: 2,
},
    {question: 'Commonly used data types do NOT include: ',
    answer1: 'curly braces',
    answer2: 'parentheses',
    answer3: 'backticks',
    answer4: 'brackets',
    answer: 2,
},
    {question: 'Commonly used data types do NOT include: ',
    answer1: 'curly braces',
    answer2: 'parentheses',
    answer3: 'backticks',
    answer4: 'brackets',
    answer: 2,
},

]

let questionCounter = 0;

function startGame () {
    startButton.classList.add('hidden');
    scoreButton.classList.add('hidden');
    submitButton.classList.remove('hidden');
    questionSectionElement.classList.remove('hidden');
    timer();
    let currentQuestion = questionsList[questionCounter];
    questionElement.innerHTML = currentQuestion.question;
    console.log(questionElement);
    answer1Element.innerHTML = currentQuestion.answer1;
    answer2Element.innerHTML = currentQuestion.answer2;
    answer3Element.innerHTML = currentQuestion.answer3;
    answer4Element.innerHTML = currentQuestion.answer4;
    }

    function selectAnswer () {

    }

    startButton.addEventListener('onclick', startGame())





     
// 
// let maxQuestions = 6;
// let score = 0;
// let availableQuestions = [...questions];
// questionElement.innerText = questions.question;
// questions.answers.forEach(
// getNextQuestion()

  
//   if(availableQuestions.length === 0 || questionsCounter > maxQuestions) {
//       localStorage.setItem('mostRecentScore', score)
//   }

// questionCounter++
// question.innerText = currentQuestion.question
// questionCounter++
// question.innerText = currentQuestion.question


// function showQuestion() {
// 
// 
// let number = choice.dataset['number'
// choice.innerText=]
//     let button = document.createElement('button')
//     button.innerText = answer.text
//     button.classList.add('btn')

function setNextQuestion() {

}

