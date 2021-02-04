console.log("Hello!")
console.log()

let random = Math.random();
if (random < 0.5) {
    console.log(`You bumber ${random.toPrecision(2)} is less than 0.5`)
} else {
    console.log(`You bumber ${random.toPrecision(2)} is larger than 0.5`)
}
