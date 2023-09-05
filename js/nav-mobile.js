document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector('.menu');
    const menuToggle = document.querySelector('.menu-toggle-btn');
    const menuLinks = document.querySelectorAll('.menu-link');
    const menuToggleText = document.querySelector('.menu-toggle-btn--text');
    const overlay = document.querySelector('.overlay');
    
    // Function to close the menu
    function closeMenu() {
        menu.classList.remove('menu-opened');
        overlay.classList.add('hidden');
        menuToggleText.textContent = "Menu";
        menuLinks.forEach(link => link.classList.remove('menu-link--slide-up'));
        document.body.style.overflow = "auto"; // Re-enable scrolling
        setTimeout(() => {
            menu.classList.remove('menu--slide-right');
        }, 500);
    }

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('menu-opened');

        if (menu.classList.contains('menu-opened')) {
            menuToggleText.textContent = "Close";
            menu.classList.add('menu--slide-right');
            overlay.classList.remove('hidden');

            setTimeout(() => {
                menuLinks.forEach(link => link.classList.add('menu-link--slide-up'));
                document.body.style.overflow = "hidden"; // Disable scrolling
            }, 500);
        } else {
            closeMenu(); // Close the menu when clicking the toggle button again
        }
    });

    // Add click event listeners to each menu link to close the menu when clicked
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });
});
