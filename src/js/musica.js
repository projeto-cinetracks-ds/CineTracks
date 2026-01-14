// const params = new URLSearchParams(window.location.search);
// const obraId = params.get('obra');
// ========================================
// 0️⃣ DADOS DAS OBRAS
const obras = {
  "stranger-things": {
    titulo: "Stranger Things",
    tipo: "Série",
    imagem: "/src/assets/img/strangerthings.jpg"
  },
  "top-gun": {
    titulo: "Top Gun",
    tipo: "Filme",
    imagem: "/src/assets/img/topgun.png"
  },
  "pantera-negra": {
    titulo: "Pantera Negra",
    tipo: "Filme",
    imagem: "/src/assets/img/posterpanteranegra.jpg"
  },
  "sebeber-naocase":{
    titulo: "Se Beber, Não Case",
    tipo: "Filme",
    imagem: "/src/assets/img/sebebernaocaseposter.jpg"
  },
  "velozes-furiosos": {
    titulo:"Velozes e Furiosos: Desafio em Tóquio",
    tipo:"Filme",
    imagem:"/src/assets/img/velozesefuriosostokio.jpg"
  }
  // adicione mais obras aqui se precisar
};

// ========================================
// 1️⃣ PEGA O PARÂMETRO DA URL
const params = new URLSearchParams(window.location.search);
const obraAtual = params.get('obra'); // esse é o ID da obra

// ========================================
// 2️⃣ ESCONDE MÚSICAS QUE NÃO SÃO DA OBRA ATUAL
const cards = document.querySelectorAll('.music-card'); // NodeList de todas as músicas

cards.forEach(card => { // 'card' = cada music-card
  if (card.dataset.obra !== obraAtual) {
    card.remove(); // remove da tela
  }
});

const obrasSections = document.querySelectorAll('.bloco-obra');
obrasSections.forEach(section => {
  if (section.dataset.obra !== obraAtual) {
    section.remove();
  }
});

// ========================================
// 3️⃣ ATUALIZA CARD DO FILME/OBRA
if (obraAtual && obras[obraAtual]) {
  const obra = obras[obraAtual];
  const imgObra = document.querySelector('.img-obra');
  const tituloObra = document.querySelector('.obra-conteudo h4');
  const tipoObra = document.querySelector('.obra-conteudo h5');

  if (imgObra) imgObra.src = obra.imagem;
  if (tituloObra) tituloObra.textContent = obra.titulo;
  if (tipoObra) tipoObra.textContent = obra.tipo;
}



  const stars = document.querySelectorAll('.star-btn');

  stars.forEach(star => {
    star.addEventListener('click', () => {
      star.classList.toggle('active');
      star.textContent = star.classList.contains('active') ? '★' : '☆';
    });
  });





 
let currentIndex = null;
let currentCard = null;
let currentAudio = null;

cards.forEach((card, index) => {
  const audio = card.querySelector('audio');
  const title = card.querySelector('.music-title');
  const playPauseBtn = card.querySelector('.play-pause');
  const prevBtn = card.querySelector('.prev');
  const nextBtn = card.querySelector('.next');
  const player = card.querySelector('.player');

  const progress = card.querySelector('.progress');
  const currentTimeEl = card.querySelector('.current-time');
  const durationEl = card.querySelector('.duration');

  // 🔁 Esconde player e reseta estado
  function resetCard() {
    audio.pause();
    audio.currentTime = 0;
    playPauseBtn.textContent = '▶';
    playPauseBtn.classList.remove('active');
    player.classList.add('hidden');
  }

  // ▶️ Tocar música
  function playMusic() {
    // se outra música estiver ativa
    if (currentCard && currentCard !== card) {
      const prevAudio = currentCard.querySelector('audio');
      const prevPlayer = currentCard.querySelector('.player');
      const prevBtn = currentCard.querySelector('.play-pause');

      prevAudio.pause();
      prevAudio.currentTime = 0;
      prevBtn.textContent = '▶';
      prevBtn.classList.remove('active');
      prevPlayer.classList.add('hidden');
    }

    audio.play();
    playPauseBtn.textContent = '⏸';
    playPauseBtn.classList.remove('active');
    player.classList.remove('hidden');

    currentCard = card;
    currentAudio = audio;
    currentIndex = index;
  }

  // 👉 clicar no nome
  title.addEventListener('click', playMusic);

  // ▶️ / ⏸
  playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
      playMusic();
    } else {
      audio.pause();
      playPauseBtn.textContent = '▶';
      playPauseBtn.classList.add('active');
    }
  });

  // ⏮ anterior
  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      cards[currentIndex - 1].querySelector('.music-title').click();
    }
  });

  // ⏭ próxima
  nextBtn.addEventListener('click', () => {
    if (currentIndex < cards.length - 1) {
      cards[currentIndex + 1].querySelector('.music-title').click();
    }
  });

  // duração
  audio.addEventListener('loadedmetadata', () => {
    durationEl.textContent = formatTime(audio.duration);
  });

  // progresso
  audio.addEventListener('timeupdate', () => {
    progress.value = (audio.currentTime / audio.duration) * 100;
    currentTimeEl.textContent = formatTime(audio.currentTime);
  });

  // arrastar barra
  progress.addEventListener('input', () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
  });
});

// ⏱️ função global
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
