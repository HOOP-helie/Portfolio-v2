import { disableScroll, enableScroll } from "./page-scroll.js";

document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu");
  const menuToggle = document.querySelector(".menu-toggle-btn");
  const menuLinks = document.querySelectorAll(".menu-link");
  const menuToggleText = document.querySelector(".menu-toggle-btn--text");
  const overlay = document.querySelector(".overlay");

  function closeMenu() {
    menu.classList.remove("menu-opened");
    overlay.classList.add("hidden");
    menuToggleText.textContent = "Menu";
    menuLinks.forEach((link) => link.classList.remove("menu-link--slide-up"));

    setTimeout(() => {
      menu.classList.remove("menu--slide-right");
      enableScroll();
    }, 300);
  }

  function openMenu() {
    menuToggleText.textContent = "Close";
    menu.classList.add("menu--slide-right");
    overlay.classList.remove("hidden");
    disableScroll();

    setTimeout(() => {
      menuLinks.forEach((link) => link.classList.add("menu-link--slide-up"));
    }, 300);
  }

  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("menu-opened");

    if (menu.classList.contains("menu-opened")) {
      openMenu();
    } else {
      closeMenu();
    }
  });

  // Add click event listeners to each menu link to close the menu when clicked
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });
});
