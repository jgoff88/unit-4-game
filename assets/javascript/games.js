var compTotal = 22;
var userTotal= 0;
var wins = 0;
var losses = 0;
$(document).ready(function(){
//Give value to buttons
    $("#number").text(compTotal);
    $("#crystal0").on('click', function(){
        userTotal += 2;
        console.log("your total:", userTotal);
    });
    $("#crystal1").on('click', function(){
        userTotal += 5;
        console.log("your total:", userTotal);    
    });
    $("#crystal2").on('click', function(){
        userTotal += 6;
        console.log("your total:", userTotal);    
    });
    $("#crystal3").on('click', function(){
        userTotal += 9;
        console.log("your total:", userTotal);        
    });
    $(".buttons").on("click", function() {
        if (userTotal === compTotal) {
            alert("YOU WIN!!");
            wins++;
            document.querySelector("#wins").innerHTML = wins;     
            reset();   
        } else if (userTotal > compTotal) {
            alert("YOU LOSE! TRY AGAIN.");
            losses++;
            document.querySelector("#losses").innerHTML = losses;
            reset();
        }
    });
   
});
var reset = function() {
    userTotal = 0;

}
