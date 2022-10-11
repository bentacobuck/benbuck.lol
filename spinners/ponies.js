var spinner = document.querySelector(".spinner");
var spinPoints = document.querySelector("#spinPoints");
var up = document.querySelector("#up");

var spinPoints2 = 0;
var spc = 1;
var cost = 100;

function addSpinPoints () {
    spinPoints2 += spc;
    var msg = `$ ${spinPoints2}`;
    spinPoints.innerHTML = msg;
}

function upgrade () {
    if (spinPoints2 > cost) {
        spinPoints2 -= cost;
        spc += 2;
        cost += 100;
        var msg2 = `upgrade spinner $ ${cost}`;
        up.innerHTML = msg2;
        spinner.classList.replace("spinner","spinner2");
    }
}

 spinner.addEventListener("mouseover", addSpinPoints)
up.addEventListener("click", upgrade)