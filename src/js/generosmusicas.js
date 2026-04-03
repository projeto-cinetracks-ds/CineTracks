//quando o usuário digita algo e aperta enter, o site executa a busca automaticamente
document.getElementById("busca").addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        pesquisarFilmes();
    }
});
// uma funçao que filtra as musicas quando pesquisa
function pesquisarFilmes() {
    const termo = document.getElementById("busca").value.toLowerCase();
    const filmes = document.querySelectorAll(".musica");

    filmes.forEach(filme => {
      const nome = filme.querySelector(".nome-musica").textContent.toLowerCase();

     // mostra ou esconde a música dependendo se o termo digitado está no nome
      if (nome.includes(termo)) {
        filme.style.display = "flex";
        filme.style.flexDirection = "column";
      } else {
        filme.style.display = "none";
}

    }); }



// JS DE IR PRO LADO (carrossel rs )

//  faz a navegação horizontal das listas de músicas e controla a visibilidade das setas
document.addEventListener('DOMContentLoaded', () => {

  document.querySelectorAll('.uniao-titulo-carreira').forEach(carreira => {

    const lista = carreira.querySelector('.lista-musicas');
    const btnDireita = carreira.querySelector('.direita');
    const btnEsquerda = carreira.querySelector('.esquerda');

    if (!lista || !btnDireita || !btnEsquerda) return;

    // passo proporcional à largura visível da lista (80%)
    function getPasso() {
      return lista.clientWidth * 0.8;
    }
    // atualiza se as setas devem aparecer ou não
    function atualizarSetas() {
      const maxScroll = lista.scrollWidth - lista.clientWidth;

      btnEsquerda.classList.toggle('oculta', lista.scrollLeft <= 0);
      btnDireita.classList.toggle('oculta', lista.scrollLeft >= maxScroll - 1);
    }
    // scroll suave para direita
    btnDireita.addEventListener('click', () => {
      lista.scrollBy({ 
        left: getPasso(), 
        behavior: 'smooth' 
      });
    });
    // scroll suave para esquerda
    btnEsquerda.addEventListener('click', () => {
      lista.scrollBy({ 
        left: -getPasso(), 
        behavior: 'smooth' 
      });
    });

    // atualiza setas quando o usuário scrolla manualmente
    lista.addEventListener('scroll', atualizarSetas);

    // estado inicial das setas
    atualizarSetas();
  });

});






// JS DO DESCUBRA, FUNCIONAL PARA O MOBILE TBM
// (dropdown é um menu que fica escondido e só aparece quando o usuário clica)
// controla a abertura e fechamento dos menus dropdown
document.addEventListener('DOMContentLoaded', () => {

  // seleciona todos os botões DESCUBRA
  document.querySelectorAll('.dropdown-btn').forEach(btn => {

    btn.addEventListener('click', e => {
      e.preventDefault();      // evita ação padrão
      e.stopPropagation();     // evita que o clique feche o menu pai

      const menu = btn.nextElementSibling; // pega o dropdown-menu

      // toggle: se estiver aberto fecha, se fechado abre (basicamente como um interruptor)
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
  // MENU HAMBURGUER
  // abre e fecha o menu mobile quando clica no ícone ou em um item
const hamburguer = document.querySelector('.hamburguer');
const headerMenu = document.querySelector('.menu-header');

function toggleMenu(){
    hamburguer.classList.toggle('active');
    headerMenu.classList.toggle('active');
}

hamburguer.addEventListener('click', toggleMenu);

// fecha o menu quando clica em algum item
headerMenu.addEventListener('click', (event) => {
    if (event.target.classList.contains('item-menu')) {
        toggleMenu();
    }
});