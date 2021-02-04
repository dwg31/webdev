let firstName = prompt("what is your first name?");
let lastName = prompt("what is your last name?");
let age = prompt("what is your age?");
console.log("Your full name is " + firstName + " " + lastName);
console.log("Your age is " + age + " years old");

if (age < 0) {
    console.log("Error! Negative age!");
}
else {
    if (age == 21) {
    console.log("Happy 21st birthday!");
    }
    if (age % 2 == 1) {
        console.log("Your age is odd!");
    }
    if (age == Math.sqrt(age)) {
        console.log("Your age is a perfect square!");
    }
}

