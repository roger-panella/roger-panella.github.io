# Chord Spelling Game

##Description of Game

The game gives the player chords and the player must "spell out" each chord by entering the notes that makeup the chord.  The game goes to 10.

![chord spelling game screenshot](http://i.imgur.com/6h8vFTz.png)

##Process

The process I followed was as follows:

1. Decide on scope of game
2. Determine functions needed (ie, generate random major chord, generate random minor chord, compare user answer to chord, etc.) and list what pieces would needed to be coded
3. Sketch out visual layout of game
4. Code game

##Technologies Used

1. Javascript
2. SASS
3. A few HTML tags

##Future Improvements

###Needed Before Launch

1. The game starts by randomly picking either an array of all 12 notes with sharps, or with flats.  Then picks a random note to start the chord.  When certain random chord starting notes are picked, the game should switch to the sharp array if it had already picked the flat array.
2. Textbox watermark to show player the accepted input format

###Nice-to-Haves for Game Improvement/Expansion

1. Regex or other method for allowing varied input formats from player (spaces vs. no spaces, commas vs. no commas, etc.)
2. Expanded body of chords (7th chords, diminished chords, etc.
3. Code refactoring (variables put into objects, for example).

##Deviations from Assingment

1. The game is only one-player.  This was done because I didn't have time to make it a two-player game. Though, the game also doesn't really have a need for multi-player capability.
2. Not a lot of objects and constructors.  These probably could have been used in the project and I should get more comfortable with them so I know when they would be useful.








