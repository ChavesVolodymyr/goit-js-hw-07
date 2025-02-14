function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const input = document.querySelector('input');
const divBoxes = document.querySelector('#boxes');

createBtn.addEventListener('click', event => {
  const amount = input.value;

  if (input.value > 0 && input.value <= 100) {
    createBoxes(amount);
    input.value = '';
  }
});

function createBoxes(amount) {
  const fragment = document.createDocumentFragment();
  let size = 30;

  for (let index = 0; index < amount; index++) {
    const div = document.createElement('div');
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;

    fragment.appendChild(div);

    size += 10;
  }
  divBoxes.innerHTML = '';
  divBoxes.appendChild(fragment);
}

destroyBtn.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  divBoxes.innerHTML = '';
}
