const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const quotes = document.querySelectorAll(".quote");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Ab 'hann' kr hi di h to baat bhi krlia kro <3";
  // quote.classList.remove("hidden");
  quotes.forEach((quote) => quote.classList.remove("hidden"));
  gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
});

function moveNoBtn() {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}

noBtn.addEventListener("mouseover", moveNoBtn);
noBtn.addEventListener("click", moveNoBtn);
noBtn.addEventListener("touchmove", moveNoBtn);
noBtn.addEventListener("touchstart", moveNoBtn);
