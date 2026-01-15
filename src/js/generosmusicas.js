document.addEventListener('DOMContentLoaded', () => {

  document.querySelectorAll('.uniao-titulo-carreira').forEach(carreira => {

    const lista = carreira.querySelector('.lista-musicas');
    const btnDireita = carreira.querySelector('.direita');
    const btnEsquerda = carreira.querySelector('.esquerda');

    if (!lista || !btnDireita || !btnEsquerda) return;

    const passo = 100;

    function atualizarSetas() {
      const maxScroll = lista.scrollWidth - lista.clientWidth;

      btnEsquerda.classList.toggle('oculta', lista.scrollLeft <= 0);
      btnDireita.classList.toggle('oculta', lista.scrollLeft >= maxScroll - 1);
    }

    btnDireita.addEventListener('click', () => {
      lista.scrollLeft += passo;
    });

    btnEsquerda.addEventListener('click', () => {
      lista.scrollLeft -= passo;
    });

    lista.addEventListener('scroll', atualizarSetas);

    atualizarSetas(); // estado inicial
  });

});