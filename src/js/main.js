import Splide from "../modules/@splidejs/splide/dist/js/splide.esm";
import IMask from "imask";

const splide = new Splide(`.splide`, {
  type: `fade`,
  rewind: true,
  arrows: false,
  pagination: false,
  autoplay: true,
  interval: 5000,
  cover: true,
  heightRatio: 0.5,
  breakpoints: {
    570: {
      height: 330,
    },
  },
}).mount();

const sections = document.querySelectorAll(`.slider__section`);
const titles = document.querySelectorAll(`.slider__titles`);

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

  titles.forEach((title) => {
    title.classList.remove(`slider__titles--active`);
  });
  titles[index].classList.add(`slider__titles--active`);
});

const burger = document.querySelector(`.burger`);
const header = document.querySelector(`.header`);
burger.addEventListener(`click`, function () {
  burger.classList.toggle(`burger--active`);
  header.classList.toggle(`header--overlay`);
});

const button = document.querySelector(`.cards__button`);
const wrapper = document.querySelector(`.cards__wrapper`);
button.addEventListener(`click`, function () {
  fetch(`https://jsonplaceholder.typicode.com/posts?_start=0&_limit=6`)
    .then((response) => response.json())
    .then((posts) => {
      posts.forEach((post) => {
        wrapper.innerHTML += `<div class="card">
        <img src="img/card1.jpg">
        <h3 class="card__title">BRIDGE</h3>
        <h4 class="card__subtitle">${post.title}</h4>
        <p class="card__description">${post.body}</p>
        <p class="card__posted">Posted by Eugenia, on July 24, 2019</p>
        <div class="card__button">
          <button class="button button--theme-black button--size-big">
              <svg class="icon icon-undefined ">
              <use xlink:href="/symbol/sprite.svg#undefined"></use>
              </svg><span class="button__subject">Continue reading</span>
          </button>
        </div>
      </div>`;
      });
    });
});

const leaveRequests = document.querySelectorAll(`[data-request]`);
const popUp = document.querySelector(`.popUp`);
const body = document.querySelector(`body`);
leaveRequests.forEach((leaveRequest) => {
  leaveRequest.addEventListener(`click`, function () {
    popUp.classList.toggle(`popUp--active`);
    body.classList.add(`body--notScroll`);
  });
});

const closePopUp = document.querySelector(`.popUp__close`);
closePopUp.addEventListener(`click`, function () {
  popUp.classList.remove(`popUp--active`);
  body.classList.remove(`body--notScroll`);
});

const phone = document.getElementById(`phone`);
const maskOptions = {
  mask: `+{7} (000) 000-00-00`,
};
IMask(phone, maskOptions);

const buttonError = document.querySelector(`.popUp__button`);
const fields = document.querySelectorAll(`input, .popUp__question`);
buttonError.addEventListener(`click`, function () {
  let check = 0;
  fields.forEach((field) => {
    if (field.value === ``) {
      field.classList.add(`erroneous`);
    } else {
      field.classList.remove(`erroneous`);
      check += 1;
    }
  });
  if (check === fields.length) {
    popUp.classList.remove(`popUp--active`);
    body.classList.remove(`body--notScroll`);
  }
});
