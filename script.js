"use strict";   // help debug code
// Select the elements
const btnMobileNav = document.querySelector('.btn-mobile-nav');
const header = document.querySelector('header');

// Add event listener to the button
btnMobileNav.addEventListener('click', function() {
    header.classList.toggle('nav-open');
});


// Faq

document.querySelectorAll('.faq-header').forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      const symbol = header.querySelector('.toggle-symbol');

      if (content.style.display === 'block') {
        content.style.display = 'none';
        symbol.textContent = '+';
      } else {
        content.style.display = 'block';
        symbol.textContent = '-';
      }
    });
  });
