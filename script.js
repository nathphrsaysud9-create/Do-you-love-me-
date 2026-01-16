alert("JS WORKS 💖");
const messages = [
  "Are you sure?",
  "Really sure??",
  "Are you positive?",
  "Pookie please...",
  "Just think about it!",
  "I will be very sad...",
  "Ok fine, I will stop asking...",
  "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
  const noButton = document.querySelector('.no-button');
  const yesButton = document.querySelector('.yes-button');

  document.getElementById("clickSound").play();

  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  const currentSize = parseFloat(getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${currentSize * 1.3}px`;
}

function handleYesClick() {
  document.getElementById("clickSound").play();
  document.getElementById("yaySound").play();

  document.getElementById("questionPage").classList.remove("show");
  document.getElementById("yesPage").classList.add("show");
}
function handleYesClick() {
  document.body.innerHTML = `
    <h1 class="yay">YAY!!! 💕🎉</h1>
    <p>You made my day brighter ✨</p>
    <p>Thank you for saying yes 😊</p>
  `;

  setInterval(createHeart, 300);
}
function createHeart() {
  const heart = document.createElement("div");
  heart.innerText = "💖";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "0";
  heart.style.fontSize = Math.random() * 30 + 20 + "px";
  heart.style.animation = "floatUp 3s linear";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 3000);
}
