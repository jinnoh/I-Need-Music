const lightButton = document.getElementById("b1");

function darkMode(){
    var element = document.body;
    element.classList.toggle("aqua");
}

lightButton.addEventListener("click", darkMode);

let image = document.getElementById("image");
let images = ["ivory.jpg", "ivory2.jpg", "ivory3.jpg"];
setInterval(function(){
    let num = Math.floor(Math.random() * images.length);
    image.src = images[num];
}, 5000)