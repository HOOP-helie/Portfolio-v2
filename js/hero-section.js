document.addEventListener("DOMContentLoaded", () => {
    const phone = document.querySelector('.visuals .phone');
    const laptop = document.querySelector('.visuals .laptop');

    window.addEventListener('scroll', () => {
        const scrollValue = window.scrollY;

        phone.style.transform = `translateY(-${scrollValue * 0.2}px)`;
        laptop.style.transform = `translateY(-${scrollValue * 0.4}px)`;
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

    }, 650);
    setTimeout(() => {
        laptop.classList.remove("hidden")
    }, 1000);

    // Remove transition to not impact animation on scroll
    setTimeout(() => {
        phone.style.transition = "none"
        laptop.style.transition = "none"
    }, 2500);
})
