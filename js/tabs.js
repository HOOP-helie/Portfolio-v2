addEventListener("DOMContentLoaded", () => {

    let titles = document.querySelectorAll('.tabs-titles h3');
    let categories = document.querySelectorAll('.my-background .category');

    for (let index = 0; index < titles.length; index++) {

        titles[index].addEventListener("click", (e) => {
            // Apply active class to clicked tab
            titles.forEach(title => title.classList.remove("active"))
            e.target.classList.add("active");
            // Show corresponding category
            categories.forEach(category => category.classList.add("removed", "hidden"))
            categories[index].classList.remove("removed");
            setTimeout(function () {
                categories[index].classList.remove("hidden");
            }, 20);
        })

    }
});