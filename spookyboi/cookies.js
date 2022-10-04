var heldlong = false;
var holdTimeout;

var musisHHHian = 5;
var cookies = 0;
var cookieClick = 10;
var cookiesPerSecond = 0;
var soggyCookies = 0;
var money = 0;
var subscribers = 0;
var megaTapPoints = 10;

var melons = 0;
var resetPrice = 10000;

var clickAxolotl = getElement("clickAxolotl")

var clickAxolotlTwo = getElement("clickAxolotlTwo");
var clickAxolotlThree = getElement("clickAxolotlThree");
var clickAxolotlFour = getElement("clickAxolotlFour");
var clickAxolotlFive = getElement("clickAxolotlFive");
var clickAxolotlSix = getElement("clickAxolotlSix");
var clickAxolotlSeven = getElement("clickAxolotlSeven");
var clickAxolotlEight = getElement("clickAxolotlEight");
var clickAxolotlNine = getElement("clickAxolotlNine");
var clickAxolotlTen = getElement("clickAxolotlTen");
var clickAxolotlEleven = getElement("clickAxolotlEleven");
var clickAxolotlTwelve = getElement("clickAxolotlTwelve");
var clickAxolotlThirteen = getElement("clickAxolotlThirteen");
var clickAxolotlFourteen = getElement("clickAxolotlFourteen");
var clickAxolotlFifteen = getElement("clickAxolotlFifteen");
var clickAxolotlSixteen = getElement("clickAxolotlSixteen");
var clickAxolotlSeventeen = getElement("clickAxolotlSeventeen");
var clickAxolotlEighteen = getElement("clickAxolotlEighteen");
var clickAxolotlNineteen = getElement("clickAxolotlNineteen");
var clickAxolotlTwenty = getElement("clickAxolotlTwenty");
var clickAxolotlTwenty_One = getElement("clickAxolotlTwenty-One");
var clickAxolotlTwenty_Two = getElement("clickAxolotlTwenty-Two");
var clickAxolotlTwenty_Three = getElement("clickAxolotlTwenty-Three");
var clickAxolotlTwenty_Four = getElement("clickAxolotlTwenty-Four");
var clickAxolotlTwenty_Five = getElement("clickAxolotlTwenty-Five");
var clickAxolotlTwenty_Six = getElement("clickAxolotlTwenty-Six");
var clickAxolotlTwenty_Seven = getElement("clickAxolotlTwenty-Seven");
var clickAxolotlTwenty_Eight = getElement("clickAxolotlTwenty-Eight");
var clickAxolotlTwenty_Nine = getElement("clickAxolotlTwenty-Nine");
var clickAxolotlThirty = getElement("clickAxolotlThirty");
var clickAxolotlThirty_One = getElement("clickAxolotlThirty-One");

var banana = getElement("taco-burger-baby");
var dipCookies = getElement("dipCookies");
var banana2021 = getElement("unicorn-princess");
var bananaPig = getElement("greedy-dolphin123");
var vloggerGoViral = getElement("vloggerGoViral");
var sussyYoutuber = getElement("sussy-youtuber");
var oneTwoThree = getElement("123");
var creamy = getElement("creamy");
var booty = getElement("booty");
var oldspice = getElement("oldspice");
var b1 = getElement("b1");


if(resetPrice === 0){
    resetPrice += 1
};

clickAxolotl.addEventListener("dblclick",(event) => {
    cookies += cookieClick * 4;
});

clickAxolotl.addEventListener("mouseover",(event) => {
    cookies += cookieClick / 10;
});

clickAxolotl.addEventListener("mouseout",(event) => {
    cookies += cookieClick / 10;
});

clickAxolotl.addEventListener("mousedown",(event) => {
    heldlong = false;
    holdTimeout = setTimeout(()=>{heldlong = true},2001);
});

clickAxolotl.addEventListener("mouseup",(event) => {
    console.log(event);
    clearTimeout(holdTimeout);
    if(heldlong){
        alert(`Bam! You earned ${cookieClick * megaTapPoints} from that mega tap!`);
        cookies = cookies + cookieClick * megaTapPoints;
        heldlong = false;
        updateDisplay();
    }
    else {
        updateDisplay();

        var YoMAMA = new Audio('mixkit-fish-flapping-2457.wav')
        YoMAMA.play();
    }
});


