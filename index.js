let letsPlay = 0;
const simonSequence = [];
const playerSequence = [];

const opacityAnim = (color) => {
  $(`.${color}`)
    .animate({ opacity: "0.5" }, "fast")
    .animate({ opacity: "1" }, "fast");
};

const playSound = (color) => {
  new Audio(`./sounds/${color}.mp3`).play();
};

const simonPlay = () => {
  //empty playerSequence array
  playerSequence.splice(0, playerSequence.length);
  //Display the sequence level
  $(".title-text").text(`Level ${simonSequence.length + 1}`);
  //In one second...
  setTimeout(() => {
    //...choose a number between 0 and 3...
    const randomNumb = Math.floor(Math.random() * 4);
    //...depending on the number...
    switch (randomNumb) {
      //...choose a color square...
      case 0:
        //...add the color of the square to the simonSequence array...
        simonSequence.push("green");
        //...make an animation on the square for the player...
        opacityAnim("green");
        //...and play the sound of the square.
        playSound("green");
        break;
      case 1:
        simonSequence.push("red");
        opacityAnim("red");
        playSound("red");
        break;
      case 2:
        simonSequence.push("yellow");
        opacityAnim("yellow");
        playSound("yellow");
        break;
      case 3:
        simonSequence.push("blue");
        opacityAnim("blue");
        playSound("blue");
        break;
      default:
        console.log("Error");
    }
  }, 1000);
};

// The player press a key, the game begin
$(document).keypress(() => {
  if (letsPlay === 0) {
    // if the game has begun don't call simonPlay() again when keypress
    letsPlay = 1;
    simonPlay();
  }
});

// When player click a square...
$(".square").click(function () {
  const colorClicked = $(this)[0].classList[1];
  //...add the color of the square clicked to the playerSequence array...
  playerSequence.push(colorClicked);
  //...make an animation on the square cliked...
  opacityAnim(colorClicked);
  //...play the sound...
  new Audio(`./sounds/${colorClicked}.mp3`).play();
  //...compare each clicked square color to the simonSequence with a loop...
  for (let i = 0; i < playerSequence.length; i++) {
    //...if the color is not the same...
    if (playerSequence[i] !== simonSequence[i]) {
      //...play the wrong sound...
      playSound("wrong");
      //... display red color to the background...
      $("body").css("background-color", "red");
      setTimeout(() => {
        $("body").css("background-color", "#011f3f");
      }, 200);
      //...display the game over message...
      $(".title-text").text("Game Over, Press Any Key to Restart");
      simonSequence.splice(0, simonSequence.length);
      //...make the keypress work again for begin a new game.
      letsPlay = 0;
      return;
    }
  }
  //If the colors are the same, the game add new color to the simonSequence.
  if (playerSequence.length === simonSequence.length) {
    simonPlay();
  }
});
