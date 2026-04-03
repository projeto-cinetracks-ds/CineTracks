// mesma coisa, menu hambuguer 
const hamburguer = document.querySelector('.hamburguer');
const headerMenu = document.querySelector('.menu-header');

// uma função que alterna o estado do menu (abrir/fechar)
function toggleMenu(){
    // adiciona/remove classe "active" no ícone (muda aparência visual)
    hamburguer.classList.toggle('active');
    
    // adiciona/remove classe "active" no menu (mostra ou esconde)
    headerMenu.classList.toggle('active');
}
// um evento de clique no ícone hamburguer
hamburguer.addEventListener('click', toggleMenu);

// fecha o menu automaticamente quando o usuário clica em um item

headerMenu.addEventListener('click', (event) => {
    if (event.target.classList.contains('item-menu')) {
        toggleMenu();
        // evita que o menu fique aberto depois da navegação
    }
});




// JS DO DESCUBRA, FUNCIONAL PARA O MOBILE TBM
document.addEventListener('DOMContentLoaded', () => {

  // Seleciona todos os botões DESCUBRA
  document.querySelectorAll('.dropdown-btn').forEach(btn => {

    btn.addEventListener('click', e => {
      e.preventDefault();      // evita ação padrão
      e.stopPropagation();     // evita que o clique feche o menu pai

      const menu = btn.nextElementSibling; // pega o dropdown-menu

      // toggle: se estiver aberto fecha, se fechado abre
      menu.classList.toggle('ativo');
    });
  });

  // Fecha dropdown se clicar fora dele
  document.addEventListener('click', e => {
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
      menu.classList.remove('ativo');
    });
  });

});

