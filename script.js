let count =0;

const displayCount = document.getElementById('displayCount');
const incrementButton = document.getElementById('incrementButton');
const decrementButton = document.getElementById('decrementButton');
const resetButton = document.getElementById('resetButton');

incrementButton.addEventListener('click', () => {
    displayCount.innerText = ++count;
});

decrementButton.addEventListener('click', () => {
    displayCount.innerText = --count;
});

resetButton.addEventListener('click', () => {
    count=0;
    displayCount.innerText = count;
});
