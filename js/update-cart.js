// atc = add to cart
var num1;
var num2;
var num3;
var num4;
var num5;
var num6;
var num7;
var num8;
var totalNum;

function setFirstNum() {
    num1 = 0;
    num2 = 0;
    num3 = 0;
    num4 = 0;
    num5 = 0;
    num6 = 0;
    num7 = 0;
    num8 = 0;
}

setFirstNum()

function updateNumInCart() {
    totalNum = num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8;
    document.getElementById("num-of-item").innerHTML = '( Total: ' + totalNum + ' )';
}

function displayNumberInCart() {
    document.getElementById("atc-1").innerHTML = num1;
    document.getElementById("atc-2").innerHTML = num2;
    document.getElementById("atc-3").innerHTML = num3;
    document.getElementById("atc-4").innerHTML = num4;
    document.getElementById("atc-5").innerHTML = num5;
    document.getElementById("atc-6").innerHTML = num6;
    document.getElementById("atc-7").innerHTML = num7;
    document.getElementById("atc-8").innerHTML = num8;
}

function reset() {
    num1 = num2 = num3 = num4 = num5 = num6 = num7 = num8 = 0;
    updateNumInCart();
    document.getElementById("atc-1").innerHTML = num1;
    document.getElementById("atc-2").innerHTML = num2;
    document.getElementById("atc-3").innerHTML = num3;
    document.getElementById("atc-4").innerHTML = num4;
    document.getElementById("atc-5").innerHTML = num5;
    document.getElementById("atc-6").innerHTML = num6;
    document.getElementById("atc-7").innerHTML = num7;
    document.getElementById("atc-8").innerHTML = num8;
}

function addToCart1() {
    num1 ++;
    updateNumInCart();
    document.getElementById("atc-1").innerHTML = num1;
}

function addToCart2() {
    num2 ++;
    updateNumInCart();
    document.getElementById("atc-2").innerHTML = num2;
}

function addToCart3() {
    num3 ++;
    updateNumInCart();
    document.getElementById("atc-3").innerHTML = num3;
}

function addToCart4() {
    num4 ++;
    updateNumInCart();
    document.getElementById("atc-4").innerHTML = num4;
}

function addToCart5() {
    num5 ++;
    updateNumInCart();
    document.getElementById("atc-5").innerHTML = num5;
}

function addToCart6() {
    num6 ++;
    updateNumInCart();
    document.getElementById("atc-6").innerHTML = num6;
}

function addToCart7() {
    num7 ++;
    updateNumInCart();
    document.getElementById("atc-7").innerHTML = num7;
}

function addToCart8() {
    num8 ++;
    updateNumInCart();
    document.getElementById("atc-8").innerHTML = num8;
}
 