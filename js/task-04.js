const value = document.querySelector("#value");
const buttonUp = document.querySelector('[data-action="increment"]');
const buttonDown = document.querySelector('[data-action="decrement"]');
let counterValue = 0;
buttonDown.addEventListener("click", onCLickButtonDown);
buttonUp.addEventListener("click", onCLickButtonUp);

function onCLickButtonDown(event) { 
    counterValue -= 1;
    value.textContent = counterValue;
};

function onCLickButtonUp(event) { 
    counterValue += 1;
    value.textContent  = counterValue;
}


