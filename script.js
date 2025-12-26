const slides = [
  "slides/00-index.html",
  "slides/01-what-is-redux-saga.html",
  "slides/02-why-redux-saga.html",
  "slides/03-redux-saga-vs-thunk.html",
  "slides/04-installation.html",
  "slides/05-generator-functions.html",
  "slides/06-effects.html",
  "slides/07-watchers-workers.html",
  "slides/08-error-handling.html",
  "slides/09-cancellation-race.html",
  "slides/10-testing-sagas.html",
  "slides/11-redux-saga-cheat-sheet.html",
  "slides/12-crm-cockpit-usecase.html",
];

let currentSlide = 0;

const app = document.getElementById("app");
const indicator = document.getElementById("indicator");

function loadSlide(index) {
  fetch(slides[index])
    .then((res) => res.text())
    .then((html) => {
      app.innerHTML = html;
      indicator.textContent = `${index + 1} / ${slides.length}`;
    });
}

document.getElementById("nextBtn").onclick = () => {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    loadSlide(currentSlide);
  }
};

document.getElementById("prevBtn").onclick = () => {
  if (currentSlide > 0) {
    currentSlide--;
    loadSlide(currentSlide);
  }
};

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") document.getElementById("nextBtn").click();
  if (e.key === "ArrowLeft") document.getElementById("prevBtn").click();
  if (e.key === "Home") {
    currentSlide = 0;
    loadSlide(currentSlide);
  }
});

// load first slide
loadSlide(currentSlide);

function goToSlide(index) {
  currentSlide = index;
  loadSlide(currentSlide);
}

// window.goToSlide = function (index) {
//   currentSlide = index;
//   loadSlide(currentSlide);
// };
