//generate number
const generateRandomNum = () => {
  return Math.floor(Math.random() * 20) + 1;
};

//variables
const playerGuessNum = document.querySelector(".game--input");
const playerSubmitBtn = document.querySelector(".game--btn");
const tryCounterNumEl = document.querySelector(".try--counter__num");
const randomNumDisplayContainer = document.querySelector(
  ".random--num__display"
);
const resetBtnEl = document.querySelector(".reset--btn");

let randomNumDisplayEl = document.querySelector(".random--display");
let randomNumber = generateRandomNum();
let triesPlayerCounter = 5;

//button handler
playerSubmitBtn.addEventListener("click", (e) => {
  //prevent default behaviour
  e.preventDefault();

  //player input
  let { value: guessNum } = playerGuessNum;

  //check if guessnum is empty
  if (!guessNum) {
    alert("Input is empty!");
  } else {
    //compare guess num with randonNumber
    if (parseInt(guessNum) === randomNumber) {
      //display answer
      randomNumDisplayEl.textContent = randomNumber;

      //change to winning color
      randomNumDisplayContainer.classList.remove("initial--color__style");

      randomNumDisplayContainer.classList.add("win--color__style");

      //empty input
      playerGuessNum.value = "";
    } else if (parseInt(guessNum) > randomNumber) {
      //greater than entity symbol
      randomNumDisplayEl.innerHTML = "&#60;";

      //decrement tries
      triesPlayerCounter = triesPlayerCounter - 1;

      //update player tries counter
      tryCounterNumEl.textContent = triesPlayerCounter;

      //check if tries is 0
      if (triesPlayerCounter === 0) {
        alert("You failed to guess the number!");

        //display reset tries counter
        tryCounterNumEl.textContent = triesPlayerCounter;

        //change to lossing color
        randomNumDisplayContainer.classList.remove("initial--color__style");

        randomNumDisplayContainer.classList.add("lost--color__style");

        //display random number
        randomNumDisplayEl.textContent = randomNumber;

        //empty input
        playerGuessNum.value = "";
      }
    } else if (parseInt(guessNum) < randomNumber) {
      //less than entity symbol
      randomNumDisplayEl.innerHTML = "&#62;";

      //decrement tries
      triesPlayerCounter = triesPlayerCounter - 1;

      //update player tries counter
      tryCounterNumEl.textContent = triesPlayerCounter;

      //check if tries is 0
      if (triesPlayerCounter === 0) {
        alert("You failed to guess the number!");

        //display reset tries counter
        tryCounterNumEl.textContent = triesPlayerCounter;

        //change to lossing color
        randomNumDisplayContainer.classList.remove("initial--color__style");

        randomNumDisplayContainer.classList.add("lost--color__style");

        //display random number
        randomNumDisplayEl.textContent = randomNumber;

        //empty input
        playerGuessNum.value = "";
      }
    }
  }
});

resetBtnEl.addEventListener("click", (e) => {
  e.preventDefault();

  //generate new random number
  randomNumber = generateRandomNum();

  //rest game logic
  triesPlayerCounter = 5;

  //display reset tries counter
  tryCounterNumEl.textContent = triesPlayerCounter;

  //reset to initial text
  randomNumDisplayEl.textContent = "?";

  //reset to initial color text
  randomNumDisplayContainer.classList.add("initial--color__style");

  randomNumDisplayContainer.classList.remove("lost--color__style");
});
