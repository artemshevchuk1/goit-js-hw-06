const counter = {
    buttonincrement: document.querySelector("[data-action='increment']"),
    buttondecrement: document.querySelector("[data-action='decrement']"),
    value: document.getElementById('value'),
    };        
      
let counterValue = 0;
      
const increment = () => {
    counterValue += 1;
    counter.value.textContent = counterValue;
  };
  counter.buttonincrement.addEventListener("click", increment);

  const decrement = () => {
    counterValue -= 1;
    counter.value.textContent = counterValue;
  };
  counter.buttondecrement.addEventListener("click", decrement); 
