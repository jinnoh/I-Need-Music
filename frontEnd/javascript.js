//switch background color
function darkMode(){
    var element = document.body;
    element.classList.toggle("gray");
}
const lightButton = document.getElementById("b1");
lightButton.addEventListener("click", darkMode);

const lightButton = document.getElementById("b1");
lightButton.addEventListener("click", darkMode);

//scroll thru images
let image = document.getElementById("image");
let images = ["anime-cute.gif", "fall.gif", "tumblr_aefa0affcfdd771d207cab1703e5708a_2c30bc93_540.gif", "tumblr_fb536bb6877fd39645b1259a2132ca66_774b6273_540.gif"];
setInterval(function(){
    let num = Math.floor(Math.random() * images.length);
    image.src = images[num];
}, 5000)

//add to TODO list
//to do list
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
        removeButton.className = "remove-button";
        entry.appendChild(removeButton);
        removeButton.style.borderStyle = "solid";
        removeButton.textContent = 'X';
        removeButton.style.backgroundColor = "transparent";
        removeButton.style.borderRadius = "25px";

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



const timerstart = document.getElementById("timer-start")
const timerstop = document.getElementById("timer-stop")
const timerreset = document.getElementById("timer-reset")
const timerduration = document.getElementById("timer")

let interval
let timeLeft = 1500;

function updateTimer(){
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    let formattedTime = `${minutes.toString().
    padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;

    timerduration.innerHTML = formattedTime
}

function startTimer(){
    console.log("start");
    interval = setInterval(()=> {
        timeLeft--;
        updateTimer();
        if(timeLeft === 0){
            clearInterval(interval);
            alert("Time's up!");
            timeLeft = 1500;
            updateTimer();
        }
    }, 1000);
}
function stopTimer(){
    clearInterval(interval);
}
function resetTimer(){
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer();
}

timerstart.addEventListener("click", startTimer)
timerstop.addEventListener("click", stopTimer)
timerreset.addEventListener("click", resetTimer)

//remove certain tasks  