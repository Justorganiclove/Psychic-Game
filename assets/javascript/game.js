var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedSoFar = []

var computersPick = letters[Math.floor(Math.random() * letters.length)];


document.onkeyup = function(event) {
    var playerGuess = event.key;

    //These are here for testing purposes:
    console.log("computersPick: " + computersPick);
    console.log("Player guess: " + playerGuess);
    console.log("Guesses Left: " + guessesLeft);
    console.log("Wins: " + wins);
    console.log("Losses: " + losses);
    console.log("Guesses so far: " + guessedSoFar);
    guessedSoFar.push(playerGuess);


    if (playerGuess === computersPick) {
        wins++;
        alert("Congratulations, you won!")
        function reset(wins) {
            computersPick = letters[Math.floor(Math.random() * letters.length)];
            console.log("ComputersPick after win: " + computersPick)
            guessesLeft = 10;
           
        }
        reset();


    } else {
        losses++;
        guessesLeft--;
        alert("Nope, that's not it. Try again.")
        //Can I call this variable in a more simple way?
        computersPick = letters[Math.floor(Math.random() * letters.length)];
        // here for testing purposes:
        console.log("ComputersPick after loss:" + computersPick)
            if (guessesLeft === 0) {
                guessesLeft = 10;
                guessedSoFar=[];
                losses=0;
                alert("Too many losses in a row, that is bad juju - Let's start with a clean slate")
            }


    };

    var html =
        "<p><strong>Wins</strong>:  " + wins + "</p>" +
        "<p><strong>Losses</strong>:  " + losses + "</p>" +
        "<p><strong>Guesses left</strong>:  " + guessesLeft + "</p>" +
        "<p><strong>You guessed so far</strong>:  " + guessedSoFar + "</p>";

    document.querySelector("#gamecontainer").innerHTML = html;

}