document.addEventListener("DOMContentLoaded", () => {
    const phone = document.querySelector('.visuals .phone');
    const laptop = document.querySelector('.visuals .laptop');

    window.addEventListener('scroll', () => {
        const scrollValue = window.scrollY;

        // Update the translation and opacity of elements
        phone.style.transform = `translateY(-${scrollValue * 0.2}px)`;
        laptop.style.transform = `translateY(-${scrollValue * 0.3}px)`;

        // Apply opacity changes based on scroll position
        if (scrollValue > 50) {
            phone.style.opacity = `${1 - scrollValue / 300}`;
            laptop.style.opacity = `${1 - scrollValue / 700}`;
        } else {
            phone.style.opacity = 1;
            laptop.style.opacity = 1;
        }
    });


    setTimeout(() => {
        phone.classList.remove("hidden")

    }, 4000);
    setTimeout(() => {
        laptop.classList.remove("hidden")
    }, 3800);

    // Remove transition to not impact animation on scroll
    setTimeout(() => {
        phone.style.transition = "initial"
        laptop.style.transition = "initial"
    }, 5500);
})
