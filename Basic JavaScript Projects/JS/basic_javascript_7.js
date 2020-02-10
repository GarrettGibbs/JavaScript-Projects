var X = 20;
var Z = 2;

function add_function() {
    var Y = 30;
    new_num1 = (X + Y);
    document.getElementById("add").innerHTML = new_num1;
}

function subtract_function() {
    console.log(X - Y);
    new_num2 = (X - Y);
    document.getElementById("subtract").innerHTML = new_num2;
}

function get_date() {
    if (new Date().getMonth() < 2) {
        document.getElementById("time").innerHTML = "It's winter, better bundle up!";
    }
    else {document.getElementById("time").innerHTML = "No snow outside :(";}
}

function drive_function() {
    birthYear = document.getElementById("birthYear").value;
    if (birthYear >= 2004) {
        answer = "You are too young to drive.";
    }
    else {
        answer = "You are old enough to drive!";
    }
    document.getElementById("drive").innerHTML = answer;
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time <12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon!";
    }
    else {
        Reply = "It is evening time!";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}

