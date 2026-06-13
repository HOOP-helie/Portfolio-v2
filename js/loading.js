import { disableScroll, enableScroll } from "./page-scroll.js";

window.addEventListener("load", () => {
  const loaderText = document.querySelector("#loader-wrapper p");
  disableScroll();
  // Show and hide loader text
  setTimeout(() => {
    loaderText.classList.add("slide-up");
  }, 200);
  setTimeout(() => {
    loaderText.classList.remove("slide-up");
  }, 2000);

  // Display the main content
  setTimeout(() => {
    document.querySelector("body").classList.add("loaded");
    enableScroll();
  }, 2400);
});

