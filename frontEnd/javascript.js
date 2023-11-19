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
