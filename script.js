const input = document.querySelector('#number');
const button = document.querySelector('#button');
const reset = document.querySelector('#reset');
const h1 = document.querySelector('h1');
let maxNum = 0;
let targNum = 0;
let buttonPress = 0;
let gameOver = false;


button.addEventListener('click', function (e) {
    e.preventDefault;
    if (buttonPress === 0 && input.value) {
        maxNum = input.value;
        targNum = Math.floor(Math.random() * maxNum) + 1;
        h1.innerHTML = `Guess a number between 1 and ${maxNum}.`;
        button.innerHTML = 'Guess';
        buttonPress++;
        input.value = '';
    } else if (buttonPress >= 1 && !gameOver) {
        buttonPress++;
        if (parseInt(input.value) > targNum) {
            if (parseInt(input.value) > maxNum) {
                h1.innerHTML = `Number is below ${maxNum}.`;
                input.value = '';
            } else {
                h1.innerHTML = 'Too high, guess again.';
                input.value = '';
            }
        } else if (parseInt(input.value) < targNum) {
            h1.innerHTML = 'Too low, guess again.';
            input.value = '';
        } else if (parseInt(input.value) === targNum) {
            gameOver = true;
            button.disabled = true;
            if (buttonPress === 2) {
                h1.innerHTML = `You got it in ${buttonPress - 1} guess.`;
            } else {
                h1.innerHTML = `You got it in ${buttonPress - 1} guesses.`;
            }

        }
    }
})

reset.addEventListener('click', function () {
    maxNum = 0;
    targNum = 0;
    buttonPress = 0;
    input.value = ''
    button.disabled = false;
    gameOver = false;
    button.innerHTML = 'Submit';
    h1.innerHTML = 'Enter a max number.';
});

window.addEventListener('keydown', function (e) {
    e.preventDefault;
    eventClick = new Event('click')
    if (e.key === 'Enter') {
        if (gameOver === false) {
            button.dispatchEvent(eventClick);
        } else if (gameOver === true) {
            reset.dispatchEvent(eventClick);
        }
    }
});

