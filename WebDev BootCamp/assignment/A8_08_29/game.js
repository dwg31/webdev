// const number = 34;
// let guessing;
// while (false) {
//     guessing = Number(prompt("Guess a number!"))
//     if (guessing == number) {
//         alert("You are right! The number is " + number);
//         break;
//     } else if (guessing > number) {
//         alert("You got it wrong. Your guess is too high!")
//     } else {
//         alert("You got it wrong. Your guess is too low!")
//     }
// }

// for (let i = 0; i < 11; i++) {
//     console.log(i);
// }

// for (let j = 'a'; j < 'z'; j++) {
//     console.log(j);
// }

// let answer = prompt("are we there yet?");

// while (answer.indexOf("yes") === -1) {
//     answer = prompt("are we there yet?");
// }

// alert("Yay we made it!");

function isEven(num) {
    return num % 2 === 0;
}

function factorial(num) {
    let ans = 1;
    while (num > 0) {
        ans *= num;
        num--;
    }

    return ans;
}

function kebabToSnake(str) {
    let newStr = str.replace(/-/g, "_")

    return newStr;
}

function sing() {
    console.log("Singing...");
}