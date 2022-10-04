let questionsList = [{
    question: "What activities do you enjoy?",
    answers: {
     answer1: "Crowds don't bother me",
     answer2: "I prefer to get off the beaten path",
     answer3: "I don't care either way",
     answer4: "Crowds mean there is something worth looking at",
   }
 },
 {
  question: "What activities do you enjoy?",
  answers: {
   answer1: "Crowds don't bother me",
   answer2: "I prefer to get off the beaten path",
   answer3: "I don't care either way",
   answer4: "Crowds mean there is something worth looking at",
 }
}
];

const questionSectionElement = document.getElementById('question-section')
let questionEl = document.querySelector('#question');
// Convert to an array, so you can use array functions on it
const choice = Array.from(document.getElementsByClassName('answer'));

questionsCounter = 0;

setQuestions = (questionId) => {
  choice.forEach(choice => {
    const number = choice.dataset['number'];
    choice.innerHTML = questionsList[question].answer['answer' + number];
    questionsCounter++;
  });
};

// function setQuestions () {
//   answer.forEach(answer => {
//     const number = answer.dataset['number'];
//     answer.innerHTML = question[questionsCounter].answers['answer' + number];
//     questionsCounter++;
//   });
// };

setQuestions(0)
