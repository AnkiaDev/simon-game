const simonSequence = [];
const playerSequence = [];
const greenSound = new Audio("./sounds/green.mp3");
const redSound = new Audio("./sounds/red.mp3");
const yellowSound = new Audio("./sounds/yellow.mp3");
const blueSound = new Audio("./sounds/blue.mp3");
const wrongSound = new Audio("./sounds/wrong.mp3");

const simonPlay = () => {
  setTimeout(() => {
    const randomNumb = Math.floor(Math.random() * 4);
    switch (randomNumb) {
      case 0:
        simonSequence.push("green");
        greenSound.play();
        break;
      case 1:
        simonSequence.push("red");
        redSound.play();
        break;
      case 2:
        simonSequence.push("yellow");
        yellowSound.play();
        break;
      case 3:
        simonSequence.push("blue");
        blueSound.play();
        break;
      default:
        console.log("Error");
    }
    console.log("in simonPlay func", simonSequence);
  }, 1000);
};

$(document).keypress(() => {
  simonPlay();
});
