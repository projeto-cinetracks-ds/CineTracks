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

// treco de rodar com clique, igual do descubra
document.addEventListener('DOMContentLoaded', () => {

  document.querySelectorAll('.carrossel-filmes').forEach(filmes => {

    const lista = filmes.querySelector('.filmes');
    const btnDireita = filmes.querySelector('.arrow.right');
    const btnEsquerda = filmes.querySelector('.arrow.left');

    if (!lista || !btnDireita || !btnEsquerda) return;

    // Passo proporcional à largura visível da lista (80%)
    function getPasso() {
      return lista.clientWidth * 0.3;
    }

    function atualizarSetas() {
      const maxScroll = lista.scrollWidth - lista.clientWidth;

      btnEsquerda.classList.toggle('oculta', lista.scrollLeft <= 0);
      btnDireita.classList.toggle('oculta', lista.scrollLeft >= maxScroll - 1);
    }

    btnDireita.addEventListener('click', () => {
      lista.scrollBy({ 
        left: getPasso(), 
        behavior: 'smooth' 
      });
    });

    btnEsquerda.addEventListener('click', () => {
      lista.scrollBy({ 
        left: -getPasso(), 
        behavior: 'smooth' 
      });
    });

    // Atualiza setas quando o usuário scrolla manualmente
    lista.addEventListener('scroll', atualizarSetas);

    // Estado inicial das setas
    atualizarSetas();
  });

});
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





































  