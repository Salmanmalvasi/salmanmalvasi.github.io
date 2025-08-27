//document.addEventListener('DOMContentLoaded', function() { // Smooth scrolling for anchor links const links = document.querySelectorAll('a[href^="#"]'); links.forEach(link => { link.addEventListener('click', (e) => { e.preventDefault(); const targetId = link.getAttribute('href'); const targetSection = document.querySelector(targetId); if (targetSection) { targetSection.scrollIntoView({ behavior: 'smooth' }); } }); }); // Download button functionality const downloadButtons = document.querySelectorAll('.download-btn.primary'); downloadButtons.forEach(button => { button.addEventListener('click', (e) => { // Add click animation button.style.transform = 'scale(0.95)'; setTimeout(() => { button.style.transform = 'scale(1)'; }, 150); // Download will happen automatically due to href and download attribute }); }); });

    document.addEventListener('DOMContentLoaded', function() {
    // --- Hamburger Menu Logic ---
    const navToggle = document.querySelector('.nav-toggle');
    const mobileNav = document.querySelector('.nav-links-mobile');
    const mobileNavBg = document.querySelector('.mobile-nav-bg');
    const mobileNavLinks = document.querySelectorAll('.nav-links-mobile a:not(.dropdown-toggle)');

    function toggleMenu() {
        navToggle.classList.toggle('active');
        mobileNav.classList.toggle('active');
        mobileNavBg.classList.toggle('active');
    }

    navToggle.addEventListener('click', toggleMenu);
    mobileNavBg.addEventListener('click', toggleMenu);
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });

    // --- Dropdown Menu Logic (for both Desktop and Mobile) ---
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(event) {
            event.preventDefault(); // This prevents the link from jumping
            
            const dropdownMenu = this.nextElementSibling;
            const isAlreadyActive = dropdownMenu.classList.contains('active');

            // On mobile, we don't want to close other dropdowns, just toggle the current one.
            // On desktop, it's good practice to close others. Let's check the screen width.
            if (window.innerWidth > 992) {
                closeAllDropdowns();
            }

            // Now, toggle the current one
            if (!isAlreadyActive) {
                dropdownMenu.classList.add('active');
                this.classList.add('active');
            } else {
                 dropdownMenu.classList.remove('active');
                 this.classList.remove('active');
            }
        });
    });

    // Function to close all open dropdown menus
    function closeAllDropdowns() {
        document.querySelectorAll('.dropdown-menu.active').forEach(menu => {
            menu.classList.remove('active');
        });
        document.querySelectorAll('.dropdown-toggle.active').forEach(toggle => {
            toggle.classList.remove('active');
        });
    }

    // This closes the dropdown if you click anywhere else on the page
    window.addEventListener('click', function(event) {
        if (!event.target.closest('.dropdown')) {
            closeAllDropdowns();
        }
    });
});