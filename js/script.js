import slider from "./modules/slider.js";
import tabs from "./modules/tabs.js";

import { persons } from "./modules/personsData.js";

window.addEventListener("DOMContentLoaded", () => {
  // burger menu
  const btnBurger = document.querySelector(".burger-menu__btn");
  btnBurger.addEventListener("click", function () {
    this.classList.toggle("active");
    if (btnBurger.classList.contains("active")) {
      btnBurger.style.backgroundColor = "rgba(122, 93, 235, 0.85)";
      btnBurger.textContent = "X";
      btnBurger.style.color = "white";
      btnBurger.style.background = "inherit";
      btnBurger.style.maxWidth = 10 + "px";
      btnBurger.style.position = "fixed";
      btnBurger.style.top = "0";
      btnBurger.style.right = "0";
      btnBurger.style.padding = "10px 20px";
      btnBurger.style.border = "none";
    } else if (!btnBurger.classList.contains("active")) {
      btnBurger.textContent = "MENU";
      btnBurger.style.position = "inherit";
      btnBurger.style.backgroundColor = "rgba(164, 151, 243, 0.75)";
      btnBurger.style.color = "inherit";
      btnBurger.style.maxWidth = 250 + "px";
      btnBurger.style.border = "1px solid rgba(164, 151, 243, 0.95)";
    }
    document.querySelector(".burger-menu__nav").classList.toggle("open");
  });

  // slider in hero section
  slider({
    lineSelector: ".hero__slider-inner",
    wrapperSelector: ".hero__slider",
    itemSelector: ".hero__slider-item img", //img elements only
  });

  // tabs in about section
  tabs({
    selectorContent: ".tab-content__container",
    selectorTab: ".tab-btn",
    selectorParent: ".tab-content",
    activeClass: "nav-active",
  });

  // add persons cards to the DOM
  function addPersonsCards() {
    const personsContainer = document.querySelector(".tab-content");
    const idDeveloper = "developer";
    const uiDesigner = "uiDesigner";
    const projectManager = "projectManager";
    const idDesigner = "designer";

    persons.forEach((person) => {
      const contentContainer = document.createElement("div");
      contentContainer.classList.add("tab-content__container");
      contentContainer.setAttribute("id", person.dataTab);
      personsContainer.appendChild(contentContainer);

      const card = document.createElement("div");
      card.classList.add("tab-content__card");
      card.innerHTML = `
        <img src="${person.photo}" alt="${person.alt}">
        <h3>${person.name}</h3>
        <p>${person.jobTitle}</p>
        <div class="person-card__rating">Rating: ${person.rating}</div>
        <div class="person-card__skills">${person.skills}</div>
        <a href="#${person.dataTab}" class="person-card__learn-more">Learn more</a>
      `;
      contentContainer.appendChild(card);
    });
  }

  // addPersonsCards();
});
