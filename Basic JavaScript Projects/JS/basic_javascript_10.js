function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X<11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("loop").innerHTML = Digit;
}

function lengthFunction() {
    var L = document.getElementById("numCharacters").innerHTML;
    var newL = L.length;
    document.getElementById("numLength").innerHTML = newL + " characters long.";
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() {
    document.getElementById("Array").innerHTML = "My second instrument: " + Instruments[1];
}

const shirt = {type:"t-shirt", color:"green", design:"plain"};
function constant_function() {
    shirt.design = "striped";
    shirt.color = "green/blue";
    document.getElementById("Constant").innerHTML = 
    "This shirt is a " + shirt.color + " " + shirt.design + " shirt.";
}

function letFunction(){
    var thing = 20;
    document.getElementById("let1").innerHTML = thing;
    {
        let thing = "not 20";
        document.getElementById("let2").innerHTML = thing;
    }
    document.getElementById("let3").innerHTML = thing;
}


function myFunction() {
    var result = mult(document.getElementById("firstNumber").value, document.getElementById("secondNumber").value)
    function mult(a, b) {
        return a * b;
    }  
    document.getElementById("newNum").innerHTML = result;
}

function objectFunction(){
    let play = {
        title: "Hamlet ",
        act: "5 act ",
        type: "tradegy ",
        year: "1601",
        description : function() {
            return "The play " + this.title + "is a " + this.act + this.type + "written in " + this.year + ".";
        }
    };
    document.getElementById("conclusion").innerHTML = play.description();
}

var vegetable = ["carrot", "green bean", "beat", "squash", "eggplant"];
var Content2 = "";
var U;
function contFunction() {
    for (U = 0; U < vegetable.length; U++) {
        if (U === 2) { continue; }
        Content2 += vegetable[U] + "<br>";
    }
    document.getElementById("continued").innerHTML = Content2;
}

function breakFunction() {
    for (U = 0; U < vegetable.length; U++) {
        if (U === 2) { break; }
        Content2 += vegetable[U] + "<br>";
    }
    document.getElementById("broke").innerHTML = Content2;
}
