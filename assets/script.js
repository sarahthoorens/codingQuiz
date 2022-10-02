const startButton = document.getElementById('start-button')
const questionSectionElement = document.getElementById('question-section')
startButton.addEventListener('click', startGame())
const questionElement = docucment.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons')



function startGame () {
startButton.classList.add('hidden');
questionSectionElement.classList.remove('hidden');
let questionCounter = 0;
let maxQuestions = 6;
let score = 0;
let availableQuestions = [...questions];
questionElement.innerText = questions.question;
questions.answers.forEach(

getNextQuestion()
}
  
  if(availableQuestions.length === 0 || questionsCounter > maxQuestions) {
      localStorage.setItem('mostRecentScore', score)
  }
  
questionCounter++
question.innerText = currentQuestion.question
questionCounter++
question.innerText = currentQuestion.question


// function showQuestion() {
// 
// 
//     let number = choice.dataset['number'
// choice.innerText=]
//     let button = document.createElement('button')
//     button.innerText = answer.text
//     button.classList.add('btn')

function setNextQuestion() {

}

function selectAnswer () {

}

let questions = [
    {question: 'Commonly used data types do NOT include: ',
       choice1: 'alerts',
       choice1: 'booleans',
       choice1: 'numbers',
       choice1: 'strings',
       answer: 1,
},
    {question: 'The condition of an if/else statement is enclosed with: ',
       choice1: 'curly braces',
       choice1: 'parentheses',
       choice1: 'backticks',
       choice1: 'brackets',
       answer: 2,
},
    {question: 'Commonly used data types do NOT include: ',
       choice1: 'alerts',
       choice1: 'booleans',
       choice1: 'numbers',
       choice1: 'strings',
       answer: 1,
},
    {question: 'Commonly used data types do NOT include: ',
       choice1: 'alerts',
       choice1: 'booleans',
       choice1: 'numbers',
       choice1: 'strings',
       answer: 1,
},
    {question: 'Commonly used data types do NOT include: ',
       choice1: 'alerts',
       choice1: 'booleans',
       choice1: 'numbers',
       choice1: 'strings',
       answer: 1,
},
    {question: 'Commonly used data types do NOT include: ',
       choice1: 'alerts',
       choice1: 'booleans',
       choice1: 'numbers',
       choice1: 'strings',
       answer: 1,
},

]
