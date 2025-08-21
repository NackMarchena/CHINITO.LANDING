// Ckru Off 

const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => {
nav.classList.toggle("show");});

let index = 0;
const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

function showSlide(n) {
  slides.forEach((slide, i) => {
    slide.style.display = (i === n) ? "block" : "none";
  });
}

showSlide(index);

next.addEventListener("click", () => {
  index = (index + 1) % slides.length;
  showSlide(index);
});
prev.addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
});

// Auto rotación cada 5 seg
setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 20000);


const video = document.querySelector(".hero-video");
const soundBtn = document.getElementById("sound-toggle");

soundBtn.addEventListener("click", () => {
  if (video.muted) {
    video.muted = false;
    soundBtn.textContent = "🔊"; // cambiar icono
  } else {
    video.muted = true;
    soundBtn.textContent = "🔇";
  }
});



