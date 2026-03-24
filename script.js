// Typing animation for role

const roles = ["Java Developer", "Frontend Developer", "Problem Solver"];

let index = 0;
let charIndex = 0;
let currentRole = "";
let isDeleting = false;

function typeEffect() {
  const element = document.getElementById("typing");

  currentRole = roles[index];

  if (!isDeleting) {
    element.textContent = currentRole.substring(0, charIndex++);
  } else {
    element.textContent = currentRole.substring(0, charIndex--);
  }

  if (!isDeleting && charIndex === currentRole.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % roles.length;
  }

  setTimeout(typeEffect, 100);
}

typeEffect();
