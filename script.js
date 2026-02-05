/* jshint esversion: 6 */

let currentStep = 1;
let noClickCount = 0;

/* =========================
   STEP NAVIGATION
   ========================= */

function nextStep() {
  const current = document.querySelector(".step.active");
  current.classList.remove("active");

  currentStep++;
  const next = document.getElementById("step" + currentStep);

  if (next) {
    next.classList.add("active");
  }
}

/* =========================
   QUIZ LOGIC WITH FEEDBACK
   ========================= */

function quizCorrect(button) {
  const feedback = button
    .closest(".quiz")
    .querySelector(".feedback");

  feedback.textContent = "Correct answer 💖";
  feedback.className = "feedback correct";

  setTimeout(function () {
    nextStep();
  }, 900);
}

function quizWrong(button) {
  const feedback = button
    .closest(".quiz")
    .querySelector(".feedback");

  feedback.textContent = "Wrong answer, try again 😜";
  feedback.className = "feedback wrong";
}

/* =========================
   CONVINCE FLOW
   ========================= */

function goToConvince() {
  document.getElementById("step9").classList.remove("active");
  document.getElementById("convince").classList.add("active");
}

function backToQuestion() {
  document.getElementById("convince").classList.remove("active");
  document.getElementById("step9").classList.add("active");
}

/* =========================
   NO BUTTON LOGIC
   ========================= */

function noClicked() {
  const noBtn = document.getElementById("noBtn");
  
  noClickCount++;

  if (noClickCount === 1) {
    // First click → playful message
    noBtn.textContent = "Press again to confirm 🙄";
  } else if (noClickCount > 1) {
    // Second click → change to Yes 💕
    noBtn.textContent = "Yes 💕";
    noBtn.onclick = sayYes;
  }
}


/* =========================
   YES FLOW
   ========================= */

function sayYes() {
  document.querySelector(".step.active").classList.remove("active");
  const finalStep = document.getElementById("final");
  finalStep.classList.add("active");
  heartStorm();
  launchConfetti();
}

/* =========================
   FLOATING HEARTS
   ========================= */

const heartsContainer = document.querySelector(".hearts");

function createHeart(speed) {
  const heart = document.createElement("span");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 12 + "px";
  heart.style.animationDuration = speed + "s";
  heartsContainer.appendChild(heart);

  setTimeout(function () {
    heart.remove();
  }, speed * 1000);
}

setInterval(function () {
  createHeart(6);
}, 350);

function heartStorm() {
  for (let i = 0; i < 25; i++) {
    scheduleHeart(i);
  }
}

function scheduleHeart(index) {
  setTimeout(function () {
    createHeart(3);
  }, index * 120);
}

/* =========================
   CONFETTI
   ========================= */

function launchConfetti() {
  for (let i = 0; i < 120; i++) {
    createConfettiPiece();
  }
}

function createConfettiPiece() {
  const confetti = document.createElement("div");
  confetti.style.position = "fixed";
  confetti.style.width = "8px";
  confetti.style.height = "8px";
  confetti.style.background =
    "hsl(" + Math.random() * 360 + ",100%,70%)";
  confetti.style.left =
    Math.random() * window.innerWidth + "px";
  confetti.style.top = "-10px";
  confetti.style.transition =
    "top 2s linear, transform 2s";

  document.body.appendChild(confetti);

  setTimeout(function () {
    confetti.style.top = window.innerHeight + "px";
    confetti.style.transform =
      "rotate(" + Math.random() * 360 + "deg)";
  }, 50);

  setTimeout(function () {
    confetti.remove();
  }, 2200);
}
