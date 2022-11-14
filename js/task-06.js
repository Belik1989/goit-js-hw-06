
const input = document.querySelector("#validation-input");


const validLength = Number(input.dataset.length);
console.log(validLength);

input.addEventListener('blur', onInputBlur);
function onInputBlur(event){
    if (event.currentTarget.value.length === validLength) {
    input.classList.add("valid");
} else {
    input.classList.remove("valid");
    input.classList.add("invalid");
}
}



