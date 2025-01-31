// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

mobileMenu.addEventListener('click', () => {
  navList.classList.toggle('active'); // Add/remove 'active' class to show/hide the menu
});

// Dynamic Last Modified Date
const lastModifiedElement = document.getElementById('lastModified');
lastModifiedElement.textContent = document.lastModified; // Updates the footer with the last modified date
