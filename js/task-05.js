
const input = document.querySelector("#name-input");

const nameLabel = document.querySelector("#name-output");

input.addEventListener('input', onInputChange);

function onInputChange(event) {
    console.log(event.currentTarget.value);
    
    nameLabel.textContent = event.currentTarget.value;
    if (event.currentTarget.value === ""){
        return (`Anonimous`);
    };

}


// const refs = {
//     input: document.querySelector("#name-input"),
//     nameMessage: document.querySelector("#name-output"),
// };
// refs.nameMessage.textContent = "Anonymous";
// refs.input.addEventListener("input", onInputChange);
// function onInputChange(event) {
//     refs.nameMessage.textContent = event.currentTarget.value;
// }