clickAxolotlTwo.addEventListener("click",(event) => {
    if(cookies > 99) {
        cookies = cookies - 100;
        cookieClick += 5;
        var YoMAMA = new Audio('mixkit-game-ball-tap-2073.wav')
        YoMAMA.play();
        updateDisplayWithoutAddingPoints();
    } else {
        alert("Sorry, you don't have enough Axolotl Points, keep gaming!");
    }
});

clickAxolotlThree.addEventListener("click",(event) => {
    if(cookies > 1399) {
        cookies = cookies - 1400;
        cookieClick += 20;
        var YoMAMA = new Audio('mixkit-game-ball-tap-2073.wav')
        YoMAMA.play();
        updateDisplayWithoutAddingPoints();
    } else {
        alert("Sorry, you don't have enough Axolotl Points, keep gaming!");
    }
});

clickAxolotlFour.addEventListener("click",(event) => {
    if(cookies > 9999) {
        cookies = cookies - 10000;
        cookieClick += 100;
        var YoMAMA = new Audio('mixkit-game-ball-tap-2073.wav')
        YoMAMA.play();
        updateDisplayWithoutAddingPoints();
    } else {
        alert("Sorry, you don't have enough Axolotl Points, keep gaming!");
    }
});

clickAxolotlFive.addEventListener("click",(event) => {
    if(cookies > 199999) {
        cookies = cookies - 200000;
        cookieClick += 500;
        var YoMAMA = new Audio('mixkit-game-ball-tap-2073.wav')
        YoMAMA.play();
        updateDisplayWithoutAddingPoints();
    } else {
        alert("Sorry, you don't have enough Axolotl Points, keep gaming!");
    }
});

clickAxolotlSix.addEventListener("click",(event) => {
    if(cookies > 149) {
        cookies = cookies - 150;
        cookiesPerSecond += 1;
        var YoMAMA = new Audio('mixkit-game-ball-tap-2073.wav')
        YoMAMA.play();
        updateDisplayWithoutAddingPoints();
    } else {
        alert("Sorry, you don't have enough Axolotl Points, keep gaming!");
    }
});

clickAxolotlSeven.addEventListener("click",(event) => {
    if(cookies > 1999) {
        cookies = cookies - 2000;
        cookiesPerSecond += 5;
        var YoMAMA = new Audio('mixkit-game-ball-tap-2073.wav')
        YoMAMA.play();
        updateDisplayWithoutAddingPoints();
    } else {
        alert("Sorry, you don't have enough Axolotl Points, keep gaming!");
    }
});

clickAxolotlEight.addEventListener("click",(event) => {
    if(cookies > 499999) {
        cookies = cookies - 500000;
        cookiesPerSecond += 120;
        var YoMAMA = new Audio('mixkit-game-ball-tap-2073.wav')
        YoMAMA.play();
        updateDisplayWithoutAddingPoints();
    } else {
        alert("Sorry, you don't have enough Axolotl Points, keep gaming!");
    }
});

clickAxolotlNine.addEventListener("click",(event) => {
    if(cookies > 999999) {
        cookies = cookies - 1000000;
        cookiesPerSecond += 5000;
        var YoMAMA = new Audio('mixkit-game-ball-tap-2073.wav')
        YoMAMA.play();
        updateDisplayWithoutAddingPoints();
    } else {
        alert("Sorry, you don't have enough Axolotl Points, keep gaming!");
    }
});

clickAxolotlTen.addEventListener("click",(event) => {
    if(cookies > 499999999) {
        cookies = cookies - 500000000;
        cookiesPerSecond += 100000;
        var YoMAMA = new Audio('mixkit-game-ball-tap-2073.wav')
        YoMAMA.play();
        updateDisplayWithoutAddingPoints();
    } else {
        alert("Sorry, you don't have enough Axolotl Points, keep gaming!");
    }
});

clickAxolotlEleven.addEventListener("click",(event) => {
    if(cookies > 14999999999) {
        cookies = cookies - 15000000000;
        cookiesPerSecond += 2000000;
        var YoMAMA = new Audio('mixkit-game-ball-tap-2073.wav')
        YoMAMA.play();
        updateDisplayWithoutAddingPoints();
    } else {
        alert("Sorry, you don't have enough Axolotl Points, keep gaming!");
    }
});


