answerButton.addEventListener('click', function(event) {
    let element = event.target;

    if (element.matches("answer-button")) {
        let state = element.getAttribute())
    }
}
    questionCounter ++;
    if (questionCounter < questionsList.length) {
    startGame();
     } 
     else {
        questionSectionElement.classList.add('hidden');
        submitButton.classList.add('hidden');
        startButton.classList.remove('hidden');
        scoreButton.classList.remove('hidden');
        containerElement.innerHTML = 'You\'ve finished the quiz!';
    }
}

 )}

if questionList[answer = ]

let questionCounter = 0;
let score = 0

function selectAnswer () {

}

startButton.addEventListener('onclick', startGame())



let currentQuestion = questionsList[questionCounter];
questionElement.innerHTML = currentQuestion.question;
console.log(questionElement);
answer1Element.innerHTML = currentQuestion.answer1;
answer2Element.innerHTML = currentQuestion.answer2;
answer3Element.innerHTML = currentQuestion.answer3;
answer4Element.innerHTML = currentQuestion.answer4;

 
// 
// let maxQuestions = 6;
// let score = 0;
// let availableQuestions = [...questions];
// questionElement.innerText = questions.question;
// questions.answers.forEach(
// getNextQuestion()


if(availableQuestions.length === 0 || questionsCounter > maxQuestions) {
  localStorage.setItem('mostRecentScore', score)
}

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
index = questionList


}

startButton.classList.add('hidden');
    scoreButton.classList.add('hidden');
    submitButton.classList.remove('hidden');
    questionSectionElement.classList.remove('hidden');
    timer();

    let questionCounter = 0;
    for (i = 0; i < questionsList.length; questionCounter++) {

        let currentQuestion = questionsList[questionCounter];
        questionElement.innerHTML = currentQuestion.question;

        answer1Element.innerHTML = currentQuestion.answer1;
        answer2Element.innerHTML = currentQuestion.answer2;
        answer3Element.innerHTML = currentQuestion.answer3;
        answer4Element.innerHTML = currentQuestion.answer4;


 }

//  let answerChosen = questionsList.answer[n].isCorrect
//  if (answerChosen = false) {
//     wrongMessage();
//     reduceTimer();
//  }
// else {setNextQuestion()}


startButton.addEventListener('onclick', startGame())

function wrongMessage (event) {
    var pElement = document.querySelector("<p>");
    pElement.textContent = "Wrong answer!";
}

function reduceTimer () {
    sec -= 15;
}

function setNextQuestion () {}