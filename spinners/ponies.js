var spinner = document.querySelector(".spinner");
var spinPoints = document.querySelector("#spinPoints");
var up = document.querySelector("#up");

var spinPoints2 = 0;
var spc = 1;
var cost = 100;
var level = 1;

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
        level += 1;
    }

    if (level === 2) {
        spinner.classList.replace("spinner","spinner2");
        spc = spc * 2
    }

    if (level === 5) {
        spinner.classList.replace("spinner2","spinner3");
        spc = spc * 3
    }

    if (level === 10) {
        spinner.classList.replace("spinner3","spinner4");
        spc = spc * 5
    }

}

 spinner.addEventListener("mouseover", addSpinPoints)
up.addEventListener("click", upgrade)