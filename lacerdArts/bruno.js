const fila = document.querySelector('.carousel-container');
const desenho = document.querySelector('.desenho');

const flechaEsquerda = document.getElementById('flecha-esquerda');
const flechaDireita = document.getElementById('flecha-direita');

flechaDireita.addEventListener('click', () => {
  fila.scrollLeft +=  fila.offsetWidth;
});

flechaEsquerda.addEventListener('click', () => {
  fila.scrollLeft -=  fila.offsetWidth;
});
