import slider from "./modules/slider.js";
import tabs from "./modules/tabs.js";
import modalWindow from "./modules/modal.js";
import addPersonsCards from "./modules/addPersonCards.js";

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

  // modal window

  modalWindow({
    openSelector: "[data-opensign]",
    // closeSelector: "[data-modalclosetwo]",
    parentSelector: ".form",
    itemSelector: ".form__signin",
  });

  //change register form
  const formSignUp = document.querySelector("#signup");
  const formSignIn = document.querySelector("#signin");
  const linkSignUp = document.querySelector(".signup");
  const linkSignIn = document.querySelector(".signin");

  linkSignUp.addEventListener("click", () => {
    formSignUp.style.display = "none";
    formSignIn.style.display = "block";
    console.log("open formSignIn");
  });

  linkSignIn.addEventListener("click", () => {
    formSignUp.style.display = "block";
    formSignIn.style.display = "none";
    console.log("open formSignUp");
  });

  function changeActive() {
    linkSignUp.addEventListener("click", () => {
      formSignUp.style.display = "none";
      formSignIn.style.display = "block";
      console.log("open formSignIn");
    });

    linkSignIn.addEventListener("click", () => {
      formSignUp.style.display = "block";
      formSignIn.style.display = "none";
      console.log("open formSignUp");
    });
  }

  // changeActive();

  // tabs in about section
  tabs({
    selectorContent: ".tab-content__container",
    selectorTab: ".tab-btn",
    selectorParent: ".tab-content",
    activeClass: "nav-active",
  });

  // add persons cards to the DOM
  persons.forEach((person) => {
    addPersonsCards(person, ".tab-content__container");
  });

  //showcase expanded on click
  const showcase = document.querySelectorAll(".showcase__portfolio-item");
  showcase.forEach((card) => {
    card.addEventListener("click", () => {
      removeExpandedClass();
      card.classList.add("expanded");
    });
  });

  function removeExpandedClass() {
    showcase.forEach((card) => {
      card.classList.remove("expanded");
    });
  }

  // showcase with pagination
  function rollShowCase() {
    let count = 2;
    const showcase = document.querySelectorAll(".showcase__portfolio-item");
    const next = document.querySelector(".showcase__pagination-next");
    const prev = document.querySelector(".showcase__pagination-prev");
    count = (count + 1) % showcase.length;

    next.addEventListener("click", () => {
      showcase.forEach((card) => {
        card.addEventListener("click", () => {
          removeExpandedClass();
          card.classList.add("expanded");
        });
      });
      count = (count + 1) % showcase.length;
      showcase[count].click();
    });

    prev.addEventListener("click", () => {
      showcase.forEach((card) => {
        card.addEventListener("click", () => {
          removeExpandedClass();
          card.classList.add("expanded");
        });
      });
      count = (count - 1) % showcase.length;
      if (count < 0) count = showcase.length - 1;
      showcase[count].click();
    });
  }

  rollShowCase();

  //testimonials slider
  const testimonials = document.querySelectorAll(".testimonials__item");
  const prevTestimonial = document.querySelector(
    ".testimonials__pagination-prev"
  );
  const nextTestimonial = document.querySelector(
    ".testimonials__pagination-next"
  );
  const currentItem = [
    testimonials[0],
    testimonials[1],
    testimonials[2],
    testimonials[3],
    testimonials[4],
  ];
  let countTestimonial = 0;

  function showTestimonial() {
    nextTestimonial.onclick = () => {
      if (countTestimonial < currentItem.length - 1) {
        countTestimonial++;
        currentItem[countTestimonial].style.display = "flex";
        currentItem[countTestimonial - 1].style.display = "none";
      } else {
        countTestimonial = 0;
        currentItem[countTestimonial].style.display = "flex";
        currentItem[currentItem.length - 1].style.display = "none";
      }
    };
    prevTestimonial.onclick = () => {
      if (countTestimonial > 0) {
        countTestimonial--;
        currentItem[countTestimonial].style.display = "flex";
        currentItem[countTestimonial + 1].style.display = "none";
      } else {
        countTestimonial = currentItem.length - 1;
        currentItem[countTestimonial].style.display = "flex";
        currentItem[0].style.display = "none";
      }
    };
  }

  showTestimonial();

  // accordion

  const accordionTitle = document.querySelectorAll(
    ".faq__accordion-item-header"
  );
  const accordionItems = document.querySelectorAll(".faq__accordion-item");
  const accordionContent = document.querySelectorAll(
    ".faq__accordion-item-content"
  );

  accordionTitle.forEach((item) => {
    item.addEventListener("click", () => {
      removeCollapsedClass();
      item.closest(".faq__accordion-item").classList.add("collapsed");
      const content = item.nextElementSibling;
      content.style.display = content.style.display == "flex" ? "none" : "flex";
      const icon = item.querySelector(".faq__accordion-item-icon");
      icon.textContent = icon.textContent == "+" ? "-" : "+";
    });
  });

  function removeCollapsedClass() {
    accordionItems.forEach((items) => {
      items.classList.remove("collapsed");
    });
  }
});
