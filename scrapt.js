    // Select the menu toggle button and the nav links
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    // Add click event to toggle the 'active' class
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });menuToggle.addEventListener('click', function() {
    console.log("Menu toggled!"); // Add this to see if the click is being captured
    navLinks.classList.toggle('active');
});
