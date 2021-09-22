let maxNum=parseInt(prompt("Enter a max number!"));
while(!maxNum){
    maxNum=parseInt(prompt("Enter a valid number!"));
}
Const = targNum=Math.floor(Math.random()*maxNum)+1;
let attempts = 1;

let guess = prompt("Enter your first guess");
while (parseInt(guess) !== targNum) {
    if(guess === "quit") break;
    attempts++;
    if (guess > targNum) {
       guess= prompt("Too high, enter another guess");
    } else { guess= prompt("Too low, enter another guess");}
    
}
if (guess === "q"){
    alert("Quitter")
} else if (guess!== "q" &&attempts === 1) {
    alert(`You got it! it took you ${attempts} guess`);
    } else {
        alert(`You got it! it took you ${attempts} guesses`);  
    }

