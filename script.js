const input = document.querySelector('#number');
const button = document.querySelector('#button');
const h1 = document.querySelector('h1');
let maxNum = 0
let targNum = 0;
let buttonPress = 0
let gameOver = false


button.addEventListener('click', function (e) {
    e.preventDefault;
    if (buttonPress === 0) {
        let maxNum = input.value;
        targNum = Math.floor(Math.random() * maxNum) + 1;
        h1.innerHTML = `Guess a number between 1 and ${maxNum}`;
        buttonPress++
    } else if (buttonPress >= 1 && !gameOver) {
        if (parseInt(input.value) > targNum) {
            h1.innerHTML = 'Too High, Guess again';
        } else if (parseInt(input.value) < targNum) {
            h1.innerHTML = 'Too Low, Guess again';
        } else if (parseInt(input.value) === targNum) {
            h1.innerHTML = 'You Got It!!!';
            gameOver = true;
        }

}})




/*







else if (maxNum !== 0) {

        let attempts = 1;
        while (input.value !== targNum) {
            attempts++;

    }
} */