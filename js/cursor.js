
const cursor = document.querySelector("#cursor");
const cursorCircle = cursor.querySelector(".cursor-circle");
const mouse = { x: -100, y: -100 }; // mouse pointer's coordinates
const pos = { x: 0, y: 0 }; // cursor's coordinates
const speed = 0.3; // between 0 and 1


// Follow mouse animation
const updateCoordinates = (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
};

window.addEventListener("mousemove", updateCoordinates);

const updateCursor = () => {
    const diffX = Math.round(mouse.x - pos.x);
    const diffY = Math.round(mouse.y - pos.y);
    pos.x += diffX * speed;
    pos.y += diffY * speed;

    const translate = "translate3d(" + pos.x + "px ," + pos.y + "px, 0)";

    cursor.style.transform = translate;
};

function loop() {
    updateCursor();
    requestAnimationFrame(loop);
}
requestAnimationFrame(loop);


// Change cursor appearance when hovering links 
const cursorModifiers = document.querySelectorAll("a");

const growCursor = () => {
    cursorCircle.classList.add("cursor-circle-grow");

};
const shrinkCursor = () => {
    cursorCircle.classList.remove("cursor-circle-grow");
};

cursorModifiers.forEach((curosrModifier) => {
    curosrModifier.addEventListener("mouseenter", growCursor);
    curosrModifier.addEventListener("mouseleave", shrinkCursor);
});

document.querySelectorAll(".cursor-hover").forEach((el) => {
    el.addEventListener("mouseenter", growCursor);
    el.addEventListener("mouseleave", shrinkCursor);
});