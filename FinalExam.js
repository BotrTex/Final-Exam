let attempts = 5;
let choice = 0;
let random = 0;

//generate random number//
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min +1)) +1;
}
const RandomNumber = generateRandomNumber(1, 100);
console.log("The random number =", RandomNumber);

//-------------------------

   while (attempts > -1) {
    

if (attempts > 0) {
    choice = Number( prompt("Try and Guess the Random Number!") );
    console.log("attempts left =", attempts);
    attempts--;
} 

if (choice = generateRandomNumber) {
    console.log("You win!");

if (attempts = 0) {
    console.log("You Lose!!")
}

}
}
