// const params = new URLSearchParams(window.location.search);
// const obraId = params.get('obra');
// ========================================
//  DADOS DAS OBRAS (tipo um mini banco de dados, só que no js)
const obras = {
  "stranger-things": {
    titulo: "Stranger Things",
    tipo: "Série",
    imagem: "../../../CineTracks/src/assets/img/strangerthings.jpg"
  },
  "top-gun": {
    titulo: "Top Gun",
    tipo: "Filme",
    imagem: "../../../CineTracks/src/assets/img/topgun.png"
  },
  "pantera-negra": {
    titulo: "Pantera Negra",
    tipo: "Filme",
    imagem: "../../../CineTracks/src/assets/img/posterpanteranegra.jpg"
  },
  "sebeber-naocase":{
    titulo: "Se Beber, Não Case",
    tipo: "Filme",
    imagem: "../../../CineTracks/src/assets/img/sebebernaocaseposter.jpg"
  },
  "velozes-furiosos": {
    titulo:"Velozes e Furiosos",
    tipo:"Franquia de Filmes",
    imagem:"../../../CineTracks/src/assets/img/velozesefuriosos.poster.webp"
  },
  "aranhaverso":{
    titulo:"Homem aranha no Aranhaverso",
    tipo:"Filme",
    imagem:"../../../CineTracks/src/assets/img/aranhaversoposter.jpg"

  },
  "barbie":{
    titulo:"Barbie",
    tipo:"Filme",
    imagem:"../../../CineTracks/src/assets/img/comedia.barbie.jpg"
  },
  "giardioesdas-galaxias":{
  titulo:"Guardioes das galaxias",
  tipo:"filme",
  imagem:"../../../CineTracks/src/assets/img/guardioesdasgalaxias.jpg"
  },
  "bad-boys":{
    titulo:"Bad boys",
  tipo:"Filme",
  imagem:"../../../CineTracks/src/assets/img/adrenalina.badboys.jpg"
  },
   "arcane":{
  titulo:"Arcane",
  tipo:"Série",
  imagem:"../../../CineTracks/src/assets/img/poster.arcane.jpg"
   },
   "shrek":{
  titulo:"Shrek",
  tipo:"Franquia de Filmes",
  imagem:"../../../CineTracks/src/assets/img/animado.shrek.webp"
   },
   "avengers":{
    titulo: "Avengers: Endgame",
    tipo:"Filme",
    imagem:"../../../CineTracks/src/assets/img/heroico.avengersendgame.jpeg"
   },
   "batman":{
    titulo:"Batman",
    tipo: "Filme",
    imagem: "../../../CineTracks/src/assets/img/heroico.batman.jpeg"
   },
   "it":{
    titulo:"It",
    tipo:"Saga",
    imagem:"../../../CineTracks/src/assets/img/itacoisa.png"
   },
    "mammamia":{
    titulo:"Mamma mia",
    tipo:"Filme",
    imagem:"../../../CineTracks/src/assets/img/mammamia.jpeg"
   }
  // adicione mais obras aqui se precisar
};

// função que para TODAS as músicas do site
// usada para garantir que só uma música toque por vez
function stopAllAudios() {
  const audios = document.querySelectorAll('audio');
  const buttons = document.querySelectorAll('.play-pause');
  const cards = document.querySelectorAll('.music-card');

  audios.forEach(audio => {
    audio.pause();  // pausa o áudio
    audio.currentTime = 0;  // remove estado ativo
  });

  buttons.forEach(btn => {
    playPauseBtn.innerHTML = '&#9654;';
    btn.classList.remove('active');
  });

  cards.forEach(card => {
    card.classList.remove('playing'); // remove destaque visual
  });
}

// ========================================
// 1- PEGA O PARÂMETRO DA URL
// pega informações da URL (ex: ?obra=batman)
const params = new URLSearchParams(window.location.search);
const obraAtual = params.get('obra'); // esse é o ID da obra

// ========================================
// 2- ESCONDE MÚSICAS QUE NÃO SÃO DA OBRA ATUAL
// remove da tela tudo que não pertence à obra selecionada
const cards = document.querySelectorAll('.music-card'); // NodeList de todas as músicas

cards.forEach(card => { // 'card' = cada music-card
  if (card.dataset.obra !== obraAtual) {
    card.remove(); // remove da tela
  }
});

// faz o mesmo processo para seções completas da página
const obrasSections = document.querySelectorAll('.bloco-obra');
obrasSections.forEach(section => {
  if (section.dataset.obra !== obraAtual) {
    section.remove();
  }
});

// ========================================
// 3- ATUALIZA CARD DO FILME/OBRA
// troca imagem, título e tipo dinamicamente
if (obraAtual && obras[obraAtual]) {
  const obra = obras[obraAtual];
  const imgObra = document.querySelector('.img-obra');
  const tituloObra = document.querySelector('.obra-conteudo h4');
  const tipoObra = document.querySelector('.obra-conteudo h5');

  if (imgObra) imgObra.src = obra.imagem;
  if (tituloObra) tituloObra.textContent = obra.titulo;
  if (tipoObra) tipoObra.textContent = obra.tipo;
}

  // 4- SISTEMA DE FAVORITOS (ESTRELA)
  // permite marcar/desmarcar musicas como favoritas

  const stars = document.querySelectorAll('.star-btn');

  stars.forEach(star => {
    star.addEventListener('click', () => {
      star.classList.toggle('active');
      star.textContent = star.classList.contains('active') ? '★' : '☆';
    });
  });





  // ========================================
  // 5- CONTROLE GLOBAL DO PLAYER
  // guarda qual música esta tocando atualmente 
  let currentIndex = null;
  let currentCard = null;
  let currentAudio = null;