//clickAxolotlThirteen.addEventListener("click",(event) => {
//  if(cookies > 74999) {
//   cookies = cookies - 75000;
//    melons === 2;
//    var YoMAMA = new Audio('mixkit-game-ball-tap-2073.wav')
//  YoMAMA.play();
//    updateDisplayWithoutAddingPoints();
//  } else {
//    alert("Sorry, you don't have enough Axolotl Points, keep gaming!");
//  }
//});
//
//clickAxolotlFourteen.addEventListener("click",(event) => {
//  if(cookies > 599999) {
//   cookies = cookies - 600000;
//    melons === 3;
//    var YoMAMA = new Audio('mixkit-game-ball-tap-2073.wav')
//  YoMAMA.play();
//    updateDisplayWithoutAddingPoints();
//  } else {
//    alert("Sorry, you don't have enough Axolotl Points, keep gaming!");
//  }
//});
//
//clickAxolotlFifteen.addEventListener("click",(event) => {
//  if(cookies > 199999999) {
//   cookies = cookies - 200000000;
//    melons === 4;
//    var YoMAMA = new Audio('mixkit-game-ball-tap-2073.wav')
//  YoMAMA.play();
//    updateDisplayWithoutAddingPoints();
//  } else {
//    alert("Sorry, you don't have enough Axolotl Points, keep gaming!");
//  }
//});
//
//clickAxolotlSixteen.addEventListener("click",(event) => {
//  if(cookies > 89999999999) {
//   cookies = cookies - 90000000000;
//    melons === 5;
//    var YoMAMA = new Audio('mixkit-game-ball-tap-2073.wav')
//  YoMAMA.play();
//    updateDisplayWithoutAddingPoints();
//  } else {
//    alert("Sorry, you don't have enough Axolotl Points, keep gaming!");
//  }
//});

clickAxolotlSeventeen.addEventListener("click",(event) => {
    if(cookies > 99) {
        cookies = cookies - 100;
        resetPrice -= 1
        var YoMAMA = new Audio('mixkit-game-ball-tap-2073.wav')
        YoMAMA.play();
        updateDisplayWithoutAddingPoints();
    } else {
        alert("Sorry, you don't have enough Axolotl Points, keep gaming!");
    }
});

clickAxolotlEighteen.addEventListener("click",(event) => {
    if(cookies > 1249) {
        cookies = cookies - 1250;
        resetPrice -= 25
        var YoMAMA = new Audio('mixkit-game-ball-tap-2073.wav')
        YoMAMA.play();
        updateDisplayWithoutAddingPoints();
    } else {
        alert("Sorry, you don't have enough Axolotl Points, keep gaming!");
    }
});

clickAxolotlNineteen.addEventListener("click",(event) => {
    if(cookies > 99999) {
        cookies = cookies - 100000;
        resetPrice -= 25000;
        var YoMAMA = new Audio('mixkit-game-ball-tap-2073.wav')
        YoMAMA.play();
        updateDisplayWithoutAddingPoints();
    } else {
        alert("Sorry, you don't have enough Axolotl Points, keep gaming!");
    }
});


clickAxolotlTwenty.addEventListener("click",(event) => {
    if(cookies > 4999999) {
        cookies = cookies - 5000000;
        resetPrice -= 1000000;
        var YoMAMA = new Audio('mixkit-game-ball-tap-2073.wav')
        YoMAMA.play();
        updateDisplayWithoutAddingPoints();
    } else {
        alert("Sorry, you don't have enough Axolotl Points, keep gaming!");
    }
});


clickAxolotlTwenty_One.addEventListener("click",(event) => {
    if(cookies > 499999999) {
        cookies = cookies - 500000000;
        resetPrice -= 200000000000;
        var YoMAMA = new Audio('mixkit-game-ball-tap-2073.wav')
        YoMAMA.play();
        updateDisplayWithoutAddingPoints();
    } else {
        alert("Sorry, you don't have enough Axolotl Points, keep gaming!");
    }
});

clickAxolotlTwenty_Two.addEventListener("click",(event) => {
    if(cookies > 799999999999999) {
        cookies = cookies - 800000000000000;
        resetPrice -= 10000000000000;
        var YoMAMA = new Audio('mixkit-game-ball-tap-2073.wav')
        YoMAMA.play();
        updateDisplayWithoutAddingPoints();
    } else {
        alert("Sorry, you don't have enough Axolotl Points, keep gaming!");
    }
});

//clickAxolotlTwenty_Four.addEventListener("click",(event) => {
//  if(cookies > 2999999) {
//   cookies = cookies - 3000000;
//   cookieClick += 900000
//    var YoMAMA = new Audio('mixkit-game-ball-tap-2073.wav')
//  YoMAMA.play();
//    updateDisplayWithoutAddingPoints();
//  } else {
//    alert("Sorry, you don't have enough Axolotl Points, keep gaming!");
//  }
//});

