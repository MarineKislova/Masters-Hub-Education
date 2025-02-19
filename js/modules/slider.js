function slider({
  lineSelector,
  wrapperSelector,
  itemSelector,
  arrowNextSelector,
  arrowPrevSelector,
}) {
  let count = 0;
  let width;
  let height;
  const sliderLine = document.querySelector(lineSelector);
  const wrapper = document.querySelector(wrapperSelector);
  const slides = document.querySelectorAll(itemSelector);
  // const width = window.getComputedStyle(wrapper).width;
  const arrowNext = document.querySelector(arrowNextSelector);
  const arrowPrev = document.querySelector(arrowPrevSelector);

  function initResize() {
    console.log("resize");
    width = 338 + "px";
    sliderLine.style.width = width * slides.length + "px";
      wrapper.style.maxHeight = 338 + "px";
    slides.forEach((item) => {
      item.style.width = width + "px";
      // item.style.height = "auto";
      item.style.height = 100 + "%";
    });
    console.log(width);
    rollSlider();
  }

  window.addEventListener("resize", initResize);

  initResize();

  function rollSlider() {
    count++;
    sliderLine.style.transform = `translateX(-${width * count}px)`;
  }

  setInterval(rollSlider, 1000);

  // arrowNext.addEventListener("click", () => {
  //   count++;
  //   if (count >= slides.length) {
  //     count = 0;
  //   }
  //   rollSlider();
  // });

  // arrowPrev.addEventListener("click", () => {
  //   count--;
  //   if (count <= 0) {
  //     count = slides.length - 1;
  //   }
  //   rollSlider();
  // });
}

export default slider;
