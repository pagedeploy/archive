const title = document.getElementById('title');
const colorStatus = document.getElementById('color-status');
const colorForm = document.getElementById('color-form');
const colorInput = document.getElementById('color-input');
const randomLink = document.getElementById('random-color');

let colorMap = {};

fetch('colors.json')
  .then(response => response.json())
  .then(data => {
    colorMap = data;
  });

function getHexFromInput(input) {
  const name = input.toLowerCase();
  if (colorMap[name]) return colorMap[name];
  if (/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(input)) return input;
  return null;
}

function applyColor(input) {
  const hex = getHexFromInput(input);
  if (hex) {
    title.style.color = hex;
    colorStatus.innerHTML = `Now available in <strong>${hex}</strong>!`;
  } else {
    colorStatus.innerHTML = `Hmm. Couldn't find <strong>"${input}"</strong>. <a href="#" id="error-random">Go random?</a>`;
    document.getElementById('error-random').addEventListener('click', (e) => {
      e.preventDefault();
      applyColor(getRandomHex());
    });
  }
}

function getRandomHex() {
  const values = Object.values(colorMap);
  return values[Math.floor(Math.random() * values.length)];
}

colorForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = colorInput.value.trim();
  applyColor(input);
  colorInput.value = '';
});

randomLink.addEventListener('click', (e) => {
  e.preventDefault();
  applyColor(getRandomHex());
});