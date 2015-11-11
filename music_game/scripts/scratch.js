window.onload = function () {

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

var thisRoundChord = (function pickMajorMinorChord() {
  var majorMinorInteger = getRandomInt(1,2);

  if (majorMinorInteger == 1) {
    function buildMajorChord() {     // function to create a random major chord
    var majorChord = [];
      for (var i = parseInt(Math.random() * 11);majorChord.length < 2 ;i = (i + 4)) {
        majorChord.push(noteSet[i % allNotes]);
        var g = i;
        }
    majorChord.push(noteSet[((g + 3) % allNotes)]);
    console.log(majorChord);
    return majorChord;
    }
  } else if (majorMinorInteger == 2) {
    function buildMinorChord () {  // function to create a random minor chord
    var minorChord = [];
    for (var i = parseInt(Math.random() * 11);minorChord.length < 2;i = (i + 3)) {
    minorChord.push(noteSet[i % allNotes]);
    var g = i;
    }
    minorChord.push(noteSet[((g + 4) % allNotes)]);
    console.log(minorChord);
    return minorChord;
    }
  }
}(this));
console.log(thisRoundChord);
