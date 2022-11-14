const inputEl = document.querySelector("#font-size-control");

const textEl = document.querySelector("#text");

let inputValue = inputEl.value;

inputEl.addEventListener("input", (event) => {
    textEl.style.fontSize = event.currentTarget.value + "px";
})