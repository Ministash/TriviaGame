// var startRedo = $("#startButton")
var backgroundInterval;
var intervalId;
var timer = 21;
var backgroundTimer = 28;
var options1 = ["Lyme disease", "Malaria", "Rabbies", "Ebola"];
var options2 = ["Mesothelioma", "Leukemia", "Colorectal", "Melanoma"];
var options3 = ["Emphysema", "Asthma", "Crohn's", "Pneumonia"];
var options4 = ["West Nile", "Yellow Fever", "Dengue", "Malaria"];
var options5 = ["Dragon Worm", "Elephantiasis", "Dracunculus", "Wolbachia"];
var answer = "";
var pageCounter = 0;
var correctAnswers = 0;
var wrongAnswers = 0;
var unanswered = 0;

gameStart();

function gameStart() {
    $("#startButton").on("click", function () {

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



function timerStart() {
    clearInterval(intervalId);
    intervalId = setInterval(decrease, 1000);
    decrease();
}

function decrease() {
    timer--;
    $("#timerDiv").html("Time Remaining: " + timer + " Seconds");


    if (timer === 0) {
        unanswered++;
        console.log("This is the amount of unanswered problems", unanswered);
        clearInterval(intervalId);
        $("#questionsDiv").html("You waited too long! The correct answer is " + answer + "!")
        $("#questionWrapper").html("")
        $("#contentWrapper").append(
            $("<div/>")
                .attr('id', 'loserGif')
        );
        
    }
}


function buttons() {

        $(".correct").on("click", function () {
        correctAnswers++;
        console.log("This is the amount of correct answers", correctAnswers);
        $("#questionWrapper").html("")
        $("#questionsDiv").html("That is the correct answer! Congratulations!")
        $("#contentWrapper").append(
            $("<div/>")
                .attr('id', 'correctGif') 
        )


        if (timer > -1) {
            clearInterval(intervalId);
            backgroundTimer = 6;
            timer = 0;
            $("#timerDiv").html("Time Remaining: " + timer + " Seconds");
        };

    });

    $(".wrongAnswer").on("click", function () {
        wrongAnswers++;
        console.log("This is the amount of wrong answers", wrongAnswers);
        $("#questionWrapper").html("")
        $("#questionsDiv").html("That is the wrong answer! The correct answer is " + answer + "!")
        $("#contentWrapper").append(
            $("<div/>")
                .attr('id', 'loserGif')

        )



        if (timer > -1) {
            clearInterval(intervalId);
            backgroundTimer = 12;
            timer = 0;
            $("#timerDiv").html("Time Remaining: " + timer + " Seconds");
        }
    });

}




function backgroundFunction() {
    clearInterval(backgroundInterval);
    backgroundInterval = setInterval(backgroundTimerReset, 1000);
    backgroundTimerReset();

}


function backgroundTimerReset() {
    backgroundTimer--;
    console.log(backgroundTimer);

    if (backgroundTimer === 0) {
        pageCounter++;
        backgroundTimer = 28;
        $("#correctGif").remove();
        $("#loserGif").remove();
        pageDecider();
    }
}

function pageDecider(){
    if (pageCounter === 0){
        questionOnePage();
    }
    if (pageCounter === 1){
        questionTwoPage();
    }
    if(pageCounter === 2){
        questionThreePage();
    }
    if(pageCounter === 3){
        questionFourPage();
    }
    if(pageCounter === 4){
        questionFivePage();
    }
    if(pageCounter === 5){
        questionSixPage();
    }

}

function questionOnePage() {
    answer = "Rabbies";

    $("#contentWrapper").append(
        $("<div/>")
            .attr('id', 'questionsDiv')
            .text("Which disease causes hallucinations and fear of water shortly before death?")
    );


    for (i = 0; i < options1.length; i++) {
        if (options1[i] === answer) {
            $("#questionWrapper").append(
                $("<div/>")
                    .attr('id', 'questionOne')
                    .addClass('correct x')
                    .text(options1[i])
            );
        }
        else {
            $("#questionWrapper").append(
                $("<div/>")
                    .attr('id', 'questionOne')
                    .addClass('wrongAnswer x')
                    .text(options1[i])
            );
        }
    }
    buttons();

}


function questionTwoPage() {
    $("#questionsDiv").html("A tumor of the tissue that lines the lungs, stomach, heart, and other organs.")
    timer = 21;
    answer = "Mesothelioma";
    timerStart();
    

    for (i = 0; i < options1.length; i++) {
        if (options2[i] === answer) {
            $("#questionWrapper").append(
                $("<div/>")
                    .attr('id', 'questionOne')
                    .addClass('correct x')
                    .text(options2[i])
                   
            );
        }
        else {
            $("#questionWrapper").append(
                $("<div/>")
                    .attr('id', 'questionOne')
                    .addClass('wrongAnswer x')
                    .text(options2[i])
            );
        }

    }

    buttons();

}


function questionThreePage() {
    $("#questionsDiv").html("A chronic inflammatory bowel disease that affects the lining of the digestive tract.")
    timer = 21;
    answer = "Crohn's";
    timerStart();
    

    for (i = 0; i < options1.length; i++) {
        if (options3[i] === answer) {
            $("#questionWrapper").append(
                $("<div/>")
                    .attr('id', 'questionOne')
                    .addClass('correct x')
                    .text(options3[i])
                   
            );
        }
        else {
            $("#questionWrapper").append(
                $("<div/>")
                    .attr('id', 'questionOne')
                    .addClass('wrongAnswer x')
                    .text(options3[i])
            );
        }

    }

    buttons();

}

function questionFourPage() {
    $("#questionsDiv").html("Kills more people than any other disease in the world.")
    timer = 21;
    answer = "Malaria";
    timerStart();
    

    for (i = 0; i < options1.length; i++) {
        if (options4[i] === answer) {
            $("#questionWrapper").append(
                $("<div/>")
                    .attr('id', 'questionOne')
                    .addClass('correct x')
                    .text(options4[i])
                   
            );
        }
        else {
            $("#questionWrapper").append(
                $("<div/>")
                    .attr('id', 'questionOne')
                    .addClass('wrongAnswer x')
                    .text(options4[i])
            );
        }

    }

    buttons();

}

function questionFivePage() {
    $("#questionsDiv").html("A tropical, parasitic disease that affects the lymph nodes and lymph vessels.")
    timer = 21;
    answer = "Elephantiasis";
    timerStart();
    

    for (i = 0; i < options1.length; i++) {
        if (options5[i] === answer) {
            $("#questionWrapper").append(
                $("<div/>")
                    .attr('id', 'questionOne')
                    .addClass('correct x')
                    .text(options5[i])
                   
            );
        }
        else {
            $("#questionWrapper").append(
                $("<div/>")
                    .attr('id', 'questionOne')
                    .addClass('wrongAnswer x')
                    .text(options5[i])
            );
        }

    }

    buttons();

}






