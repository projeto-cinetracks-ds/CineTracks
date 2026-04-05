// HAMBURGUER HAMBURGUER

// seleciona o ícone do menu e o menu principal
const hamburguer = document.querySelector('.hamburguer');
const headerMenu = document.querySelector('.menu-header');

// função que abre ou fecha o menu
function toggleMenu(){
    hamburguer.classList.toggle('active');
    headerMenu.classList.toggle('active');
}

// abre/fecha menu ao clicar no ícone
hamburguer.addEventListener('click', toggleMenu);

// fecha o menu quando clica em algum item do menu
headerMenu.addEventListener('click', (event) => {
    if (event.target.classList.contains('item-menu')) {
        toggleMenu();
    }
});
// JS DO DESCUBRA, FUNCIONAL PARA O MOBILE TBM
document.addEventListener('DOMContentLoaded', () => {

  // seleciona todos os botões DESCUBRA
  document.querySelectorAll('.dropdown-btn').forEach(btn => {

    btn.addEventListener('click', e => {
      e.preventDefault();      // não deixa ação padrão
      e.stopPropagation();     // não deixa que o clique feche o menu pai

      const menu = btn.nextElementSibling; // pega o dropdown-menu

      // toggle: se estiver aberto fecha, se fechado abre
      menu.classList.toggle('ativo');
    });
  });

  // fecha dropdown se clicar fora dele
  document.addEventListener('click', e => {
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
      menu.classList.remove('ativo');
    });
  });

});


// tela de carregamento
window.addEventListener("load", function(){
    setTimeout(() => {
        document.getElementById("loading").style.opacity = "0";
        document.getElementById("loading").style.transition = "opacity 0.5s ease";
        
        setTimeout(() => {
            document.getElementById("loading").style.display = "none";
        }, 500);

    }, 1500);
});

