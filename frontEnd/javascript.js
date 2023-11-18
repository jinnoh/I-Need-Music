const lightButton = document.getElementById("b1");

function darkMode(){
    var element = document.body;
    element.classList.toggle("aqua");
}

lightButton.addEventListener("click", darkMode);


