var timer = 10;
var backgroundTimer = 38;
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
        clearInterval(intervalId);
        $("#questionsDiv").html("You waited too long! The correct answer is rabbies!")
        $("#questionWrapper").html("")
        // $("#contentWrapper").append(
        //     $("<div/>")
        //     .attr('id', 'wrongGif')
        // )
 
        //Need to tell it to go to the next page
    }
}

function questionOnePage(){

    $("#contentWrapper").append(
        $("<div/>")
          .attr('id', 'questionsDiv')
          .text("Which disease causes hallucinations and fear of water shortly before death?")
    );

    $("#questionWrapper").append(
        $("<div/>")
        .attr('id', 'questionOne')
        .attr('class', 'wrongAnswer')
        .addClass('wrongAnswer x' )
        .text("Lyme disease")
    );
    
    $("#questionWrapper").append(
        $("<div/>")
        .attr('id', 'questionOne')
        .attr('class', 'wrongAnswer')
        .addClass('wrongAnswer x' )
        .text("Malaria")

    );

    $("#questionWrapper").append(
        $("<div/>")
        .attr('id', 'questionOne')
        .attr('class', 'correctAnswer')
        .addClass('wrongAnswer x' )
        .text("Rabbies")

    );

    $("#questionWrapper").append(
        $("<div/>")
        .attr('id', 'questionOne')
        .addClass('correctAnswer x' )
        .text("Ebola")

    );
    
    $(".correctAnswer").on("click", function(){
        $("#questionWrapper").html("")
        $("#questionsDiv").html("That is the correct answer! Congratulations!")
        $("#contentWrapper").append(
            $("<div/>")
            .attr('id', 'rightGif')
        )

                // if(timer > 5){
            
        // }
    });
    
    $(".wrongAnswer").on("click", function(){
        $("#questionWrapper").html("")
        $("#questionsDiv").html("That is the wrong answer! The correct is rabbies!")
        $("#contentWrapper").append(
            $("<div/>")
            .attr('id', 'wrongGif')
        )



        // if(timer > 5){
            
        // }
    });


}
