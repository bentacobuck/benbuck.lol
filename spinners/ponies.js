var spinner = document.querySelector(".spinner");
var spinPoints = document.querySelector("#spinPoints");
var up = document.querySelector("#up");
var level2 = document.querySelector("#levels");

var spinPoints2 = 0;
var spc = 1;
var cost = 100;
var level = 1;

function addSpinPoints () {
    spinPoints2 += spc;
    var msg = `$ ${spinPoints2}`;
    spinPoints.innerHTML = msg;
    var msg3 = `level ${level}`
    level2.innerHTML = msg3;
}

function upgrade () {
    if (spinPoints2 > cost) {
        spinPoints2 -= cost;
        spc += 2;
        cost += 100;
       var msg2 = `upgrade spinner $ ${cost}`
        var msg3 = `level ${level}`
        up.innerHTML = msg2;
        level2.innerHTML = msg3;
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

    if (level === 20) {
        spinner.classList.replace("spinner4","spinner5");
        spc = spc * 6
    }

    if (level === 50) {
        spinner.classList.replace("spinner5","spinner6");
        spc = spc * 7
    }

    if (level === 100) {
        spinner.classList.replace("spinner7","spinner8");
        spc = spc * 10
    }

    if (level === 200) {
        spinner.classList.replace("spinner8","spinner9");
        spc = spc * 50
    }

}

 spinner.addEventListener("mouseover", addSpinPoints)
up.addEventListener("click", upgrade)