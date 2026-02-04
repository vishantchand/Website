const btn = document.getElementById("magicBtn");
const output = document.getElementById("output");

const messages = [
  "Hii Shivika! 💜",
];

btn.addEventListener("click", () => {
  const randomMessage =
    messages[Math.floor(Math.random() * messages.length)];

  output.textContent = randomMessage;
});
