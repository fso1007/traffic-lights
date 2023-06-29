const image = document.querySelector('.tlights__img');
const redBtn = document.getElementById('button-red');
const yellowBtn = document.getElementById('button-yellow');
const greenBtn = document.getElementById('button-green');
const autoBtn = document.getElementById('button-auto');
let timer;
let i = 0;

const lightColor = {
  red:    './public/assets/images/red-light.svg',
  yellow: './public/assets/images/yellow-light.svg',
  green:  './public/assets/images/green-light.svg'
};

const turnRed = () => {
  clearInterval(timer);
  enableAutoBtn();
  image.src = lightColor.red;
};

const turnYellow = () => {
  clearInterval(timer);
  enableAutoBtn();
  i = 1;
  image.src = lightColor.yellow;
};

const turnGreen = () => { 
  clearInterval(timer);
  enableAutoBtn();
  i = 2;
  image.src = lightColor.green;
};

const changeIndex = () => {
  const colors = Object.keys(lightColor);
  image.src = lightColor[colors[i]];
  i++;
  if (i > 2) i = 0;
};

const autoChange = () => {
  disableAutoBtn();
  timer = setInterval(changeIndex, 1000);
};

function disableAutoBtn() {
  autoBtn.disabled = true;
}

function enableAutoBtn() {
  autoBtn.disabled = false;
}

redBtn.addEventListener('click', turnRed);
yellowBtn.addEventListener('click', turnYellow);
greenBtn.addEventListener('click', turnGreen);
autoBtn.addEventListener('click', autoChange);


// DUVIDAS

// O codigo ficou muito grande pra executar algo simples?
// É uma pratica ruim colocar varias ações dentro de uma função? ex: clearInterval, enableAutoBt dentro de turnRed