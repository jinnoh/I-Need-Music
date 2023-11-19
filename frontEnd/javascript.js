//switch background color
function darkMode(){
    var element = document.body;
    element.classList.toggle("gray");
}

//scroll thru images
let image = document.getElementById("image");
let images = ["ivory.jpg", "ivory2.jpg", "ivory3.jpg"];
setInterval(function(){
    let num = Math.floor(Math.random() * images.length);
    image.src = images[num];
}, 5000)

const lightButton = document.getElementById("b1");
lightButton.addEventListener("click", darkMode);

var addToList = document.getElementById("search-bar");
addToList.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        let list = document.getElementById("todo");
        var listItem = document.getElementById("search-bar").value;
        var entry = document.createElement('li');
        entry.textContent = listItem;
        list.appendChild(entry);
        addToList.value = '';
    }
});
