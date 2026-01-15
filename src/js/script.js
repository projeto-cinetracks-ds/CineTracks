// codigo teste para a barra de pesquisa (nao funciona ainda)
// quando apertar ENTER dentro da barra de busca
document.getElementById("busca").addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        pesquisarFilmes();
    }
});

function pesquisarFilmes() {
    const termo = document.getElementById("busca").value.toLowerCase();
    const filmes = document.querySelectorAll(".filme");

    filmes.forEach(filme => {
        const nome = filme.querySelector(".nome-filme").textContent.toLowerCase();
if (nome.includes(termo)) {
    filme.style.display = "flex";
    filme.style.flexDirection = "column";
} else {
    filme.style.display = "none";
}

    });
}
// SCRIPT DO CARROSSEL-FILMES, NA RESPONSIVIDADE
 (function () {
  const mediaQuery = window.matchMedia("(max-width: 768px)");
  let filmes;

  function initMobileCarousel() {
    if (!mediaQuery.matches) return;

    filmes = document.querySelector(".filmes");
    if (!filmes) return;
  }

  // FUNÇÕES GLOBAIS (para os botões)
  window.scrollRight = function () {
    if (!mediaQuery.matches || !filmes) return;

    filmes.scrollLeft += 150;
  };

  window.scrollLeftBtn = function () {
    if (!mediaQuery.matches || !filmes) return;

    filmes.scrollLeft -= 150;
  };

  // inicializa quando a página carregar
  window.addEventListener("load", initMobileCarousel);

  // se mudar de tamanho (mobile ↔ desktop)
  mediaQuery.addEventListener("change", () => {
    filmes = mediaQuery.matches
      ? document.querySelector(".filmes")
      : null;
  });
})();
// HAMBURGUER
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
// JS DO DESCUBRA, FUNCIONAL PARA O MOBILE TBM
document.addEventListener('DOMContentLoaded', () => {

  // Seleciona todos os botões DESCUBRA
  document.querySelectorAll('.dropdown-btn').forEach(btn => {

    btn.addEventListener('click', e => {
      e.preventDefault();      // evita ação padrão
      e.stopPropagation();     // evita que o clique feche o menu pai

      const menu = btn.nextElementSibling; // pega o dropdown-menu

      // Toggle: se estiver aberto fecha, se fechado abre
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



























  