document.addEventListener("DOMContentLoaded", () => {
    document.body.style.overflow = "hidden"; // Disable scrolling

    const loaderText = document.querySelector("#loader-wrapper p")
    setTimeout(() => {
        loaderText.classList.add("slide-up")
    }, 200);
    document.onreadystatechange = function () {
        if (document.readyState === "complete") {
            setTimeout(() => {
                loaderText.classList.remove("slide-up")
            }, 2000);
            setTimeout(() => {
                document.querySelector("body").classList.add("loaded");
                document.body.style.overflow = "auto"; // Re-enable scrolling
            }, 2400);
        }
    };
})
