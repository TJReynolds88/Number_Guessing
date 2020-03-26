function letsPlay(){

    var computersNumber = Math.floor(Math.random() * 101); //Computer Picks random Number 1 - 100.

    var usersGuess = prompt(" Please make your first guess 1 - 100.");
    if (usersGuess != null ){
    }
    if (usersGuess == computersNumber) {
        guessedRight = " Your guess was Correct. WAY TO GO!!";
        alert(guessedRight);
        break;
      } else if (computersNumber > 50) {
        guessedWrong = " Your guess was incorrect of " + usersGuess + ". Try again";
        var secondguess = prompt(guessedWrong + " Hint: Its Higher then 50.");
      } else if (computersNumber < 50) {
        guessedWrong = " Your guess was incorrect of " + usersGuess + ". Try again";
        var secondguess = prompt(guessedWrong + " Hint: Its Lower then 50.");
      }

    if(secondguess == computersNumber) {
        alert(guessedRight);
        break;
    } else if (secondguess > computersNumber) {
        guessedWrong = " Your guess was incorrect of " + secondguess + ". Try again";
        var thirdguess = prompt(guessedWrong + " Hint: Your to high");
      } else if (secondguess < computersNumber) {
        var thirdguess = prompt(guessedWrong + " Hint: Your to low");
      }
      if(thirdguess == computersNumber) {
        alert(guessedRight +" It only took you 3 times.");
    } else if (computersNumber%2 == 0) {
        guessedWrong = " Your guess was incorrect of " + thirdguess + ". Try again";
        var fourthguess = prompt(guessedWrong + " Hint: It's a even number");
      } else if (thirdguess < computersNumber) {
        var fourthguess = prompt(guessedWrong + " Hint: It's an odd number");
      }
      if(fourthguess == computersNumber) {
        alert(guessedRight +" It only took you 4 times.");
    } else if (computersNumber > fourthguess) {
        guessedWrong = " All your guesses were incorrect " + fourthguess + ". Last Try";
        var distancefromNum = computersNumber + Math.floor(Math.random() * 11);
        var lastguess = prompt(guessedWrong + " Hint: Your still to low but the number is less then 10 numbers away from" + distancefromNum);
      } else if (fourthguess > computersNumber) {
        var distancefromNum = computersNumber + Math.floor(Math.random() * 11);
        var lastguess = prompt(guessedWrong + " Hint: Your to high but the number is less then 10 numbers away from" + distancefromNum);
      }
      if(lastguess == computersNumber) {
        alert(guessedRight +"Just in the nic of time.");
    } else if (computersNumber != lastguess) {
        guessedWrong = " All your guess were incorrect "  + usersGuess  + " " + secondguess  + " " +  thirdguess  + " " +  fourthguess + " " +   lastguess + " .The correct number was " + computersNumber;
        alert(guessedWrong);
    }
}





//Computer Ask for first Pick

// Checks Pick to see if correct

// Gives Hint if Incorrect

// Gets Second pick
