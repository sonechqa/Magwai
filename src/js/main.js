const burger = document.querySelector(`.burger`);
const header = document.querySelector(`.header`);
burger.addEventListener(`click`, function () {
  burger.classList.toggle(`burger--active`);
  header.classList.toggle(`header--overlay`);
});
