/* ===============================
   Portfolio Interactions
   Author: Kashish Kamra
================================ */

/* Smooth scroll for navbar links */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

/* Navbar background on scroll */
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(2,6,23,0.95)";
  } else {
    navbar.style.background = "rgba(2,6,23,0.85)";
  }
});

/* Button hover ripple (Hire Me) */
const hireBtn = document.querySelector(".hire-btn");

if (hireBtn) {
  hireBtn.addEventListener("mouseenter", () => {
    hireBtn.style.boxShadow = "0 0 25px rgba(45,212,191,0.6)";
  });

  hireBtn.addEventListener("mouseleave", () => {
    hireBtn.style.boxShadow = "none";
  });
}

/* ===============================
   HERO TEXT ANIMATION (FIXED)
   Only animates "Hi, I'm"
   Does NOT touch name span
================================ */

document.addEventListener("DOMContentLoaded", () => {
  const heroText = document.querySelector(".hero-text");

  if (!heroText) return;

  const text = heroText.innerText;
  heroText.innerHTML = "";

  text.split(" ").forEach((word, index) => {
    const span = document.createElement("span");
    span.innerText = word + " ";
    span.style.opacity = "0";
    span.style.display = "inline-block";
    span.style.animation = "fadeUp 0.6s ease forwards";
    span.style.animationDelay = `${index * 0.12}s`;
    heroText.appendChild(span);
  });
});
const text = "Kashish Kamra";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    document.querySelector(".typing-name").textContent += text.charAt(i);
    i++;
    setTimeout(typeEffect, 90);
  }
}

typeEffect();
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});