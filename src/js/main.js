/* ============================================================
   AL OMRANE PRESTIGE — Shared JavaScript
   Navigation, Interactions, Responsive Behaviors
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* --- Mobile Menu Toggle --- */
  const burgerBtn = document.getElementById('burger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeMenuBtn = document.getElementById('close-menu-btn');
  const overlay = document.getElementById('menu-overlay');

  function openMenu() {
    mobileMenu?.classList.add('open');
    overlay?.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    mobileMenu?.classList.remove('open');
    overlay?.classList.add('hidden');
    document.body.style.overflow = '';
  }

  burgerBtn?.addEventListener('click', openMenu);
  closeMenuBtn?.addEventListener('click', closeMenu);
  overlay?.addEventListener('click', closeMenu);

  /* --- Active Nav Link Highlighting --- */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('[data-nav-link]').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('text-primary', 'font-semibold');
      link.classList.remove('text-on-surface-variant');
    }
  });

  /* --- Bottom Nav Active State --- */
  document.querySelectorAll('[data-bottom-nav]').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('text-primary', 'font-bold');
      link.classList.remove('text-on-surface-variant');
    }
  });

  /* --- View Toggle (Gallery/Map) --- */
  const btnGallery = document.getElementById('btn-view-gallery');
  const btnMap = document.getElementById('btn-view-map');
  const galleryContainer = document.getElementById('gallery-container');
  const mapContainer = document.getElementById('map-container');

  if (btnGallery && btnMap && galleryContainer && mapContainer) {
    btnGallery.addEventListener('click', () => {
      galleryContainer.classList.remove('hidden');
      mapContainer.classList.add('hidden');
      btnGallery.classList.add('bg-primary-container', 'text-on-primary-container');
      btnGallery.classList.remove('text-on-surface-variant');
      btnMap.classList.remove('bg-primary-container', 'text-on-primary-container');
      btnMap.classList.add('text-on-surface-variant');
    });
    btnMap.addEventListener('click', () => {
      galleryContainer.classList.add('hidden');
      mapContainer.classList.remove('hidden');
      btnMap.classList.add('bg-primary-container', 'text-on-primary-container');
      btnMap.classList.remove('text-on-surface-variant');
      btnGallery.classList.remove('bg-primary-container', 'text-on-primary-container');
      btnGallery.classList.add('text-on-surface-variant');
    });
  }

  /* --- Price Range Slider --- */
  const priceRange = document.getElementById('priceRange');
  const priceDisplay = document.getElementById('priceDisplay');
  if (priceRange && priceDisplay) {
    priceRange.addEventListener('input', (e) => {
      priceDisplay.textContent = `15M - ${e.target.value}M MAD`;
    });
  }

  /* --- View Switchers (Catalogue) --- */
  const viewGalleryBtn = document.getElementById('viewGalleryBtn');
  const viewMapBtn = document.getElementById('viewMapBtn');
  if (viewGalleryBtn && viewMapBtn) {
    viewGalleryBtn.addEventListener('click', () => {
      viewGalleryBtn.classList.add('bg-primary-container', 'text-on-primary-container');
      viewGalleryBtn.classList.remove('text-on-surface-variant');
      viewMapBtn.classList.remove('bg-primary-container', 'text-on-primary-container');
      viewMapBtn.classList.add('text-on-surface-variant');
    });
    viewMapBtn.addEventListener('click', () => {
      viewMapBtn.classList.add('bg-primary-container', 'text-on-primary-container');
      viewMapBtn.classList.remove('text-on-surface-variant');
      viewGalleryBtn.classList.remove('bg-primary-container', 'text-on-primary-container');
      viewGalleryBtn.classList.add('text-on-surface-variant');
    });
  }

  /* --- Off-Market Auth Tab Switching --- */
  window.switchAuthTab = function(tab) {
    const codePanel = document.getElementById('panel-code');
    const reqPanel = document.getElementById('panel-request');
    const codeBtn = document.getElementById('tab-code-btn');
    const reqBtn = document.getElementById('tab-request-btn');

    if (tab === 'code') {
      codePanel?.classList.remove('hidden');
      reqPanel?.classList.add('hidden');
      codeBtn?.classList.add('text-primary', 'bg-surface-container-high', 'shadow-sm');
      codeBtn?.classList.remove('text-on-surface-variant');
      reqBtn?.classList.remove('text-primary', 'bg-surface-container-high', 'shadow-sm');
      reqBtn?.classList.add('text-on-surface-variant');
    } else {
      codePanel?.classList.add('hidden');
      reqPanel?.classList.remove('hidden');
      reqBtn?.classList.add('text-primary', 'bg-surface-container-high', 'shadow-sm');
      reqBtn?.classList.remove('text-on-surface-variant');
      codeBtn?.classList.remove('text-primary', 'bg-surface-container-high', 'shadow-sm');
      codeBtn?.classList.add('text-on-surface-variant');
    }
  };

  /* --- Off-Market Code Submission --- */
  window.handleCodeSubmission = function(e) {
    e.preventDefault();
    const status = document.getElementById('code-status');
    if (status) {
      status.classList.remove('hidden');
      status.innerHTML = `
        <span class="material-symbols-outlined text-[18px] animate-spin">progress_activity</span>
        <span>Authentification du scellé diplomatique en cours...</span>
      `;
      setTimeout(() => {
        status.innerHTML = `
          <span class="material-symbols-outlined text-[18px] text-emerald-400">check_circle</span>
          <span class="text-on-surface font-medium">Code accrédité valide. Redirection sécurisée...</span>
        `;
      }, 1500);
    }
  };

  /* --- Off-Market Request Submission --- */
  window.handleRequestSubmission = function(e) {
    e.preventDefault();
    alert("Votre candidature d'accréditation a été transmise. Un huissier de confiance prendra contact sous 24h.");
  };

  /* --- Material Configurator (Villa Page) --- */
  const swatchBtns = document.querySelectorAll('.swatch-btn');
  const labelSol = document.getElementById('label-sol');
  const labelBois = document.getElementById('label-bois');
  const specPreview = document.getElementById('spec-preview');
  const configState = { sol: "Noir Sahara Or", bois: "Noyer Américain" };

  function updateConfigPreview() {
    if (specPreview) {
      specPreview.innerHTML = `Configuration actuelle : <span class="text-primary">${configState.sol}</span>, <span class="text-primary">${configState.bois}</span> & Cuisine Boffi Italie Gaggenau 400.`;
    }
  }

  swatchBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-target');
      const val = btn.getAttribute('data-val');
      document.querySelectorAll(`.swatch-btn[data-target="${target}"]`).forEach(sibling => {
        sibling.classList.remove('bg-surface-container-highest', 'border-primary');
        sibling.classList.add('bg-surface-container', 'border-transparent');
        const title = sibling.querySelector('.swatch-title');
        if (title) { title.classList.remove('text-primary', 'font-medium'); title.classList.add('text-on-surface'); }
      });
      btn.classList.remove('bg-surface-container', 'border-transparent');
      btn.classList.add('bg-surface-container-highest', 'border-primary');
      const activeTitle = btn.querySelector('.swatch-title');
      if (activeTitle) { activeTitle.classList.remove('text-on-surface'); activeTitle.classList.add('text-primary', 'font-medium'); }
      if (target === 'sol') { configState.sol = val; if (labelSol) labelSol.textContent = val + ' (Sélectionné)'; }
      if (target === 'bois') { configState.bois = val; if (labelBois) labelBois.textContent = val + ' (Sélectionné)'; }
      updateConfigPreview();
    });
  });

  /* --- Booking Drawer (Villa Page) --- */
  const btnBookVisit = document.getElementById('btn-book-visit');
  const bookingDrawer = document.getElementById('booking-drawer');
  const btnCloseDrawer = document.getElementById('btn-close-drawer');
  const drawerForm = document.getElementById('drawer-form');
  const drawerSuccess = document.getElementById('drawer-success');

  btnBookVisit?.addEventListener('click', () => bookingDrawer?.classList.toggle('hidden'));
  btnCloseDrawer?.addEventListener('click', () => bookingDrawer?.classList.add('hidden'));
  drawerForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    drawerForm.classList.add('hidden');
    drawerSuccess?.classList.remove('hidden');
  });

  /* --- Filter Pill Active Toggle --- */
  document.querySelectorAll('.filter-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      pill.parentElement?.querySelectorAll('.filter-pill').forEach(p => {
        p.classList.remove('bg-primary', 'text-on-primary', 'shadow-sm');
        p.classList.add('bg-surface-container', 'text-on-surface-variant');
      });
      pill.classList.remove('bg-surface-container', 'text-on-surface-variant');
      pill.classList.add('bg-primary', 'text-on-primary', 'shadow-sm');
    });
  });

  /* --- Scroll to Top --- */
  document.querySelectorAll('[data-scroll-top]').forEach(btn => {
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  });

});
