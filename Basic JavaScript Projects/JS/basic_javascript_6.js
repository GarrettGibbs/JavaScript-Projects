function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function starTrek(Name, Year, Captain, Seasons) {
    this.starTrek_Name = Name;
    this.starTrek_Year = Year;
    this.starTrek_Captain = Captain;
    this.starTrek_Seasons = Seasons;
}
var Original = new starTrek("Orginial Star Trek", 1966, "James Kirk", 3);
var Next_Gen = new starTrek("Next Generation", 1987, "Jean-Luc Picard", 7);
var Deep_Space = new starTrek("Deep Space 9", 1993, "Benjamin Sisko", 7);
var Voyager = new starTrek("Voyager", 1995, "Kathryn Janeway", 7);
var Enterprise = new starTrek("Enterprise", 2005, "Jonathan Archer", 4);

function new_function() {
    document.getElementById("Nested_Function").innerHTML = displayText();
    function displayText() {
        var Starting_Point = 8;
        function plus_one() {Starting_Point += 1;}
        plus_one();
        return Starting_Point;
    }
}


