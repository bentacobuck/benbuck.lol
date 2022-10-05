document.getElementById("spinner")
document.getElementById("spinPoints")
document.getElementById("up")
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
        spc += 1;
        cost += 100;
        var msg2 = `upgrade spinner $ ${cost}`;
        up.innerHTML = msg2;
    }
}

 spinner.addEventListener("mouseover", addSpinPoints)
up.addEventListener("click", upgrade)