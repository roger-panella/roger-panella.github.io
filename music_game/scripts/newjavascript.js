window.onload = function () {

function intro() {
    var introScreen = document.getElementById('intro');
    var introPar = document.createElement('p');
    introPar.id = 'introParagraph';
    introPar.innerHTML = "Welcome to Spell the Chord, a music theory game.  Each player will get a major or minor chord to spell.  Enter the three notes that make up the chord.  If you're right, you get one point and your turn continues.  If you spell a chord wrong, your turn is over.  First player to get ten points wins.  Ready?";
    introScreen.appendChild(introPar);
    var firstButton = document.getElementById('intro');
    var startButton = document.createElement('button');
    startButton.innerHTML = "Start!";
    startButton.id = 'startButton';
    firstButton.appendChild(startButton);
};
intro();

document.getElementById("startButton").addEventListener("click", function() {
    var removeIntro = document.getElementById('intro');
    removeIntro.remove();
    buildQuestionUI();
});

// // function buildQuestionUI() {
// //   chordQuestion();
// //   textFieldButton();
// //   compareAnswer();
// };

} //end window.onload

function buildQuestionUI() {
  // var c = chordResult();
  chordQuestion();
  textFieldButton();
  compareAnswer();
};

var playerNumber;
var playerOneScore = 0;
var playerTwoScore = 0;
var sharpNotes = ['A','A#','B','C','C#','D','D#','E','F','F#','G','G#'];
var flatNotes = ['A','Bb','B','C','Db','D','Eb','E','F','Gb','G','Ab'];

function getRandomInt(min, max) {   // random integer function
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

var j = getRandomInt(1,2);
var noteSet;
if (j == 1) {                 // random integer to determine whether to use sharpNotes
  var noteSet = sharpNotes;   // or flatNotes
} else if (j == 2) {
  var noteSet = flatNotes;
};
var allNotes = noteSet.length;

function chordQuestion() {
  var c = chordResult();
  console.log('chordQuestion is running');
  var newDiv = document.createElement("div");
  newDiv.id = "chordQuestion";
  var chordQuestion = document.createTextNode("Spell the chord " + c[0] + ' ' + c[3]);
  newDiv.appendChild(chordQuestion);
  var currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
  console.log(c);
};

function textFieldButton() {
  var textInput = document.getElementById('textBoxDiv');
  var textField = document.createElement('input');
  textField.type = 'text';
  textField.id = 'textbox';
  var buttonDiv = document.getElementById('submitButton');
  var theButton = document.createElement('button');
  theButton.id = 'theButton';
  textInput.appendChild(textField);
  buttonDiv.appendChild(theButton);
};

var chordBuilder = {
  buildMinorChord: function () {  // function to create a random minor chord
    var minorChord = [];
    for (var i = parseInt(Math.random() * 11);minorChord.length < 2;i = (i + 3)) {
      minorChord.push(noteSet[i % allNotes]);
      var g = i;
  };
    minorChord.push(noteSet[((g + 4) % allNotes)]);
    console.log(minorChord);
    return minorChord;
  }, buildMajorChord: function () {     // function to create a random major chord
    var majorChord = [];
    for (var i = parseInt(Math.random() * 11);majorChord.length < 2 ;i = (i + 4)) {
    majorChord.push(noteSet[i % allNotes]);
    var g = i;
  };
    majorChord.push(noteSet[((g + 3) % allNotes)]);
    console.log(majorChord);
    return majorChord;
  }
};

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

var c = chordResult();
console.log(c);

function clearBetweenQuestions() {
    var questionClear = document.getElementById("chordQuestion");
    questionClear.parentNode.removeChild(questionClear);
    var textboxClear = document.getElementById("textbox");
    textboxClear.parentNode.removeChild(textboxClear);
    var buttonClear = document.getElementById("theButton");
    buttonClear.parentNode.removeChild(buttonClear);
    var responseClear = document.getElementById("rightOrWrong");
    responseClear.parentNode.removeChild(responseClear);
    // }

    // re-draw

    // if score > high score
    // do something else to show winning screen
};

function delayedClear() {
  timeoutClear = window.setTimeout(clearBetweenQuestions, 1500);
  timeoutLoad = window.setTimeout(buildQuestionUI,3000);
};

function compareAnswer() {   // get answer from textbox, compare, return result
    document.getElementById("theButton").addEventListener("click", function() {
    var userAnswer = document.getElementById("textbox").value;
    var userAnswerUpper = userAnswer.toLocaleUpperCase();
    var userAnswerArray = userAnswerUpper.split(',');
    console.log(userAnswerArray);
    console.log(c);
    if (userAnswerArray[0] == c[0] && userAnswerArray[1] == c[1] && userAnswerArray[2] == c[2]) {
      var rightOrWrong = document.createElement('p');
      rightOrWrong.id = "rightOrWrong";
      var responseText = document.createTextNode('You got it right!  You\'re score is nowLet\'s try another!');
      rightOrWrong.appendChild(responseText);
      var responseDiv = document.getElementById('response');
      responseDiv.appendChild(rightOrWrong);
      console.log(playerOneScore);
    } else if (userAnswerArray[0] != c[0] || userAnswerArray[1] != c[1] || userAnswerArray[2] != c[2]){
      var rightOrWrong = document.createElement('p');
      rightOrWrong.id = "rightOrWrong";
      var responseText = document.createTextNode('Wrong');
      rightOrWrong.appendChild(responseText);
      var responseDiv = document.getElementById('response');
      responseDiv.appendChild(rightOrWrong);
    }
    delayedClear();
    return userAnswerArray;
  });
};
// compareAnswer();