clickAxolotlTwenty_Five.addEventListener("click",(event) => {
    if(cookies > 49999999999) {
        cookies = cookies - 50000000000;
        cookiesPerSecond += 10000000
        var YoMAMA = new Audio('mixkit-game-ball-tap-2073.wav')
        YoMAMA.play();
        updateDisplayWithoutAddingPoints();
    } else {
        alert("Sorry, you don't have enough Axolotl Points, keep gaming!");
    }
});

clickAxolotlTwenty_Six.addEventListener("click",(event) => {
    if(cookies > 199999999999) {
        cookies = cookies - 200000000000;
        cookiesPerSecond += 700000000
        var YoMAMA = new Audio('mixkit-game-ball-tap-2073.wav')
        YoMAMA.play();
        updateDisplayWithoutAddingPoints();
    } else {
        alert("Sorry, you don't have enough Axolotl Points, keep gaming!");
    }
});

clickAxolotlTwenty_Seven.addEventListener("click",(event) => {
    if(cookies > 499999999999) {
        cookies = cookies - 500000000000;
        cookiesPerSecond += 1000000000
        var YoMAMA = new Audio('mixkit-game-ball-tap-2073.wav')
        YoMAMA.play();
        updateDisplayWithoutAddingPoints();
    } else {
        alert("Sorry, you don't have enough Axolotl Points, keep gaming!");
    }
});

clickAxolotlTwenty_Eight.addEventListener("click",(event) => {
    if(cookies > 4999) {
        cookies = cookies - 5000;
        megaTapPoints += 15;
        updateDisplayWithoutAddingPoints();
        var YoMAMA = new Audio('mixkit-game-ball-tap-2073.wav')
        YoMAMA.play();
    } else {
        alert("Sorry, you don't have enough Axolotl Points, keep gaming!");
    }
});

clickAxolotlTwenty_Nine.addEventListener("click",(event) => {
    if(cookies > 29999) {
        cookies = cookies - 30000;
        megaTapPoints += 50;
        var YoMAMA = new Audio('mixkit-game-ball-tap-2073.wav')
        YoMAMA.play();
        updateDisplayWithoutAddingPoints();
    } else {
        alert("Sorry, you don't have enough Axolotl Points, keep gaming!");
    }
});

clickAxolotlThirty.addEventListener("click",(event) => {
    if(cookies > 899999) {
        cookies = cookies - 900000;
        megaTapPoints += 200;
        var YoMAMA = new Audio('mixkit-game-ball-tap-2073.wav')
        YoMAMA.play();
        updateDisplayWithoutAddingPoints();
    } else {
        alert("Sorry, you don't have enough Axolotl Points, keep gaming!");
    }
});

clickAxolotlThirty_One.addEventListener("click",(event) => {
    if(cookies > 2999999) {
        cookies = cookies - 3000000;
        megaTapPoints += 800;
        var YoMAMA = new Audio('mixkit-game-ball-tap-2073.wav')
        YoMAMA.play();
        updateDisplayWithoutAddingPoints();
    } else {
        alert("Sorry, you don't have enough Axolotl Points, keep gaming!");
    }
});









































b1.addEventListener("click",(event) => {
    if (cookies > resetPrice) {
        melons = 0
        jam = cookieClick;
        cookiesPerSecond = 0;
        cookieClick = 0;
        cookies = 0;
        var YoMAMA = new Audio('mixkit-game-ball-tap-2073.wav')
        YoMAMA.play();
        updateDisplayWithoutAddingPoints();
        reset();
        resetPrice = resetPrice * 10;
    } else {
        alert(`You must have at least ${resetPrice} Axolotl points to reset.`);
    }
});



function updateDisplay(){
    cookies += cookieClick;
    updateDisplayWithoutAddingPoints();
};

function updateDisplayWithoutAddingPoints(){
    var msg = `${cookies} Axolotl Points`;
    banana.innerHTML = msg;
    var lol = `${cookieClick}/tap`;
    var urmom = `${cookiesPerSecond}/second`;
    var oldspice2 = `${megaTapPoints}x mega tap`
    booty.innerHTML = urmom;
    creamy.innerHTML = lol;
    oldspice.innerHTML = oldspice2;


};

function reset(){
    cookieClick = jam *= 2
};





function getElement(id){
    return document.getElementById(id);
}




var melonInterval = setInterval(() => {
    cookies += cookiesPerSecond;
    updateDisplayWithoutAddingPoints();
}, 1000);

