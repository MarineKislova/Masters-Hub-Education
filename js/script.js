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
  const jobTitles = [
    "developer",
    "uiDesigner",
    "projectManager",
    "designer",
    "accountant",
    "HR",
    "marketing",
  ];
  const jobTitlesContainer = document.querySelectorAll(
    ".tab-content__container"
  );

  function addPersonsCards(person) {
    const card = document.createElement("div");
    card.classList.add("tab-content__card");
    card.setAttribute("data-tab", person.dataTab);

    // add image to the card
    const image = document.createElement("div");
    image.classList.add("tab-content__card-img");
    card.appendChild(image);
    const img = document.createElement("img");
    img.src = person.photo;
    img.alt = person.alt;
    image.appendChild(img);

    // add rating to the card
    const rating = document.createElement("div");
    rating.classList.add("tab-content__card-rating");
    card.appendChild(rating);
    const star = document.createElement("i");
    star.classList.add("fa-solid", "fa-star");
    star.style.color = "#FFD43B";
    const starSpan = document.createElement("span");
    starSpan.textContent = `${person.rating} (6)`;
    rating.appendChild(star);
    rating.appendChild(starSpan);
    // for (let i = 0; i < person.rating; i++) {
    //   const star = document.createElement("i");
    //   star.classList.add("fas", "fa-star", "checked");
    //   rating.appendChild(star);
    // }

    // add name to the card
    const name = document.createElement("div");
    name.classList.add("tab-content__card-name");
    name.textContent = person.name;
    card.appendChild(name);

    // add job title to the card
    const jobTitle = document.createElement("div");
    jobTitle.classList.add("tab-content__card-job-title");
    jobTitle.textContent = person.jobTitle;
    card.appendChild(jobTitle);

    // add skills to the card
    const skills = document.createElement("div");
    skills.classList.add("tab-content__card-skills");
    skills.textContent = person.skills;
    card.appendChild(skills);

    // person.skills.split(",").forEach((skill) => {
    //   const skillSpan = document.createElement("span");
    //   skillSpan.textContent = skill.trim();
    //   skills.appendChild(skillSpan);
    // });
    // add description to the card
    const description = document.createElement("div");
    description.classList.add("tab-content__card-description");
    description.textContent = person.description;
    card.appendChild(description);

    jobTitlesContainer.forEach((container) => {
      if (container.getAttribute("id") === person.dataTab) {
        container.appendChild(card);
      }
    });

    //active card on click
    card.addEventListener("click", () => {
      const cards = document.querySelectorAll(".tab-content__card");
      cards.forEach((card) => {
        card.classList.remove("card-active");
        console.log("remove active class");
      });
      card.classList.add("card-active");
    });
  }

  persons.forEach((person) => {
    addPersonsCards(person);
  });

  //showcase
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
  const wrapperTestimonials = document.querySelector(".testimonials__slider");
  const testimonialsInner= document.querySelectorAll(".testimonials__inner");
  let width;
  const testimonials = document.querySelectorAll(".testimonials__item");
  const prevTestimonial = document.querySelector(".testimonials__pagination-prev");
  const nextTestimonial = document.querySelector(".testimonials__pagination-next");
  const currentItem = [testimonials[0], testimonials[1], testimonials[2], testimonials[3], testimonials[4]];
  let countTestimonial = 0;

  function initResize(){
    width = wrapperTestimonials.offsetWidth;
    testimonialsInner.style.width = `${width * currentItem.length}px`;
    testimonials.forEach((item) => {
      item.style.width = `${width}px`;
    });

    showTestimonial();
  }

  // initResize();

  function showTestimonial() {
    nextTestimonial.onclick = () => {
      if(countTestimonial < currentItem.length - 1) {
        countTestimonial++;
        currentItem[countTestimonial].style.display = "flex";
        currentItem[countTestimonial - 1].style.display = "none";
      } else {
        countTestimonial = 0;
        currentItem[countTestimonial].style.display = "flex";
        currentItem[currentItem.length - 1].style.display = "none";
      }
    }
    prevTestimonial.onclick = () => {
      if(countTestimonial > 0) {
        countTestimonial--;
        currentItem[countTestimonial].style.display = "flex";
        currentItem[countTestimonial + 1].style.display = "none";
      } else {
        countTestimonial = currentItem.length - 1;
        currentItem[countTestimonial].style.display = "flex";
        currentItem[0].style.display = "none";
      }
      
    }
    
  }

  showTestimonial();
});
