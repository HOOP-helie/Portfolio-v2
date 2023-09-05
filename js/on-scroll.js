
document.addEventListener("DOMContentLoaded", () => {

    // Reusable function to handle intersection observer
    function observeAndAnimate(elements, className, threshold) {
        const revealAnimation = function (entries, observer) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(className);
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(revealAnimation, {
            root: null,
            threshold: threshold,
        });

        elements.forEach((element) => {
            observer.observe(element);
        });
    }

    // Slide left animation
    const slideLeftElements = document.querySelectorAll(".to-slide-left");
    observeAndAnimate(slideLeftElements, "slide--left", 0.5);

    // Slide up animation
    const slideUpElements = document.querySelectorAll(".to-slide-up");
    observeAndAnimate(slideUpElements, "slide--up", 0.3);

})