# Coding Quiz

Deployment date: 10/4/22</br>
Deployed address: https://sarahthoorens.github.io/codingquiz/</br>
Topics applied: HTML, CSS, JavaScript, local API</br>
Project goal: Create a multiple-choice quiz that includes a timer and keeps score.

## Project Description


### User Story
```
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

### Acceptance Criteria
```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score
```

## Project review

Because this was my first project implementing JavaScript from scratch, I approached it more methodically than prior challenges. 


#### Pseudo-code for question looping

<img src=/assets/images/pseudo-code.png alt='clip of pseudo-code'>


#### Snapshots of the first question including timer and the  end page

<img src=/assets/images/question.png alt='snapshot of first question and timer'>


<img src=/assets/images/wrong-answer.png alt='question with wrong answer prompt'>

<img src=/assets/images/last-page.png alt='last page with final score and initials field'>
</br>
</br>

**Challenges**

I really struggled with implementing a method of looping through my array of questions once User chooses a correct answer. After too many hours spent trying various for-loops, I separated the code into its own function that I called once a conditional was met in the checkAnswer function. This allowed for more readable code that's easier to manipulate. 

**Lessons learned**

Almost every aspect of this challenge was a learning moment. The biggest takeaway, I suppose, is that keeping functions separate can help create a smoother transition based on conditionals. 

I also need to spend more time dissecting the logic of some APIs, like local storage,  which I was unable to successfully implement in this program. Overall, I feel like I've made progress from last week, before I had never touched a js file and I'm optimistic and excited about future progress. 
