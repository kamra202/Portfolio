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
document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector(".hero-title");
  const text = title.innerText;
  title.innerHTML = "";

  text.split(" ").forEach((word, index) => {
    const span = document.createElement("span");
    span.innerText = word + " ";
    span.style.opacity = 0;
    span.style.display = "inline-block";
    span.style.animation = `fadeUp 0.6s ease forwards`;
    span.style.animationDelay = `${index * 0.12}s`;
    title.appendChild(span);
  });
});
