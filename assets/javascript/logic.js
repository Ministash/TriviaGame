var timer = 21;
var backgroundTimer = 28;
var backgroundInterval;
var intervalId;
var startRedo = $("#startButton")

gameStart();

function gameStart(){
$("#startButton").on("click", function(){
    
    $("#startButton").remove();
    $("#readyGif").remove();
    

    $("#contentWrapper").append(
        $("<div/>")
          .attr('id', 'timerDiv')
            
      );
      backgroundFunction();
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
        $("#contentWrapper").append(
            $("<div/>")
            .attr('id', 'loserGif')
        );
        secondQuestionsFunction(backgroundTimer);

 
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
        .addClass('correctAnswer x' )
        .text("Rabbies")

    );

    $("#questionWrapper").append(
        $("<div/>")
        .attr('id', 'questionOne')
        .addClass('wrongAnswer x' )
        .text("Ebola")

    );

    $(".correctAnswer").on("click", function(){
        $("#questionWrapper").html("")
        $("#questionsDiv").html("That is the correct answer! Congratulations!")
        $("#contentWrapper").append(
            $("<div/>")
            .attr('id', 'correctGif')
        )

        if(timer > 5){
            clearInterval(intervalId);
            backgroundTimer = 12;
            timer = 0;
            $("#timerDiv").html("Time Remaining: " + timer + " Seconds");
        }
    });
    
    $(".wrongAnswer").on("click", function(){
        $("#questionWrapper").html("")
        $("#questionsDiv").html("That is the wrong answer! The correct answer is rabbies!")
        $("#contentWrapper").append(
            $("<div/>")
            .attr('id', 'loserGif')
        )



        if(timer > 5){
            clearInterval(intervalId);
            backgroundTimer = 12;
            timer = 0;
            $("#timerDiv").html("Time Remaining: " + timer + " Seconds");
        }
    });


}

function backgroundFunction(){
    clearInterval(backgroundInterval);
    backgroundInterval = setInterval(secondQuestionsFunction, 1000);
    secondQuestionsFunction();
}


function secondQuestionsFunction(){
    backgroundTimer--;
    console.log(backgroundTimer);

    if (backgroundTimer === 0){
        backgroundTimer = 28;
        $("#correctGif").remove();
        $("#loserGif").remove();
        questionTwoPage();
    }
}

function questionTwoPage(){
        timer = 21;
        timerStart();
}