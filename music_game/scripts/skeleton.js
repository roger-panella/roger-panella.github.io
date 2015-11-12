window.onload = function () {

//Add elements and content to Dom
function intro() {
    var introScreen = document.getElementById('intro');
    var introPar = document.createElement('p');
    introPar.id = 'introParagraph';
    introPar.innerHTML = "Ready for a music theory game?  Spell each major or minor chord to get a point.  Get 10 points and you WIN AT CHORDS.  Ready?";
    introScreen.appendChild(introPar);
    var introButton = document.createElement("div");
    introButton.id = "introButton";
    document.getElementById('intro').appendChild(introButton);
    var firstButton = document.getElementById('introButton');
    var startButton = document.createElement('button');
    startButton.innerHTML = "Start Playing";
    startButton.id = 'startButton';
    introButton.appendChild(startButton);
};
intro();

//Start game after user presses "Start" button
document.getElementById("startButton").addEventListener("click", function() {
    var removeIntro = document.getElementById('intro');
    removeIntro.remove();
    buildQuestionUI();
});

} //end window.onload


//Define global variables
var playerOneScore = 8;
var sharpNotes = ['A','A#','B','C','C#','D','D#','E','F','F#','G','G#'];
var flatNotes = ['A','Bb','B','C','Db','D','Eb','E','F','Gb','G','Ab'];

var j;
var allNotes;
var c;

//Random integer function for use in chord building
function getRandomInt(min, max) {   // random integer function
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Run gameplay
function buildQuestionUI() {
  displayScore();
  chordQuestion();
  textFieldButton();
  compareAnswer();
};

// Add player score to DOM
function displayScore() {
  scoreDisplay = document.getElementById('div1');
  var currentScore = document.createTextNode('Your Score: ' + playerOneScore);
  scoreDisplay.appendChild(currentScore);
}

// Formulate the chord question and add to DOM
function chordQuestion() {
  c = chordResult();
  console.log('chordQuestion is running');
  var newDiv = document.createElement("div");
  newDiv.id = "chordQuestion";
  var chordQuestion = document.createTextNode("Spell the chord " + c[0] + ' ' + c[3]);
  newDiv.appendChild(chordQuestion);
  var currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv,currentDiv);
  console.log(c);
};

// Add text input box and button to DOM
function textFieldButton() {
  var textInput = document.getElementById('textBoxDiv');
  var textField = document.createElement('input');
  textField.type = 'text';
  textField.id = 'textbox';
  var buttonDiv = document.getElementById('submitButton');
  var theButton = document.createElement('button');
  theButton.id = 'theButton';
  theButton.innerHTML = 'Check My Answer';
  textInput.appendChild(textField);
  buttonDiv.appendChild(theButton);
};

// Functions for major and minor chord types
var chordBuilder = {
  buildMinorChord: function () {  // function to create a random minor chord
    var minorChord = [];
    j = getRandomInt(1,2);
    if (j == 1) {
      var noteSet = sharpNotes;
    } else {
      var noteSet = flatNotes;
    };
    allNotes = noteSet.length;
    for (var i = parseInt(Math.random() * 11);minorChord.length < 2;i = (i + 3)) {
      minorChord.push(noteSet[i % allNotes]);
      var g = i;
  };
    minorChord.push(noteSet[((g + 4) % allNotes)]);
    console.log(minorChord);
    return minorChord;
  }, buildMajorChord: function () {     // function to create a random major chord
    var majorChord = [];
    var minorChord = [];
    j = getRandomInt(1,2);
    if (j == 1) {
      var noteSet = sharpNotes;
    } else {
      var noteSet = flatNotes;
    };
    allNotes = noteSet.length;
    for (var i = parseInt(Math.random() * 11);majorChord.length < 2 ;i = (i + 4)) {
    majorChord.push(noteSet[i % allNotes]);
    var g = i;
  };
    majorChord.push(noteSet[((g + 3) % allNotes)]);
    console.log(majorChord);
    return majorChord;
  }
};

