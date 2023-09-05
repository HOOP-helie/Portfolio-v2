document.addEventListener("DOMContentLoaded", () => {
    const titles = document.querySelectorAll('.tabs-titles h3');
    const categories = document.querySelectorAll('#my-background .category');

    titles.forEach((title, index) => {
        title.addEventListener("click", () => {
            // Apply active class to clicked tab
            titles.forEach((t) => t.classList.remove("active"));
            title.classList.add("active");

            // Hide all categories
            categories.forEach((category) => {
                category.classList.add("removed", "hidden");
            });

            // Show corresponding category
            categories[index].classList.remove("removed");
            setTimeout(() => {
                categories[index].classList.remove("hidden");
            }, 20);
        });
    });
});






