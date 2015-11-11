window.onload = function () {

var sharpNotes = ['A','A#','B','C','C#','D','D#','E','F','F#','G','G#'];
var flatNotes = ['A','Bb','B','C','Db','D','Eb','E','F','Gb','G','Ab'];

function buildMajorChord() {
  var majorChord = [];
  allNotes = sharpNotes.length;
  for (var i = parseInt(Math.random() * 11);majorChord.length < 2 ;i = (i + 4)) {
    // majorChord.push(sharpNotes[i]);
    majorChord.push(sharpNotes[i % allNotes]);
    var g = i;
    console.log(g);
  }
    majorChord.push(sharpNotes[((g + 3) % allNotes)]);
    console.log(majorChord);
}
buildMajorChord(sharpNotes);

} //end window.onload


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
getRandomInt(1,2);
