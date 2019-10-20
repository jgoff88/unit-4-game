var compTotal = 22;
var userTotal= 0;
var lose = false;
$(document).ready(function(){
//Give value to buttons
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
        } else if (userTotal > compTotal) {
            alert("YOU LOSE! TRY AGAIN.");
        }
    });
});
