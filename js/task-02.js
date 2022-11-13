const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
"Condiments",
];

const listIng = document.querySelector("#ingredients");

const elements = ingredients.map(ingredient => {
  const liEl = document.createElement("li");
  liEl.classList.add("item");
  liEl.textContent = ingredient;

  return liEl;
});
console.log(elements);
listIng.append(...elements);

// const makeIngredientsList = options => {
//   return options.map(option => {
//     const liEl= document.createElement("li");
//     liEl.classList.add("item");
//     liEl.textContent = option;

//     return liEl;
//   });
// };

// const elements = makeIngredientsList(ingredients);
// console.log(elements);
// listIng.append(...elements);