// ========================================
// 6- LOOP PRINCIPAL DOS CARDS DE MÚSICA

// adiciona comportamento individual para cada músicad
cards.forEach((card, index) => {

  // seleciona elementos internos do card
  const audio = card.querySelector('audio');
  const title = card.querySelector('.music-title'); 
  const playPauseBtn = card.querySelector('.play-pause');
  const prevBtn = card.querySelector('.prev');
  const nextBtn = card.querySelector('.next');
  const player = card.querySelector('.player');

  // elementos da barra de progresso
  const progress = card.querySelector('.progress');
  const currentTimeEl = card.querySelector('.current-time');
  const durationEl = card.querySelector('.duration');

  // esconde player e reseta estado
  function resetCard() {
    audio.pause();
    audio.currentTime = 0;
    playPauseBtn.innerHTML = '&#9654;';
    playPauseBtn.classList.remove('active');
    player.classList.add('hidden');
  }

    
    // 7- FUNÇÃO PRINCIPAL DE TOCAR MÚSICA
    // garante que so uma música toque por vez
    // tocar música

  function playMusic() {
  // se outra música estiver ativa, ele para ela
  if (currentCard && currentCard !== card) {
    const prevAudio = currentCard.querySelector('audio');
    const prevPlayer = currentCard.querySelector('.player');
    const prevBtn = currentCard.querySelector('.play-pause');

    prevAudio.pause();
    prevAudio.currentTime = 0;
    playPauseBtn.innerHTML = '&#9654;';
    prevBtn.classList.remove('active');
    prevPlayer.classList.add('hidden'); // esconde player
    prevPlayer.classList.remove('active'); // remove classe de exibição
  }

  // toca a música atual
  audio.play();

   // atualiza interface
  playPauseBtn.innerHTML = '&#10074;&#10074;';
  playPauseBtn.classList.add('active');     // marca botão ativo
  player.classList.remove('hidden');        // remove hidden
  player.classList.add('active');           // mostra player
  
  // atualiza controle global
  currentCard = card;
  currentAudio = audio;
  currentIndex = index;
}
  
// CODIGO CERTOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
  //clicar no nome
  title.addEventListener('click', playMusic);  
   
  // Botão play/pausa
  
  playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
      playMusic();
    } else {
      audio.pause();
      playPauseBtn.innerHTML = '&#9654;';
      playPauseBtn.classList.add('active');
    }
  });

  // anterior
  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      cards[currentIndex - 1].querySelector('.music-title').click();
    }
  });

  // próxima
  nextBtn.addEventListener('click', () => {
    if (currentIndex < cards.length - 1) {
      cards[currentIndex + 1].querySelector('.music-title').click();
    }
  });

  // duração
  audio.addEventListener('loadedmetadata', () => {
    durationEl.textContent = formatTime(audio.duration);
  });

  // atualiza barra de progresso
  audio.addEventListener('timeupdate', () => {
    progress.value = (audio.currentTime / audio.duration) * 100;
    currentTimeEl.textContent = formatTime(audio.currentTime);
  });

  // arrastar barra
  progress.addEventListener('input', () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
  });
});


// FORMATA TEMPO (segundos → minutos:segundos)
// 125 → 2:05
// função global
function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
}
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



// JS PARA TOCAR MUSICA NA RESPONSIVIDADE
document.querySelectorAll(".music-card").forEach(card => {
  card.querySelector(".desc-msc").addEventListener("click", () => {
    card.classList.toggle("active");
  });
});


//  TOCAR MÚSICA VIA URL
// Permite abrir o site já com uma música tocando (ex: ?play=audio1)
// const params = new URLSearchParams(window.location.search);
const musicToPlay = params.get('play');

if (musicToPlay) {
  const audio = document.getElementById(musicToPlay);

  if (audio) {
    const card = audio.closest('.music-card');

    // lista correta de cards (APENAS os que estão na página)
    // const cardsDaObra = [...document.querySelectorAll('.music-card')];

    const button = card.querySelector('.play-pause');
    const player = card.querySelector('.player');

    // mostra o player
    player.classList.remove('hidden');
    button.classList.remove('hidden');

    // garante que nenhuma outra esteja tocando
    if (currentAudio && currentAudio !== audio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    // toca a música
    audio.play();

    // estado global CORRETO
    currentAudio = audio;
    currentCard = card;
    currentIndex = cardsDaObra.indexOf(card);

    // estado visual correto
    playPauseBtn.innerHTML = '&#10074;&#10074;';
    button.classList.add('active');

    // opcional: marca o card como tocando
    card.classList.add('playing');

    // anterior
  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      cards[currentIndex - 1].querySelector('.music-title').click();
    }
  });

  // próxima
  nextBtn.addEventListener('click', () => {
    if (currentIndex < cards.length - 1) {
      cards[currentIndex + 1].querySelector('.music-title').click();
    }
  });


  }
}