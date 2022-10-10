import Splide from "../modules/@splidejs/splide/dist/js/splide.esm";

const splide = new Splide(`.splide`, {
  type: `fade`,
  rewind: true,
  arrows: false,
  pagination: false,
  autoplay: true,
  interval: 5000,
}).mount();

const sections = document.querySelectorAll(`.slider__section`);

sections.forEach((section, i) => {
  section.addEventListener(`click`, function () {
    splide.go(i);
  });
});

splide.on(`move`, (index) => {
  sections.forEach((section) => {
    section.classList.remove(`slider__section--active`);
  });
  sections[index].classList.add(`slider__section--active`);
});

const burger = document.querySelector(`.burger`);
const header = document.querySelector(`.header`);
const slider = document.querySelector(`.slider`);
burger.addEventListener(`click`, function () {
  burger.classList.toggle(`burger--active`);
  header.classList.toggle(`header--overlay`);
  slider.classList.toggle(`slider--down`);
});
