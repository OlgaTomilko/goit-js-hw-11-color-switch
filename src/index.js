import './styles.css';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
};

let timerId = null;

refs.startBtn.addEventListener('click', startHandler);
refs.stopBtn.addEventListener('click', stopHandler);

// Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body
// на случайное значение из массива используя инлайн - стиль.
// При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.

// ⚠️ Учти, на кнопку Start можно нажать бесконечное количество раз.
// Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.

//Для генерации случайного числа (индекс элемента массива цветов), используй функцию randomIntegerFromInterval.

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeBodyColor() {
  const bodyColor = randomIntegerFromInterval(0, 5);
  refs.body.style.backgroundColor = colors[bodyColor];
}

function startHandler() {
  timerId = setInterval(changeBodyColor, 1000);
  refs.startBtn.disabled = 'true';
}

function stopHandler() {
  clearInterval(timerId);
  refs.startBtn.removeAttribute('disabled');
}