// Randomly pick major or minor chord
var chordResult = function () {  // function to randomly run either buildMajorChord or buildMinorChord
  var randomInt = getRandomInt(1,2);
  console.log('chordResult is running');
  if (randomInt == 1) {
      console.log('chordResult build a major chord');
      var chordResult = chordBuilder.buildMajorChord();
      chordResult.push('Major');
      return chordResult;
    } else if (randomInt == 2) {
      console.log('chordResult build a minor chord');
      chordBuilder.buildMinorChord();
      var chordResult = chordBuilder.buildMinorChord();
      chordResult.push('Minor');
      return chordResult;
    }
};

// Evaluate user answer and continue gameplay
function compareAnswer() {   // get answer from textbox, compare, return result
    document.getElementById("theButton").addEventListener("click", function() {
    var userAnswer = document.getElementById("textbox").value;
    var answerInString = c.slice(0,3).join();
    var answerInLowerCaseString = answerInString.toLocaleLowerCase();
    var answerInLowerCaseArray = answerInLowerCaseString.split(',');
    var userAnswerArray = userAnswer.split(',');
    var userAnswerArrayinString = userAnswerArray.join();
    var userAnswerInLowerCaseString = userAnswerArrayinString.toLocaleLowerCase();
    var userAnswerInLowerCaseArray = userAnswerInLowerCaseString.split('');
    if (userAnswerInLowerCaseString == answerInLowerCaseString) {
      playerOneScore = playerOneScore + 1;
      var rightOrWrong = document.createElement('p');
      rightOrWrong.id = "rightOrWrong";
      if (playerOneScore < 10) {
      var responseText = document.createTextNode('You got it!  Let\s try another one.')
    } else {
      var responseText = document.createTextNode('BAM! You\'re the chord master.');
    }
      rightOrWrong.appendChild(responseText);
      var responseDiv = document.getElementById('response');
      responseDiv.appendChild(rightOrWrong);
    } else if (userAnswerArray[0] != c[0] || userAnswerArray[1] != c[1] || userAnswerArray[2] != c[2]) {
      var rightOrWrong = document.createElement('p');
      rightOrWrong.id = "rightOrWrong";
      var responseText = document.createTextNode('Sorry, you got that one wrong.  The correct spelling is:  ' + c[0] + ', ' + c[1] + ', ' + c[2] + '.  Let\'s try another one!');
      rightOrWrong.appendChild(responseText);
      var responseDiv = document.getElementById('response');
      responseDiv.appendChild(rightOrWrong);
    }
    delayedClear();
    return userAnswerArray;
  });
};

// Add elements for DOM after user wins game
function winGame(){
  var winMessage = document.createElement('div');
  winMessage.id = "wonGameMessage";
  document.body.insertBefore(winMessage, document.body.firstChild);
  var winningParagraph = document.createElement('p');
  winningParagraph.id = 'winningText';
  winningParagraph.innerHTML = 'You won!  Ready to play again?';
  winMessage.appendChild(winningParagraph);
  var startButton = document.createElement('button');
  startButton.innerHTML = "Start Playing";
  startButton.id = 'startButton';
  winMessage.appendChild(startButton);
  startGameOver();
};

//Clear screen between questions
function clearBetweenQuestions() {
    var questionClear = document.getElementById("chordQuestion");
    questionClear.parentNode.removeChild(questionClear);
    var textboxClear = document.getElementById("textbox");
    textboxClear.parentNode.removeChild(textboxClear);
    var buttonClear = document.getElementById("theButton");
    buttonClear.parentNode.removeChild(buttonClear);
    var responseClear = document.getElementById("rightOrWrong");
    responseClear.parentNode.removeChild(responseClear);
    document.getElementById("div1").innerHTML = "";
};

//Delay screen clears
function delayedClear() {
  timeoutClear = window.setTimeout(clearBetweenQuestions, 2500);
  if (playerOneScore < 10) {
    timeoutLoad = window.setTimeout(buildQuestionUI,2700);
  } else if (playerOneScore = 10) {
    timeoutLoad = window.setTimeout(winGame,2500);
  }
};

//Clear win screen before starting new game
function clearWinScreen() {
  var clearWinText = document.getElementById("wonGameMessage");
  clearWinText.parentNode.removeChild(clearWinText);
  playerOneScore = 0;
  timeoutLoad = window.setTimeout(buildQuestionUI,100);
};

//Start gameplay again after win screen
function startGameOver() {
document.getElementById("startButton").addEventListener("click", function() {
    clearWinScreen();
  });
};
