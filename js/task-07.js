const inputRange = document.querySelector('input#font-size-control');

const textRange = document.querySelector('span#text');

inputRange.addEventListener('input', (event) => {
    textRange.style.fontSize = inputRange.value + 'px';
});