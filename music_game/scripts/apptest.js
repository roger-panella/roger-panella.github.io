window.onload = function () {
//
// var sharpNotes = ['A','A#','B','C','C#','D','D#','E','F','F#','G','G#'];
// var flatNotes = ['A','Bb','B','C','Db','D','Eb','E','F','Gb','G','Ab'];
//
// function getRandomInt(min, max) {   // random integer function
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   };
//
// var j = getRandomInt(1,2);
// var noteSet;
//
// if (j == 1) {                 // random integer to determine whether to use sharpNotes
//   var noteSet = sharpNotes;   // or flatNotes
// } else if (j == 2) {
//   var noteSet = flatNotes;
// };
//
// var allNotes = noteSet.length;



// var thisRoundChord = (function buildMajorChord() {     // function to create a random major chord
//   var majorChord = [];
//   for (var i = parseInt(Math.random() * 11);majorChord.length < 2 ;i = (i + 4)) {
//     majorChord.push(noteSet[i % allNotes]);
//     var g = i;
//   };
//     majorChord.push(noteSet[((g + 3) % allNotes)]);
//     // console.log(majorChord);
//     return majorChord;
//  }(this));
// console.log(thisRoundChord);
//
// var thisRoundChord = (function buildMinorChord () {  // function to create a random minor chord
//   var minorChord = [];
//   for (var i = parseInt(Math.random() * 11);minorChord.length < 2;i = (i + 3)) {
//     minorChord.push(noteSet[i % allNotes]);
//     var g = i;
//   };
//     minorChord.push(noteSet[((g + 4) % allNotes)]);
//     // console.log(minorChord);
//     return minorChord;
// }(this));
// console.log(thisRoundChord);



// var gameLogic.result = pickMajorMinorChord();
// var result = pickMajorMinorChord();
// console.log(result);
} //end window.onload
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

var chordBuilder = {
  buildMinorChord: function () {  // function to create a random minor chord
    var minorChord = [];
    for (var i = parseInt(Math.random() * 11);minorChord.length < 2;i = (i + 3)) {
      minorChord.push(noteSet[i % allNotes]);
      var g = i;
  };
    minorChord.push(noteSet[((g + 4) % allNotes)]);
    // console.log(minorChord);
    return minorChord;
  }, buildMajorChord: function () {     // function to create a random major chord
    var majorChord = [];
    for (var i = parseInt(Math.random() * 11);majorChord.length < 2 ;i = (i + 4)) {
    majorChord.push(noteSet[i % allNotes]);
    var g = i;
  };
    majorChord.push(noteSet[((g + 3) % allNotes)]);
    // console.log(majorChord);
    return majorChord;
  },
};


// var gameLogic = {};


var chordResult = function () {  // function to randomly run either buildMajorChord or buildMinorChord
  var randomInt = getRandomInt(1,2);
  if (randomInt == 1) {
      var chordResult = chordBuilder.buildMajorChord();
      return chordResult;
    } else if (randomInt == 2) {
      chordBuilder.buildMinorChord();
      var chordResult = chordBuilder.buildMinorChord();
      return chordResult;
    }
};
var i = chordResult();
console.log(i);


// pickMajorMinorChord();
// // var gameLogic.result = pickMajorMinorChord();
// var result = pickMajorMinorChord();
// console.log(result);

//
// var thisRoundChord = pickMajorMinorChord(j);
// console.log(thisRoundChord);


// function addChord () {
//   var newDiv = document.createElement("div");
//   var majorMinor = getRandomInt(1,2);
//   if (majorMinor == 1) {
//     var chord = buildMajorChord();
//     var yourChord = document.createTextNode("Spell the chord " + chord[0] + " Major");
//   } else if (majorMinor == 2) {
//     var chord = buildMinorChord();
//     var yourChord = document.createTextNode("Spell the chord " + chord[0] + " Minor");
//   };
//    chordString = chord.join([',']);
//    console.log(chordString);
//    newDiv.appendChild(yourChord);
//    var currentDiv = document.getElementById("div1");
//    document.body.insertBefore(yourChord, currentDiv);
//    console.log(yourChord);
//    var userAnswer = prompt('What is it?');
//    if (userAnswer == chordString) {
//      alert("WINNER!");
//    } else
//      alert("WRONG!");
//    return yourChord;
//   return chord;
// }
// addChord();
// //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// function addChord () {
//   var newDiv = document.createElement("div");
//   var majorMinor = getRandomInt(1,2);
//   if (majorMinor == 1) {
//     var chord = buildMajorChord();
//     var yourChord = document.createTextNode("Spell the chord " + chord[0] + " Major");
//   } else if (majorMinor == 2) {
//     var chord = buildMinorChord();
//     var yourChord = document.createTextNode("Spell the chord " + chord[0] + " Minor");
//   };
//    chordString = chord.join([',']);
//    console.log(chordString);
//    newDiv.appendChild(yourChord);
//    var currentDiv = document.getElementById("div1");
//    document.body.insertBefore(yourChord, currentDiv);
//    console.log(yourChord);
//    var userAnswer = prompt('What is it?');
//    if (userAnswer == chordString) {
//      alert("WINNER!");
//    } else
//      alert("WRONG!");
//    return yourChord;
//   return chord;
// }
// addChord();



// } //end window.onload
