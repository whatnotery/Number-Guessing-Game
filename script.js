const input = document.querySelector('#number');
const button = document.querySelector('#button');
const h1 = document.querySelector('h1');
let maxNum = 0
let num = 0
button.addEventListener('click', function (e) {
    e.preventDefault
    if (num === 0) {
        let num = input.value;
        maxNum = num
        h1.innerHTML = `Guess a number between 1 and ${maxNum}`;
    } else if (maxNum !== 0) {
        Const = targNum = Math.floor(Math.random() * maxNum) + 1;
        let attempts = 1;
        while (input.value !== targNum) {
            attempts++;
            if (input.value > targNum) {
                h1.innerHTML = 'Too High, Guess again';
            } else { h1.innerHTML = 'Too Low, Guess again';}
    }
}})


