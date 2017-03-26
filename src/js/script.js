var toggler = document.getElementById('toggler');
toggler.addEventListener('click', activateNav);
function activateNav(e) {
  e.preventDefault();
  document.getElementById('main-nav').classList.toggle('main-nav--active');
}