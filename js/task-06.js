const inputNotFocus = document.querySelector('#validation-input');

inputNotFocus.addEventListener("blur", lengthTest);

function changeClass(add, remove) {
    inputNotFocus.classList.remove(remove);
    inputNotFocus.classList.add(add);
};

function lengthTest(event) {

    if (event.currentTarget.value.length === Number(inputNotFocus.dataset.length)) {
        changeClass('valid', 'invalid')
    }
    else if (event.currentTarget.value.length !== Number(inputNotFocus.dataset.length)) {
        changeClass('invalid', 'valid')
    }
     
};

