const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach((el) => {
    console.log(el);
})

// for (let el of numbers) {
//     console.log(el)
// }

const newmap = numbers.map((num) => num * 2)

console.log(newmap)

setTimeout(() => {
    console.log('hello')
}, 3000)

console.log("Good bye")

const id = setInterval(() => {
    console.log(Math.random())
}, 2000);

clearInterval(id)

const oddArray = numbers.filter(n => n & 1 === 1)
console.log(oddArray)

function rollDie(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1;
}

function sum(...nums) {
    return nums.reduce((total, el) => total + el);
}

const [firstNumber, secondNumber] = numbers