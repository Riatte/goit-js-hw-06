const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector('#ingredients');

ingredients.forEach((items) => {
  const ingr = document.createElement("li");
  ingr.textContent = items;
  ingr.classList.add("item");
  list.append(ingr);
});