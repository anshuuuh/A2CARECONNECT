export async function loadComponent(selector) {
  try {
    const container = document.querySelector(selector);
    if (!container) return;
    
    const source = container.dataset.source;
    if (!source) return;
    
    const response = await fetch(window.location.origin + '/api/preview-6897a7df2f903a63a6fe35d8/' + source);
    if (response.ok) {
      const html = await response.text();
      container.innerHTML = html;
      
      // Initialize mobile menu functionality after navbar loads
      if (source.includes('navbar')) {
        initMobileMenu();
      }
    }
  } catch (error) {
    console.error('Error loading component:', error);
  }
}

function initMobileMenu() {
  const mobileMenuBtn = document.querySelector('[data-id="mobile-menu-btn"]');
  const mobileMenu = document.querySelector('[data-id="mobile-menu"]');
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  }
}