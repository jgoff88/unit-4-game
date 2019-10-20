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
        $("#user").text(userTotal);
    });
    $("#crystal1").on('click', function(){
        userTotal += 5;
        console.log("your total:", userTotal);  
        $("#user").text(userTotal);  
    });
    $("#crystal2").on('click', function(){
        userTotal += 6;
        console.log("your total:", userTotal);
        $("#user").text(userTotal);    
    });
    $("#crystal3").on('click', function(){
        userTotal += 9;
        console.log("your total:", userTotal);  
        $("#user").text(userTotal);      
    });
    $(".buttons").on("click", function() {
        if (userTotal === compTotal) {
            alert("YOU WIN!! CLICK A CRYSTAL TO TRY AGAIN.");
            wins++;
            document.querySelector("#wins").innerHTML = wins;   
            $("#user").text(userTotal);  
            reset();   
        } else if (userTotal > compTotal) {
            alert("YOU LOSE! CLICK A CRYSTAL TO TRY AGAIN.");
            losses++;
            document.querySelector("#losses").innerHTML = losses;
            $("#user").text(userTotal);
            reset();
            
        }
    });
   
});
var reset = function() {
    userTotal = 0;

}


