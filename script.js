const boom = document.getElementById("boom");

boom.addEventListener('click', () => {
    new Audio("./sound/boom.wav").play();
})



const clap = document.getElementById("clap");

clap.addEventListener('click', () => {
    new Audio("./sound/clap.wav").play();
})

const hihat = document.getElementById("hihat");

hihat.addEventListener('click', () => {
    new Audio("./sound/hihat.wav").play();
})

const kick = document.getElementById("kick");

kick.addEventListener('click', () => {
    new Audio("./sound/kick.wav").play();
})

const openhat = document.getElementById("openhat");

openhat.addEventListener('click', () => {
    new Audio("./sound/openhat.wav").play();
})

const ride = document.getElementById("ride");

ride.addEventListener('click', () => {
    new Audio("./sound/ride.wav").play();
})

const snare = document.getElementById("snare");

snare.addEventListener('click', () => {
    new Audio("./sound/snare.wav").play();
})

const tink = document.getElementById("tink");

tink.addEventListener('click', () => {
    new Audio("./sound/tink.wav").play();
})

const tom = document.getElementById("tom");

tom.addEventListener('click', () => {
    new Audio("./sound/tom.wav").play();
})

//this keypress event is triggered for the whole document and will use the keycode from the event

document.addEventListener('keypress', (event) => {
        if(event.keyCode == 97){
            new Audio("./sound/boom.wav").play();
            boom.style.backgroundColor = "red";
        }else if(event.keyCode == 115){
            new Audio("./sound/clap.wav").play();
        }
        else if(event.keyCode == 100){
            new Audio("./sound/hihat.wav").play();
        }
        else if(event.keyCode == 102){
            new Audio("./sound/kick.wav").play();
        }
        else if(event.keyCode == 103){
            new Audio("./sound/openhat.wav").play();
        }
        else if(event.keyCode == 104){
            new Audio("./sound/ride.wav").play();
        }
        else if(event.keyCode == 106){
            new Audio("./sound/snare.wav").play();
        }
        else if(event.keyCode == 107){
            new Audio("./sound/tink.wav").play();
        }
        else if(event.keyCode == 108){
            new Audio("./sound/tom.wav").play();
        }

    });