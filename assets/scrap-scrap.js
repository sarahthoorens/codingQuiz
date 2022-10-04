const startButton = document.getElementById('start-button');
const questionSectionElement = document.getElementById('question-section')
const scoreButton = document.getElementById('score-button')
let answerButtonEl = document.getElementById('answer-button')
let countdownClock = document.getElementById('countdown-clock')




let questionsList = [
    {question: 'Commonly used data types do NOT include: ',
    answer1: 'alerts',
    answer2: 'booleans',
    answer3: 'numbers',
    answer4: 'strings',
    correct: 'alerts'
  
},
    {question: 'The condition of an if/else statement is enclosed with: ',
    answer1: 'curly braces',
    answer2: 'parentheses',
    answer3: 'backticks',
    answer4: 'brackets',
    correct: 'parentheses'
    
},
    {question: 'Commonly used data types do NOT include: ',
    answer1: 'curly braces',
    answer2: 'parentheses',
    answer3: 'backticks',
    answer4: 'brackets',
    correct: ''
  
},
    {question: 'Commonly used data types do NOT include: ',
    answer1: 'curly braces',
    answer2: 'parentheses',
    answer3: 'backticks',
    answer4: 'brackets',
    correct: ''
},
    {question: 'Commonly used data types do NOT include: ',
    answer1: 'curly braces',
    answer2: 'parentheses',
    answer3: 'backticks',
    answer4: 'brackets',
    correct: ''
},
    {question: 'Commonly used data types do NOT include: ',
    answer1: 'curly braces',
    answer2: 'parentheses',
    answer3: 'backticks',
    answer4: 'brackets',
    correct: ''
},

]

let questionEl = document.querySelector('#question');
let answer1El = document.querySelector('#answer1');
let answer2El = document.querySelector('#answer2');
let answer3El = document.querySelector('#answer3');
let answer4El = document.querySelector('#answer4');

let questionCounter = 0;


function startGame () {
    startButton.setAttribute('class', 'hidden');
    timer();
    let currentQuestion = questionsList[questionCounter];
    questionEl.textContent = currentQuestion.question;
    console.log(questionEl);
    
    questionSectionElement.setAttribute('class', ' ');
function setNextQuestion (question) {

    answer1El.textContent = currentQuestion.answer1;
    answer2El.textContent = currentQuestion.answer2;
    answer3El.textContent = currentQuestion.answer3;
    answer4El.textContent = currentQuestion.answer4;
    console.log(answer1El)
    
    let correctAnswer = currentQuestion.correct;
    console.log(correctAnswer)
    answerButtonEl.addEventListener('onclick', function (event) { 
    event.preventDefault();
    console.log(event)
    var click = event.click;
    if (answerButtonEl.includes(key)) {
    for (var i = 0; i < currentQuestion.length; i++) {
        console.log(currentQuestion[i]);

    }
    }
});
    if (correctAnswer) {
        console.log(correctAnswer)
        questionCounter++;
        score++;
        startGame();
       }
   else {questionSectionElement.textContent = "wrong!";
   };
}
startButton.addEventListener('click', startGame)

//     let correctAnswer = currentQuestion.correct;
//     let answerButton = document.querySelector('.answerButton') 
//     answerButton.addEventListener("click", function(event) {
//         let element = event.target;
 
//     if(element.matches(correctAnswer)) {
//         questioncounter++
//     }
//     else {
//         wrongMessage.textContent = 'Wrong! Try again.'     
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