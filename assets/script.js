const startButton = document.getElementById('start-button')
const questionSectionElement = document.getElementById('question-section')
startButton.addEventListener('click', startGame);
let questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
let answer1Element = document.getElementById('answer1')
let answer2Element = document.getElementById('answer2')
let answer3Element = document.getElementById('answer3')
let answer4Element = document.getElementById('answer4')

let countdownClock = document.getElementById('countdown-clock')


function timer (min, sec) { 
    var minute = 1;
    var sec = 59;
    setInterval(function() {
      countdownClock.innerHTML = minute + " : " + sec;
      sec--;
      if (sec == 00) {
        minute --;
        sec = 60;
        if (minute == 00) {
          minute = 0;
        }
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
    question: '3Commonly used data types do NOT include: ',
    answers: {
    answer1: 'apples',
    answer2: 'oranges',
    answer3: 'pears',
    answer4: 'grapes'},
    correct: 'oranges',
} 
]

let questionCounter = 0 

function startGame() {
    startButton.setAttribute('class', 'hidden');
    questionSectionElement.setAttribute('class', 'hidden');
    questionSectionElement.classList.remove('hidden');
    timer();
    setNextQuestion();
  }
   


    


    
function checkAnswer(event) {
const currentQuestion = questionsList[questionCounter] 
const selectedButton = event.target;
console.log(event.target.textContent);
console.log(currentQuestion.correct);
const isCorrect = event.target.textContent === currentQuestion.correct; 
if (isCorrect) { 
// score++;
questionCounter++;
console.log(questionCounter);
setNextQuestion();
}
else {
  timer(sec=-15)
}
}

function setNextQuestion () {
  const currentQuestion = questionsList[questionCounter] 
 
  if (!currentQuestion) {
    endPage();
  } else {
    let title = currentQuestion.question;
    questionElement.textContent = title;
    var choiceOption = currentQuestion.answers
    var choice1 = choiceOption['answer1'];
    var choice2 = choiceOption['answer2'];
    var choice3 = choiceOption['answer3'];
    var choice4 = choiceOption['answer4'];
    // console.log(questionElement);
    // let choice1 = currentQuestion.answers.answer1;
    // let choice2 = currentQuestion.answers.answer2;
    // let choice3 = currentQuestion.answers.answer3;
    // let choice4 = currentQuestion.answers.answer4;
    // console.log(answerButtonsElement)
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
 
    startButton.addEventListener('click', startGame)

    // for (var i = 0; i < question.length; i++) {
    //   var choice = answerBtnEl.addEventListener('click', function(event) {
    //     if (choice === currentQuestion.question[i].correct) {
    //       console.log(choice);
    //       score++;
          // startGame;





// var choice =  answerBtnEl.addEventListener('click', selectAnswer)

// function selectAnswer (e) {
//     if (choice === question[i].correct) {
//       score++;
//       startGame;
     
//     }
//     else {questionSectionElement.textContent = "wrong!";}
// }
// }



// const startButton = document.getElementById('start-button');
// const questionSectionElement = document.getElementById('question-section')
// const submitButton = document.getElementById('submit-button')
// const scoreButton = document.getElementById('score-button')
// const containerElement = document.querySelector('.container')
// let questionElement = document.getElementById('question');
// let answer1Element = document.getElementById('answer1')
// let answer2Element = document.getElementById('answer2')
// let answer3Element = document.getElementById('answer3')
// let answer4Element = document.getElementById('answer4')
// let countdownClock = document.getElementById('countdown-clock')



function endPage() {
    countdownClock.textContent = '';
    questionElement.textContent = `You're done!`
    var form = document.createElement('form');
    form.setAttribute('action', ' ');
    form.setAttribute('method', 'get');
    var label = document.createElement('label');
    label.setAttribute('for', 'name');
    label.textContent = 'Enter initials: '
    var inputInitials = document.createElement('input');
    inputInitials.setAttribute('type', 'text');
    var initialsButton = document.createElement('button');
    questionSectionElement.appendChild(form);
    questionSectionElement.appendChild(label);
    questionSectionElement.appendChild(input);
    console.log(inputInitials)
}
// let 
// function highScores() {
//     var listEl = document.createElement("ol");
//     var li1 = document.createElement("li");
//     var li2 = document.createElement("li");
//     var li3 = document.createElement("li");
//     var li4 = document.createElement("li");
//     var li5 = document.createElement("li");
//     var li6 = document.createElement("li");



// }



// // const getSelectedAnswer = () => {
// //     let answers = docucment.querySelectorAll('answerbutton')
// //     let selectedAnswer = false;
// //     if (Element(click, element.id);)
// }

// function getFirstQuestion() { 
//     let questionCounter = 0;
//         let currentQuestion = questionsList[questionCounter];
//         questionElement.textContent = currentQuestion.question;
        
//         answer1Element.textContent = currentQuestion.answer1;
//         answer2Element.textContent = currentQuestion.answer2;
//         answer3Element.textContent = currentQuestion.answer3;
//         answer4Element.textContent = currentQuestion.answer4;
    
//     let possibleAnswers = currentQuestion.answers
// }}


//     }
//     else {
//         donePage()
//     }
   
// })

// function donePage () {

