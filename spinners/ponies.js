var spinner = document.querySelector(".spinner");
var spinPoints = document.querySelector("#spinPoints");
var up = document.querySelector("#up");
var up2 = document.querySelector("#up2");
var level2 = document.querySelector("#levels");
var ascend = document.querySelector("#ascend");
var rainbow = document.querySelector("#rainbow");

var spinPoints2 = 0; //hi
var spc = 1;
var cost = 100;
var level = 1;
var rainbowSpinners = 0;

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

    if (level === 500) {
        spinner.classList.replace("spinner9","spinner10");
        spc = spc * 75
    }

    if (level === 1000) {
        spinner.classList.replace("spinner10","spinner11");
        spc = spc * 100
    }

    if (level === 10000) {
        spinner.classList.replace("spinner11","spinner12");
        spc = spc * 1000
    }

    if (level === 1000000) {
        spinner.classList.replace("spinner12","spinner13");
        spc = spc * 10000
    }
}

function upgradeTimesTen () {
    if (spinPoints2 > cost * 10) {
        spinPoints2 -= cost * 10;
        spc += 20;
        cost += 1000;
        level += 10;
        var msg5 = `upgrade spinner 10x: $ ${cost * 10}`
        var msg6 = `level ${level}`
        up2.innerHTML = msg5;
        level2.innerHTML = msg6;

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

    if (level === 500) {
        spinner.classList.replace("spinner9","spinner10");
        spc = spc * 75
    }

    if (level === 1000) {
        spinner.classList.replace("spinner10","spinner11");
        spc = spc * 100
    }

    if (level === 10000) {
        spinner.classList.replace("spinner11","spinner12");
        spc = spc * 1000
    }

    if (level === 1000000) {
        spinner.classList.replace("spinner12","spinner13");
        spc = spc * 10000
    }
}

function evolve () {
    if (level > 999) {
        level = 1;
        spc = 1 + rainbowSpinners / 100;
        cost = 100 + rainbowSpinners / 50;
        rainbowSpinners += Math.round(rainbowSpinners + spinPoints2 / 1000000);
        spinPoints2 = 0;
        var msg4 = `rainbow spinners: ${rainbowSpinners}`
        rainbow.innerHTML = msg4;

    }
}
 spinner.addEventListener("mouseover", addSpinPoints)
spinner.addEventListener("click", addSpinPoints)
up.addEventListener("click", upgrade)
up2.addEventListener("click", upgradeTimesTen)
 ascend.addEventListener("click", evolve)