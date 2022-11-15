// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }


// const body = document.body;
// const widgetEl = document.querySelector(".widget");
// const changColor =  document.querySelector(".color");
// const changeColorBtn = document.querySelector(".change-color");


// changeColorBtn.addEventListener("click", changeColor);

// function changeColor(event) {

//   const color = changColor.textContent;
//     changColor.textContent = getRandomHexColor();
//       body.style.backgroundColor = color;
//       // console.log(color);
// }

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.querySelector("body");
const nameColor = document.querySelector(".color");
const changeBtn = document.querySelector(".change-color");

changeBtn.addEventListener("click", () => {
    const color = getRandomHexColor();
    nameColor.textContent = color;
    body.style.backgroundColor = color;
});