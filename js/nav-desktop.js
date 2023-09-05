document.addEventListener("DOMContentLoaded", () => {
    let prevScrollPos = window.scrollY;
    const navbar = document.querySelector('.nav-desktop');

    window.addEventListener('scroll', () => {
        const currentScrollPos = window.scrollY;

        if (prevScrollPos > currentScrollPos) {
            navbar.style.transform = 'translateY(0)';
        } else {
            navbar.style.transform = 'translateY(-100%)';
        }

        prevScrollPos = currentScrollPos;
    });
});






