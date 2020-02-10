function add_Function() {
    var addition = 2 + 2;
    document.getElementById("mathA").innerHTML = "2 + 2 = " + addition;
}

function subtract_Function() {
    var subtract = 5 - 2;
    document.getElementById("mathS").innerHTML = "5 - 2 = " + subtract;
}

function mult_Function() {
    var mult = 6 * 8;
    document.getElementById("mathM").innerHTML = "6 * 8 = " + mult;
}

function divide_Function() {
    var divide = 48 / 6;
    document.getElementById("mathD").innerHTML = "46 / 6 = " + divide;
}

function more_Math() {
    var example = (1 + 2) * 10 / 2 -5;
    document.getElementById("mathE").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals: " + example;
}

function modulus_Operator() {
    var percent = 25 % 6;
    document.getElementById("mathP").innerHTML = "25 % 6 = " + percent;
}

function negation_Operator() {
    var x = 10;
    document.getElementById("mathN").innerHTML = -x;
}

var L = 20;
L++;
document.write(L);

var M = 800;
M--;
document.write(M);



window.alert(Math.round(Math.random() *100));
