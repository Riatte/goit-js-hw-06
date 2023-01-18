
const category = document.querySelectorAll('.item')
console.log(`Number of categories:${category.length}`);

category.forEach((item) => {

    const h2 = item.querySelector('h2')
    console.log('Category:', h2);

    const elem = item.querySelectorAll('li')
    console.log('Elements:', elem.length);
});