const menuButton = document.querySelector('[data-menu-toggle]');
const menu = document.querySelector('[data-menu]');
const header = document.querySelector('[data-header]');

function closeMenu() {
  menuButton?.setAttribute('aria-expanded', 'false');
  menu?.classList.remove('open');
  document.body.classList.remove('menu-open');
}

menuButton?.addEventListener('click', () => {
  const willOpen = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(willOpen));
  menu?.classList.toggle('open', willOpen);
  document.body.classList.toggle('menu-open', willOpen);
});

menu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
window.addEventListener('resize', () => {
  if (window.innerWidth > 900) closeMenu();
});
window.addEventListener('scroll', () => header?.classList.toggle('scrolled', window.scrollY > 20), { passive: true });

const year = document.querySelector('[data-year]');
if (year) year.textContent = String(new Date().getFullYear());
