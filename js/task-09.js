function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyColor = document.querySelector("body");
const spanColor = document.querySelector(".color");
const buttonColor = document.querySelector(".change-color");

buttonColor.addEventListener("click", () => {
  const color = getRandomHexColor();
  bodyColor.style.backgroundColor =  color;
  spanColor.textContent = color;
});

