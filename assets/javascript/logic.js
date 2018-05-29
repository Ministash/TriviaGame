var timer = 5;
var intervalId;
var startRedo = $("#startButton")

gameStart();

function gameStart(){
$("#startButton").on("click", function(){
    
    $("#startButton").remove();
    

    $("#contentWrapper").append(
        $("<div/>")
          .attr('id', 'timerDiv')
            
      );

      if(timer === 61){
        $("#upperText").remove();
      }
    questionOnePage();
    timerStart();
})
}

function timerStart(){
    clearInterval(intervalId);
    intervalId = setInterval(decrease, 1000);
    decrease();
}

function decrease(){
    timer--;
    $("#timerDiv").html("Time Remaining: " + timer + " Seconds");

    if(timer === 0){
        $("#timerDiv").html("You Lose!")
        clearInterval(intervalId);
        $("#contentWrapper").html(startRedo)
        $("#upperText").html("You lost! Want to play again?")
        
        gameStart();
        timer = 61;

    }
}

function questionOnePage(){
    $("#contentWrapper").append(
        $("<div/>")
          .attr('id', 'questionsDiv')
          .text("Which disease causes hallucinations and fear of water shortly before death?")
    );

}
