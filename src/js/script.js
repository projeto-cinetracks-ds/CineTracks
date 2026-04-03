
// codigo teste para a barra de pesquisa (nao funciona ainda)
// quando apertar ENTER dentro da barra de busca
document.getElementById("busca").addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        pesquisarFilmes();
    }
});

// função responsável por filtrar os filmes na tela
function pesquisarFilmes() {
    // pega o texto digitado e transforma em minúsculo (pra facilitar comparação)
    const termo = document.getElementById("busca").value.toLowerCase();

    // seleciona todos os elementos com classe "filme"
    const filmes = document.querySelectorAll(".filme");

    filmes.forEach(filme => {
      
        // vai pega o nome do filme dentro do card
        const nome = filme.querySelector(".nome-filme").textContent.toLowerCase();


        // ele verifica se o nome contém o termo digitado
        if (nome.includes(termo)) {
    filme.style.display = "flex";
    filme.style.flexDirection = "column";
} else {
    filme.style.display = "none";
}

    });
}

// treco de rodar com clique, igual do descubra
// ele tipo permite navegar horizontalmente pelos filmes com botões de seta
document.addEventListener('DOMContentLoaded', () => {

  document.querySelectorAll('.carrossel-filmes').forEach(filmes => {

    const lista = filmes.querySelector('.filmes');
    const btnDireita = filmes.querySelector('.arrow.right');
    const btnEsquerda = filmes.querySelector('.arrow.left');

    // se algum elemento não existir, não executa
    if (!lista || !btnDireita || !btnEsquerda) return;

    // ele define quanto a lista vai andar (30% )
    function getPasso() {
      return lista.clientWidth * 0.3;
    }

    // vai controlar quando esconder ou mostrar as setas
    function atualizarSetas() {
      const maxScroll = lista.scrollWidth - lista.clientWidth;
      // esconde seta esquerda se estiver no início
      btnEsquerda.classList.toggle('oculta', lista.scrollLeft <= 0);

      // esconde seta direita se estiver no final
      btnDireita.classList.toggle('oculta', lista.scrollLeft >= maxScroll - 1);
    }


    // Ao clicar na seta direita, move a lista para frente
    btnDireita.addEventListener('click', () => {
      lista.scrollBy({ 
        left: getPasso(), 
        behavior: 'smooth' 
      });
    });

    // Ao clicar na seta esquerda, move a lista para trás
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


// MENU HAMBURGUER (MOBILE)

// controla abertura e fechamento do menu em telas menores
const hamburguer = document.querySelector('.hamburguer');
const headerMenu = document.querySelector('.menu-header');

// uma função que alterna o estado do menu (abrir/fechar)
function toggleMenu(){
    hamburguer.classList.toggle('active');
    headerMenu.classList.toggle('active');
}

// ele abre ou fecha o menu ao clicar no ícone
hamburguer.addEventListener('click', toggleMenu);


headerMenu.addEventListener('click', (event) => {
    if (event.target.classList.contains('item-menu')) {
        toggleMenu();
    }
});

// JS DO DESCUBRA, FUNCIONAL PARA O MOBILE TBM
// ele controla menus que abrem ao clicar e fecham ao clicar fora
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










































  