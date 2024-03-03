//## Mild

//Write a JavaScript program that defines a variable that stores a Number. 
//The program should print out the String "even" if the Number is even, and the String "odd" if the Number is odd. 
//Hint: You may need to do some extra research on the remainder operator (%) to solve this challenge.

var myAge = 36
if (myAge % 2 === 0) {
    console.log("This number is even")
} else if (myAge % 2 !== 0) {
    console.log("This number is odd")
}

// % 2 === 0
// If the number assigned to the variable myAge is evenly divisible (no remainder or a value of 0) by 2, it is even. 
// If the number assigned to the variable myAge is not evenly divisible (remainder is not 0) by 2, it is odd. 
// If the number assigned to the variable myAge is divisible by 2, then the remainder will be strictly equal to 0. 
// If the number assigned to the variable myAge is not divisible by 2, then the remainder will not strigly be equal to 0. 