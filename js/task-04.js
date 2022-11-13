
const counter = {
    value : 0,
    // const counter = document.querySelector("#counter");
    increment() {
    console.log('increment -> this', this);
    this.value += 1;
    },
    decrement() {
        console.log('decrement -> this', this);
        this.value -= 1;
    },
};

const decrementBtn = document.querySelector('button[data-action="decrement"]');
    
const incrementBtn = document.querySelector('button[data-action="increment"]');
    
const counterValue = document.querySelector('#value');

console.log(decrementBtn);
console.log(incrementBtn);
console.log(counterValue);

decrementBtn.addEventListener('click', function(){
console.log('decrement');

counter.decrement();
console.log(counter);
counterValue.textContent = counter.value;
});
incrementBtn.addEventListener('click', function(){
console.log('increment');

counter.increment();
console.log(counter);
counterValue.textContent = counter.value;

});