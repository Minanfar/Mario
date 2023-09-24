const marioImg = document.querySelector("img");
const marioWalk = "./assets/mario-walk.gif";
const marioStop = "./assets/mario-stand.gif";
marioImg.setAttribute("src", "./assets/mario-stand.gif");

let positionX = 0;
let marioSpeed = 20;
const maxX = window.innerWidth;
const minX = 0;
const audioElement = new Audio("./game-bonus-144751.mp3");

window.addEventListener("load", () => {
  audioElement.play();
});

marioImg.style.opacity = "0";
window.addEventListener("click", () => {
  marioImg.style.opacity = "1";
  marioImg.style.cssText = `margin-top: 31%`;
  marioImg.style.transition = "opacity 300ms ease-in-out";
});
function marioMoving(e) {
  if (e.keyCode === 39) {
    marioImg.src = marioWalk;
    positionX += marioSpeed;
    marioImg.style.transform = "scaleX(1)";
    marioImg.style.transform += `translateX(${positionX}px)`;

    if (positionX >= maxX) {
      positionX = 0;
    }
  } else if (e.keyCode === 37) {
    marioImg.src = marioWalk;
    if (positionX <= minX) {
      positionX = maxX;
    } else {
      positionX -= marioSpeed;
    }
    marioImg.style.transform = `scaleX(-1) translateX(${-positionX}px)`;
  }
}

function marioStopped() {
  marioImg.src = marioStop;
}

window.addEventListener("keydown", marioMoving);
window.addEventListener("keyup", marioStopped);
