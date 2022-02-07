function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const button = addEventListener("click", changeColor);

function changeColor() {
  const color = document.querySelector(".color");
  color.textContent = (getRandomHexColor());
  document.body.style.backgroundColor=(getRandomHexColor());
}
