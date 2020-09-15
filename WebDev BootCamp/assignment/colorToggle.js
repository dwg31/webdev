// alert("Connected")

var button = document.querySelector("button");
// var isPurple = false;
button.addEventListener("click", clicked);

// function clicked() {
//     // alert("Clicked!");
//     if (isPurple) {
//         document.body.style.background = "white";
//     } else {
//         document.body.style.background = "purple";
//     }
//     isPurple = !isPurple;
// }

function clicked() {
    document.body.classList.toggle("purple");
}