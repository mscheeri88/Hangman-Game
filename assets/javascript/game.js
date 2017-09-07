var wins;
var guessRemain;
// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
        function register() {
            var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
            var userGuess = event.key;
            var storeLetter = [];
            var guessedLetters = [];
            guessedLetters.push(userGuess);
            console.log(guessedLetters);
            // Ensure we only handle printable keys
            for (var i = 0; i < 5; i++) {
                storeLetter += userGuess[i];
            }
            return guessedLetters; // <-- to be printed to the div
        }
        document.getElementById('game').innerHTML = register();
    }
    //   
    //   for (var i = 0; i < alphabet.length; i++) {
    //   guessedLetters.push('<span>' + alphabet[i] + '</span>');
    //   $(".element").html(guessedLetters.join(""));
    // Alerts the key the user pressed (userGuess).
    // alert("User guess: " + userGuess);
    // alert("You guessed:" + guessedLetters);
    // Randomly chooses a choice from the options array. This is the Computer's guess.
    //var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    // console.log(alphabet[2]);
    // Looping through each item in the array and logging a message to the console.
    // for (var i = 2; i < zooAnimals.length; i++) {    //started at 3rd position, then condition is (greater i < length is 4) 
    //   console.log("I love " + zooAnimals[i]);
    // }
    // console.log(zooAnimals[0]);
    // console.log(zooAnimals[1]);
    // console.log(zooAnimals[2]);
    // console.log(zooAnimals[3]);