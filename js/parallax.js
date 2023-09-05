document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener('scroll', () => {
        const phone = document.querySelector('.visuals .phone');
        const laptop = document.querySelector('.visuals .laptop');
        const scrollValue = window.scrollY;

        phone.style.transform = `translateY(-${scrollValue * 0.5}px)`;
        laptop.style.transform = `translateY(-${scrollValue * 0.2}px)`;
        if (scrollValue > 50) {
            phone.style.opacity = `${1 - scrollValue / 300}`;
            laptop.style.opacity = `${1 - scrollValue / 500}`;
        } else {
            phone.style.opacity = 1;
            laptop.style.opacity = 1;
        }
    });
})