//canvas gradient color
var c = document.getElementById("firstCanvas");
var ctx = c.getContext("2d");
var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "purple");
grd.addColorStop(1, "white");
ctx.fillStyle = grd;
ctx.fillRect(0, 0, 300, 300);

//canvas line
ctx.moveTo(0, 0);
ctx.lineTo(300, 150);
ctx.stroke();

function iceCreamFunction() {
    var response;
    var flavor = document.getElementById("iceCream").value;
    var string1 = " is a great flavor!";
    switch(flavor) {
        case "Vanilla":
            response = "Vanilla" + string1;
        break;
        case "Chocolate":
            response = "Chocolate" + string1;
        break;
        case "Strawberry":
            response = "Strawberry" + string1;
        break;
        case "Rocky Road":
            response = "Rocky Road" + string1;
        break;
        case "Sherbert":
            response = "Sherbert" + string1;
        break;
        default:
            response = "Please enter a flavor exactly as written in list above.";
    }
    document.getElementById("output").innerHTML = response;
}

//button to change text via class
function changeText() {
    var old = document.getElementsByClassName("text"); 
    var next = "this is the new text.";
    old[0].innerHTML = next;
    old[1].innerHTML = next;
}
