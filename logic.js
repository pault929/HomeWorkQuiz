// variables to keep track of quiz state
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

// variables to reference DOM elements
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");

// sound effects
var sfxRight = new Audio("assets/sfx/correct.wav");
var sfxWrong = new Audio("assets/sfx/incorrect.wav");

function startQuiz() {
  // hide start screen
  document.getElementById("start").innerHTML = "Hello World";
}
  // un-hide questions section
  var score = 0;
  
  for (var i= 0; i < questions.length; i++){
    var response = window.title(questions[i].prompt);
    if(response == questions[i].answer){
      score++;
      alert("Correct");
    }else{
      alert ("Wrong!");
    }
   }
   alert("you got " + score + "/" + questions.length);
  // start timer
  function startTimer() {
    setTime();
  
    // We only want to start the timer if totalSeconds is > 0
    var timeleft = 25;

var downloadTimer = setInterval(function function1(){
  document.getElementById("countdown").innerHTML = timeleft + 
"&nbsp"+"seconds remaining";

  timeleft -= 1;
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Time is up!"
  }
}, 1000);

    console.log(countdown);

  // show starting time

  getQuestion();
}

function getQuestion(questions, quizContainer) {
  var output = [];
  var answers;

  for(var i=0; i<questions.lengthh; i++){
    answers =[];

   for(letter in questions[i].answer){
     answer.push(
       '<label>'
       + <input type="radio" name="question'+i+'" value="'+letter+'">'
       + letter + ':'
       + questions[i].answer[letter] +       
       
       '</label>'
     );
   } 
  }

  output.push(
    'div class="question">' + question[i].question +'</div>'
    + '<div class="answers">' + answers.join('') + '</div>'
  );

  // get current question object from array
  // update title with current question
  // clear out any old question choices
  // loop over choices
  // create new button for each choice
  // attach click event listener to each choice
  // display on the page
}

quizContainer.innerHtml = output.join('');
}
showQuestions(questions,quizContainer);





function questionClick() {
  // check if user guessed wrong
  // penalize time
  // display new time on page
  // play "wrong" sound effect
  // else
  // play "right" sound effect
  // flash right/wrong feedback on page for half a second
  // move to next question
  // check if we've run out of questions
  // quizEnd
  // else
  // getQuestion
}

function quizEnd() {
  // stop timer
  // show end screen
  // show final score
  // hide questions section
/* This function stops the interval and also resets secondsElapsed
   and calls "setTime()" which effectively reset the timer
   to the input selections workMinutesInput.value and restMinutesInput.value */
   function stopTimer() {
    secondsElapsed = 0;
    setTime();
    renderTime();
  }
  


}

function clockTick() {
  // update time
  // check if user ran out of time
}

function saveHighscore() {
  // get value of input box
  // make sure value wasn't empty
  // get saved scores from localstorage, or if not any, set to empty array
  // format new score object for current user
  // save to localstorage
  // redirect to next page
}

function checkForEnter(event) {
  // check if event key is enter
  // saveHighscore
}

// user clicks button to submit initials
submitBtn.onclick = saveHighscore;

// user clicks button to start quiz
startBtn.onclick = startQuiz;

initialsEl.onkeyup = checkForEnter;
