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
    chordQuestion();
    textFieldButton();
    compareAnswer();
});

} //end window.onload
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
  var newDiv = document.createElement("div");
  var chordQuestion = document.createTextNode("Spell the chord " + i[0] + ' ' + i[3]);
  newDiv.appendChild(chordQuestion);
  var currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
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
  },
};

var chordResult = function () {  // function to randomly run either buildMajorChord or buildMinorChord
  var randomInt = getRandomInt(1,2);
  if (randomInt == 1) {
      var chordResult = chordBuilder.buildMajorChord();
      chordResult.push('Major');
      return chordResult;
    } else if (randomInt == 2) {
      chordBuilder.buildMinorChord();
      var chordResult = chordBuilder.buildMinorChord();
      chordResult.push('Minor');
      return chordResult;
    }
};

var i = chordResult();
console.log(i);

function compareAnswer() {   // get answer from textbox, compare, return result
    document.getElementById("theButton").addEventListener("click", function() {
    var userAnswer = document.getElementById("textbox").value;
    var userAnswerUpper = userAnswer.toLocaleUpperCase();
    var userAnswerArray = userAnswerUpper.split(',');
    console.log(userAnswerArray);
    chordToCompare = i.pop();
    console.log(i);
    if (userAnswerArray[0] == i[0] && userAnswerArray[1] == i[1] && userAnswerArray[2] == i[2]) {
      var rightOrWrong = document.createElement('p');
      rightOrWrong.id = "rightOrWrong";
      var responseText = document.createTextNode('You got it right!  Let\s try another!');
      rightOrWrong.appendChild(responseText);
      var responseDiv = document.getElementById('response');
      responseDiv.appendChild(rightOrWrong);
      playerOneScore = (playerOneScore + 1);
      console.log(playerOneScore);
    } else if (userAnswerArray[0] != i[0] || userAnswerArray[1] != i[1] || userAnswerArray[2] != i[2]){
      var rightOrWrong = document.createElement('p');
      rightOrWrong.id = "rightOrWrong";
      var responseText = document.createTextNode('Wrong');
      rightOrWrong.appendChild(responseText);
      var responseDiv = document.getElementById('response');
      responseDiv.appendChild(rightOrWrong);
    }

    return userAnswerArray;
  });
};
compareAnswer();
