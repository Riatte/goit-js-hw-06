function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bigBox = document.querySelector('#boxes')
const numberBox = document.querySelector('input');
const buttonCreate = document.querySelector('button[data-create]');
const buttonDelete = document.querySelector('button[data-destroy]');

let widthBox = 30;
let heightBox = 30;

buttonCreate.addEventListener('click', () => {
  createBoxes(numberBox.value);
  console.log(bigBox);
});

buttonDelete.addEventListener('click', () => {
  destroyBoxes();
});


function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
  box.style.width = widthBox + 'px';
  box.style.height = heightBox + 'px';
  box.style.backgroundColor = getRandomHexColor();
    bigBox.append(box); 
   widthBox += 10;
    heightBox += 10; 
  }
};

function destroyBoxes() { 
  bigBox.textContent = '';
  widthBox = 30;
  heightBox = 30;
}

