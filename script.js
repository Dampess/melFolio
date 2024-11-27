// 1. Menu burger pour la navigation mobile
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
  });
});

// 2. Scroll vers une section précise
const links = document.querySelectorAll("a[href^='#']");
links.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth"
    });
  });
});

// 3. Animation au défilement
const revealElements = document.querySelectorAll(".reveal");
const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    if (position < windowHeight - 100) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
};
window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // Pour activer dès le chargement

// 4. Validation du formulaire en temps réel
const form = document.querySelector("form");
const inputs = document.querySelectorAll("input, textarea");

inputs.forEach(input => {
  input.addEventListener("input", () => {
    if (!input.validity.valid) {
      input.classList.add("invalid");
      input.classList.remove("valid");
    } else {
      input.classList.remove("invalid");
      input.classList.add("valid");
    }
  });
});

form.addEventListener("submit", e => {
  const isValid = [...inputs].every(input => input.validity.valid);
  if (!isValid) {
    e.preventDefault();
    alert("Veuillez corriger les champs en rouge.");
  }
});

// 5. Bouton "Retour en haut"
const backToTop = document.createElement("button");
backToTop.id = "back-to-top";
backToTop.textContent = "↑";
document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    backToTop.classList.add("visible");
  } else {
    backToTop.classList.remove("visible");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// 6. Mise à jour dynamique des années d'expérience
const startYear = 2020; // Année de début d'expérience
const experienceElement = document.querySelector("#experience-years");
if (experienceElement) {
  const currentYear = new Date().getFullYear();
  const years = currentYear - startYear;
  experienceElement.textContent = `${years} ans d'expérience`;
}
