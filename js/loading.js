document.addEventListener("DOMContentLoaded", () => {

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
            }, 2400);

        }
    };
})
