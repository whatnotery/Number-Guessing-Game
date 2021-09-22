const input = document.querySelector('#number');
const button = document.querySelector('#button');
const h1 = document.querySelector('h1');


    button.addEventListener('click', function (e){
        e.preventDefault
        let maxNum = input.value;
        h1.innerHTML = `Guess a number between 1 and ${maxNum}`;   
})


/* want to expand the logic so that after the maxNum variable is set it 
compares any future input.value against maxNum on button clicks and then 
modifies the h1.innerHTML to say too high or too low. after the correct 
guess is made I want it to say how many guesses it took */ 

