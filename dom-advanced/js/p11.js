let redLight = document.querySelector(".red");
let yellowLight = document.querySelector(".yellow");
let greenLight = document.querySelector(".green");

function lightControl() {
    setInterval(function(){
        redLight.style.animationPlayState = "running"
    },10000)

    setInterval(function(){
        yellowLight.style.animationPlayState = "running";
    },20000)

    setInterval(function(){
        greenLight.style.animationPlayState = "running";
    },30000)
}

setInterval(function(){
    lightControl()
},60000)

lightControl()