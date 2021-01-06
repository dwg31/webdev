const btn = document.querySelector('#v2');

btn.onclick = function () {
    console.log("Yay!");
}

btn.onmouseenter = function () {
    console.log("AHHHHHHHH");
    console.log("STOP TOUCHING ME!!!")
}

const button3 = document.querySelector('#v3')
button3.addEventListener('click', () => {
    alert("Button3 is clicked!")
})