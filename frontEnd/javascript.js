//switch background color
function darkMode(){
    var element = document.body;
    element.classList.toggle("gray");
}
const lightButton = document.getElementById("b1");
lightButton.addEventListener("click", darkMode);

//scroll thru images
let image = document.getElementById("image");
let images = ["ivory.jpg", "ivory2.jpg", "ivory3.jpg"];
setInterval(function(){
    let num = Math.floor(Math.random() * images.length);
    image.src = images[num];
}, 5000)

//add to TODO list
var addToList = document.getElementById("search-bar");
addToList.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        let list = document.getElementById("todo");
        var listItem = document.getElementById("search-bar").value;
        var entry = document.createElement('li');
        entry.textContent = listItem;
        list.appendChild(entry);
        addToList.value = '';
        const removeButton = document.createElement("button");
        removeButton.id = "remove-button";
        entry.appendChild(removeButton);
        removeButton.style.borderStyle = "solid";
        removeButton.textContent = 'X';
        removeButton.style.backgroundColor = "transparent";
        removeButton.style.borderRadius = "25px";
        removeButton.addEventListener("click", function(){
            const removeFromList = document.querySelector("li");
            removeFromList.remove();
        })
    }
});
//remove certain tasks  