function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const button = addEventListener("click", changeColor);
const span = document.querySelector(".color");
function changeColor() {
  const color = getRandomHexColor();
  color.textContent = color;
  document.body.style.backgroundColor=color;
}
