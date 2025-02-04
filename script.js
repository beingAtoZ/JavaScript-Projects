  alert("Welcome to the Guessing Game, Dumb Edition!");
  alert("Enter q to surrender!");
  while (true) {
    let maximumNum = parseInt(
      prompt(
        "Oi! Enter a maximum number, and make sure it's actually a number:"
      )
    );
   if (!maximumNum || isNaN(maximumNum)) {
      // if the user inputs an invalid choice, the value of maximumNum would be false.
      maximumNum = parseInt(
        prompt("Are you dense? I said a NUMBER! Try again")
      );
    } else {
      let chosenNum = Math.floor(Math.random() * maximumNum + 1);
      let guess = prompt("Take a wild guess (try not to embarrass yourself):");
      let counter = 1;
      if (guess.toLowerCase() == "q") {
        alert("Quit already? LOSER!");
        break;
      }
      while (chosenNum != parseInt(guess)) {
        counter++;
        if (parseInt(guess) < chosenNum) {
          alert("Wow, that's pathetic. Try thinking bigger, genius.");
        } else if (parseInt(guess) > chosenNum) {
          alert("Whoa, slow down there Einstein, go lower.");
        } else if (guess.toLowerCase() == "q") {
          alert("Quit already? LOSER!");
          break;
        } else {
          alert("Wow, how dumb a person can be! A NUMBER!");
        }
        guess = prompt("Guess again, if your tiny brain can handle it:");
      }
      if (parseInt(guess) == chosenNum) {
        alert(
          `Finally! Took you ${counter} tries to get it right. Took you long enough.`
        );
        break;
      }
    }
    break;
  }
