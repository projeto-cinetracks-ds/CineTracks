// JS DE IR PRO LADO (carrossel hehe )
// ele permite navegar horizontalmente pelas listas de músicas e controla visibilidade das setas
document.addEventListener('DOMContentLoaded', () => {

  document.querySelectorAll('.uniao-titulo-carreira').forEach(carreira => {

    const lista = carreira.querySelector('.lista-musicas');
    const btnDireita = carreira.querySelector('.direita');
    const btnEsquerda = carreira.querySelector('.esquerda');

    if (!lista || !btnDireita || !btnEsquerda) return;

    // calcula o quanto a lista vai andar ao clicar na seta (30% visível)
    function getPasso() {
      return lista.clientWidth * 0.3;
    }
    // atualiza visibilidade das setas dependendo da posição do scroll
    function atualizarSetas() {
      const maxScroll = lista.scrollWidth - lista.clientWidth;

      btnEsquerda.classList.toggle('oculta', lista.scrollLeft <= 0);
      btnDireita.classList.toggle('oculta', lista.scrollLeft >= maxScroll - 1);
    }
    // scroll suave para a direita
    btnDireita.addEventListener('click', () => {
      lista.scrollBy({ 
        left: getPasso(), 
        behavior: 'smooth' 
      });
    });
    // scroll suave para a esquerda
    btnEsquerda.addEventListener('click', () => {
      lista.scrollBy({ 
        left: -getPasso(), 
        behavior: 'smooth' 
      });
    });

    // faz atualiza setas quando o usuário scrolla manualmente
    lista.addEventListener('scroll', atualizarSetas);

    // estado inicial das setas
    atualizarSetas();
  });

});


// js da barra de pesquisa (não ta 100% ainda)
// ele executa a busca de músicas quando o usuário aperta Enter
document.getElementById("busca").addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        pesquisarFilmes();
    }
});

// uma função que filtra obras de acordo com o termo digitado
function pesquisarFilmes() {
    const termo = document.getElementById("busca").value.toLowerCase();
    const filmes = document.querySelectorAll(".obra");


    filmes.forEach(obra => {
        const nome = obra.querySelector(".nome-obra").textContent.toLowerCase();
if (nome.includes(termo)) {
    obra.style.display = "flex";
    obra.style.flexDirection = "column";
} else {
    obra.style.display = "none";
}

    });
}



// JS DO DESCUBRA, FUNCIONAL PARA O MOBILE TBM (dropdown)
// controla a abertura e fechamento dos menus dropdown, funcional também no mobile
document.addEventListener('DOMContentLoaded', () => {

  // seleciona todos os botões DESCUBRA
  document.querySelectorAll('.dropdown-btn').forEach(btn => {

    btn.addEventListener('click', e => {
      e.preventDefault();      // evita ação padrão
      e.stopPropagation();     // evita que o clique feche o menu pai

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
  // HAMBURGUER
  // abre e fecha o menu mobile ao clicar no ícone ou em um item do menu
const hamburguer = document.querySelector('.hamburguer');
const headerMenu = document.querySelector('.menu-header');

function toggleMenu(){
    hamburguer.classList.toggle('active'); // muda visual do ícone do menu
    headerMenu.classList.toggle('active'); // mostra ou esconde o menu
}

hamburguer.addEventListener('click', toggleMenu);  // abre/fecha menu ao clicar no ícone

// fecha o menu quando clica em algum item
headerMenu.addEventListener('click', (event) => {
    if (event.target.classList.contains('item-menu')) {
        toggleMenu();
    }
});