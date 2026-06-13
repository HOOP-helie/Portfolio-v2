function preventDefault(e) {
  e.preventDefault();
}

export function disableScroll() {
  // Desktop scrolling (wheel)
  window.addEventListener("wheel", preventDefault, { passive: false });
  // Touch scrolling (mobile)
  window.addEventListener("touchmove", preventDefault, { passive: false });
}

export function enableScroll() {
  window.removeEventListener("wheel", preventDefault);
  window.removeEventListener("touchmove", preventDefault);
}
