// saidalixon.uz

"use strict";

window.addEventListener("DOMContentLoaded", () => {
  const loadingTxt = document.querySelector(".loading"),
    bgImg = document.querySelector(".bg");

  let load = 0;

  const loadInterval = setInterval(() => {
    addLoad();
  }, 5);

  function addLoad() {
    load++;

    if (load > 99) {
      clearInterval(loadInterval);
    }

    loadingTxt.textContent = `${load}%`;
    loadingTxt.style.opacity = 100 - load + "%";
    bgImg.style.backdropFilter = `blur(${100 - load}px)`;
  }
});
