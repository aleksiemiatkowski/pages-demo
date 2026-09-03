const colorInput = document.querySelector('[data-color-input]');
const colorPreview = document.querySelector('[data-color-preview]');
const colorValue = document.querySelector('[data-color-value]');
const hexValue = document.querySelector('[data-hex-value]');
const rgbValue = document.querySelector('[data-rgb-value]');
const randomizeButton = document.querySelector('[data-randomize]');
const outputTitle = document.querySelector('[data-output-title]');

function updateColor(color) {
  const normalizedColor = color.toUpperCase();
  const red = parseInt(color.slice(1, 3), 16);
  const green = parseInt(color.slice(3, 5), 16);
  const blue = parseInt(color.slice(5, 7), 16);
  colorPreview.style.backgroundColor = color;
  colorValue.textContent = normalizedColor;
  hexValue.textContent = normalizedColor;
  rgbValue.textContent = `${red}, ${green}, ${blue}`;
  outputTitle.textContent = 'Kolor gotowy.';
}

if (colorInput) {
  colorInput.addEventListener('input', (event) => updateColor(event.target.value));
  randomizeButton.addEventListener('click', () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    colorInput.value = randomColor;
    updateColor(randomColor);
    outputTitle.textContent = 'Nowy kolor.';
  });
}
