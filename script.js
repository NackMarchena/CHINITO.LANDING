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
