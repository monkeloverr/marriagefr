const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "It's official now!! We are married yayyy!!!";

  gif.src = "sweet.gif";
  gif.style.marginLeft = "80px"; 
});


// Inside your JS code, set the initial position for the noBtn
const yesBtnRect = yesBtn.getBoundingClientRect();

// Set the initial position for the "No" button beside the "Yes" button
const distanceBetweenButtons = 90; // Adjust this value as needed
const verticalOffset = 25; // Value to move the button down

// Set the initial position for the "No" button beside the "Yes" button
noBtn.style.position = "absolute";
noBtn.style.left = `${yesBtnRect.right + distanceBetweenButtons}px`;
noBtn.style.top = `${yesBtnRect.top + verticalOffset}px`; // Adjusted position


// Keep the event listener for the noBtn to allow random movement on hover
noBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});
