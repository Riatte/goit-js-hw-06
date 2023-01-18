const inputEnter = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

inputEnter.addEventListener('input', (event) => {
    nameOutput.textContent = event.currentTarget.value;
    if (event.currentTarget.value.trim() === "") {
        nameOutput.textContent = "Anonymous";
    }
});