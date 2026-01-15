// HAMBURGUER HAMBURGUER
const hamburguer = document.querySelector('.hamburguer');
const headerMenu = document.querySelector('.menu-header');

function toggleMenu(){
    hamburguer.classList.toggle('active');
    headerMenu.classList.toggle('active');
}

hamburguer.addEventListener('click', toggleMenu);
headerMenu.addEventListener('click', (event) => {
    if (event.target.classList.contains('item-menu')) {
        toggleMenu();
    }
});
// JS DO DESCUBRA
  const btn = document.querySelector('.dropdown-btn');
  const menu = document.querySelector('.dropdown-menu');

  btn.addEventListener('click', () => {
    menu.classList.toggle('ativo');
  });

  // fechar ao clicar fora
  document.addEventListener('click', (e) => {
    if (!btn.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove('ativo');
    }
  });