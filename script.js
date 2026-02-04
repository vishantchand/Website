// Button interaction
const btn = document.getElementById("magicBtn");
const output = document.getElementById("output");

const messages = [
  "Hii Shivika! 💜",
  "Roses are falling just for you 🌹",
];

btn.addEventListener("click", () => {
  const msg = messages[Math.floor(Math.random() * messages.length)];
  output.textContent = msg;
});

// Falling roses effect
const roseContainer = document.getElementById("rose-container");

function createRose() {
  const rose = document.createElement("div");
  rose.className = "rose";
  rose.textContent = "🌹";

  // Random horizontal position
  rose.style.left = Math.random() * 100 + "vw";

  // Random size
  const size = 16 + Math.random() * 24;
  rose.style.fontSize = size + "px";

  // Random fall duration
  const duration = 6 + Math.random() * 6;
  rose.style.animationDuration = duration + "s";

  roseContainer.appendChild(rose);

  // Remove after animation
  setTimeout(() => {
    rose.remove();
  }, duration * 1000);
}

// Create roses continuously
setInterval(createRose, 400);
