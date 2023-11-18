const lightButton = document.getElementById("b1");

function darkMode(){
    var element = document.body;
    element.classList.toggle("gray");
}

lightButton.addEventListener("click", darkMode);


