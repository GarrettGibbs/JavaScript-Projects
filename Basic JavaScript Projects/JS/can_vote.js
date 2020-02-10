function vote_function() {
    var Age, can_vote;
    Age = document.getElementById("Age").value;
    can_vote = (Age < 18) ? "You are not old enough to vote.":"You can vote!";
    document.getElementById("Vote").innerHTML = can_vote;
}