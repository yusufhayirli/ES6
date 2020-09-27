const firstNum = document.getElementById('first-num');
const secondNum = document.getElementById('second-num');
const sumButton = document.getElementById('btn-sum');
const subsButton = document.getElementById('btn-subs');
const multiButton = document.getElementById('btn-multi');
const divButton = document.getElementById('btn-div');
const result = document.getElementById('result');

sumButton.addEventListener('click', () => {
    const x=parseFloat(firstNum.value) || 0;
    const y=parseFloat(secondNum.value) || 0;
    result.innerHTML = (x + y);
});

subsButton.addEventListener('click', () => {
    const x=parseFloat(firstNum.value) || 0;
    const y=parseFloat(secondNum.value) || 0;
    result.innerHTML = (x - y);
});

multiButton.addEventListener('click', () => {
    const x=parseFloat(firstNum.value) || 0;
    const y=parseFloat(secondNum.value) || 0;
    result.innerHTML = (x * y);
});

divButton.addEventListener('click', () => {
    const x=parseFloat(firstNum.value) || 0;
    const y=parseFloat(secondNum.value) || 0;
    result.innerHTML = (x / y);
});