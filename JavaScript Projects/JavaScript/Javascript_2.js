function validate() {
    var x = document.forms["nameForm"]["fname"].value;
    var y = document.forms["nameForm"]["lname"].value;
    if (x == "")  {
        alert(" First name must be filled out.");
        return false
    }
    if (y == "")  {
        alert("Last name must be filled out.");
        return false
    }
}