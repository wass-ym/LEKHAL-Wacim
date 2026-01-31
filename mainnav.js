// ========================= mainnav.js =========================
 
  'use strict';

  const burger = document.querySelector('.mainnav__burger');
  const drawer = document.getElementById('mainnav-drawer');
  const overlay = document.querySelector('.mainnav__overlay');
  const closeButtons = document.querySelectorAll('[data-mainnav-close]');

  function openMenu() {
    drawer.hidden = false;
    overlay.hidden = false;
    drawer.setAttribute('aria-hidden', 'false');
    burger.setAttribute('aria-expanded', 'true');
    burger.setAttribute('aria-label', 'Fermer le menu');
    
     
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    drawer.hidden = true;
    overlay.hidden = true;
    drawer.setAttribute('aria-hidden', 'true');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Ouvrir le menu');
    
    
    document.body.style.overflow = '';
  }

  
  burger.addEventListener('click', function() {
    const isOpen = burger.getAttribute('aria-expanded') === 'true';
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  
  closeButtons.forEach(function(btn) {
    btn.addEventListener('click', closeMenu);
  });

 
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && burger.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      burger.focus();
    }
  });

  
  drawer.addEventListener('keydown', function(e) {
    if (e.key !== 'Tab') return;
    
    const focusableElements = drawer.querySelectorAll(
      'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (e.shiftKey && document.activeElement === firstElement) {
      e.preventDefault();
      lastElement.focus();
    } else if (!e.shiftKey && document.activeElement === lastElement) {
      e.preventDefault();
      firstElement.focus();
    }
  });


