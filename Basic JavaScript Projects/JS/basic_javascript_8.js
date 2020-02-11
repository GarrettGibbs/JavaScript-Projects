function concatanate() {
    var p1 = "I really like ";
    var p2 = "to hang out ";
    var p3 = "with my friends ";
    var p4 = "and have fun!"
    var allTogether = p1.concat(p2, p3, p4);
    document.getElementById("replace").innerHTML = allTogether;
}

function Slice_method() {
    var potat = "Hello, I am needing to redo my checklist for the week.";
    var part = potat.slice(12,19);
    var part2 = part.toUpperCase();
    var part3 = potat.search("checklist");
    document.getElementById("example").innerHTML = part2 + " " + part3.toString();
}

function precision_method() {
    var grape = 4523.7774123575651235;
    var raisin = 587561235.888564;
    var wine = "hello";
    document.getElementById("precision").innerHTML = 
    grape.toPrecision(6) + " " + raisin.toFixed(3) + " " + wine.valueOf();
}