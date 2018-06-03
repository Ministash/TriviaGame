const options1 = ["Lyme disease", "Malaria", "Rabies", "Ebola"];
const options2 = ["Mesothelioma", "Leukemia", "Colorectal", "Melanoma"];
const options3 = ["Emphysema", "Asthma", "Crohn's", "Pneumonia"];
const options4 = ["West Nile", "Yellow Fever", "Dengue", "Malaria"];
const options5 = ["Dragon Worm", "Elephantiasis", "Dracunculus", "Wolbachia"];
const options6 = ["Zinc", "Vitamin C", "Honey", "Vitamin A"];
const options7 = ["Coughing", "Wheezing", "Sniffling", "Sneezing"];
const correctGif = ["correctGif1", "correctGif2", "correctGif3"];
const wrongGif = ["wrongGif1", "wrongGif2", "wrongGif3"];
var optionChanger = "";
var answer = "";
var pageCounter = 0;
var correctAnswers = 0;
var wrongAnswers = 0;
var unanswered = 0;
var backgroundInterval;
var intervalId;
var timer = 21;
var backgroundTimer = 28;
var randomCorrectGif = correctGifSelector();
var randomWrongGif = wrongGifSelector();

function correctGifSelector() {
    thing = correctGif[Math.floor(Math.random() * correctGif.length)];
    return thing;
}
console.log(randomCorrectGif);

function wrongGifSelector() {
    thing2 = wrongGif[Math.floor(Math.random() * wrongGif.length)];
    return thing2;
}

console.log(randomWrongGif);




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
        timerStart();
        pageDecider();
    });
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
                .attr('id', wrongGif[0])
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
                .attr('id', randomCorrectGif)
        )


        if (timer > -1) {
            clearInterval(intervalId);
            backgroundTimer = 4;
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
                .attr('id',  randomWrongGif)

        )



        if (timer > -1) {
            clearInterval(intervalId);
            backgroundTimer = 6;
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
        // console.log("this is the page counter", pageCounter);
        backgroundTimer = 28;
        $("#correctGif1, #correctGif2, #correctGif3").remove();
        $("#wrongGif1, #wrongGif2, #wrongGif3").remove();
        pageDecider();
        randomCorrectGif = correctGifSelector();
        randomWrongGif = wrongGifSelector();
        console.log(randomWrongGif);
    }
}

function pageDecider() {
    if (pageCounter === 0) {
        questionOnePage();
    }
    if (pageCounter === 1) {
        questionTwoPage();
    }
    if (pageCounter === 2) {
        questionThreePage();
    }
    if (pageCounter === 3) {
        questionFourPage();
    }
    if (pageCounter === 4) {
        questionFivePage();
    }
    if (pageCounter === 5) {
        questionSixPage();
    }
    if (pageCounter === 6) {
        questionSevenPage();
    }
    if (pageCounter === 7) {
        statsPage();
    }

}

function optionChangerFunction(optionChanger) {
    for (i = 0; i < optionChanger.length; i++) {
        if (optionChanger[i] === answer) {
            $("#questionWrapper").append(
                $("<div/>")
                    .attr('id', 'questionOne')
                    .addClass('correct x')
                    .text(optionChanger[i])

            );
        }
        else {
            $("#questionWrapper").append(
                $("<div/>")
                    .attr('id', 'questionOne')
                    .addClass('wrongAnswer x')
                    .text(optionChanger[i])
            );
        }

    }
}

function questionOnePage() {
    answer = "Rabies";

    optionChangerFunction(options1);


    $("#contentWrapper").append(
        $("<div/>")
            .attr('id', 'questionsDiv')
            .text("Which disease causes hallucinations and fear of water shortly before death?")
    );



    buttons();

}


function questionTwoPage() {
    $("#questionsDiv").html("A tumor of the tissue that lines the lungs, stomach, heart, and other organs.")
    timer = 21;
    answer = "Mesothelioma";
    timerStart();

    optionChangerFunction(options2);

    buttons();

}


function questionThreePage() {
    $("#questionsDiv").html("A chronic inflammatory bowel disease that affects the lining of the digestive tract.");
    timer = 21;
    answer = "Crohn's";
    timerStart();

    optionChangerFunction(options3);

    buttons();

}

function questionFourPage() {
    $("#questionsDiv").html("Kills more people than any other disease in the world.");
    timer = 21;
    answer = "Malaria";
    timerStart();

    optionChangerFunction(options4);

    buttons();

}

function questionFivePage() {
    $("#questionsDiv").html("A tropical, parasitic disease that affects the lymph nodes and lymph vessels.");
    timer = 21;
    answer = "Elephantiasis";
    timerStart();

    optionChangerFunction(options5);

    buttons();

}

function questionSixPage() {
    $("#questionsDiv").html("Which of the following is thought to be most effective in helping to reduce both the symptoms and duration of the common cold?");
    timer = 21;
    answer = "Zinc";
    timerStart();

    optionChangerFunction(options6);

    buttons();
}

function questionSevenPage() {
    $("#questionsDiv").html("What is 'sternutation' the official name for?");
    timer = 21;
    answer = "Sneezing";
    timerStart();

    optionChangerFunction(options7);

    buttons();
}

function statsPage() {

    if (7 <= correctAnswers)
        $("#questionsDiv").html("The game is over! Congratulations on the perfect score!");
    else if (correctAnswers > 4) {
        $("#questionsDiv").html("The game is over! Wow, You did great! Click the button to play again!");
    } else {
        $("#questionsDiv").html("The game is over! Congratulations on doing so poorly! You might want to play again.");
    }

    $("#questionWrapper").remove();


    $("#box").append(
        $("<div/>").attr('id', 'stats'));

    $('#stats').append(

        $("<div/>")
            .addClass('b')
            .html("Your score:"),

        $("<div/>")
            .addClass('b')
            .html("Wins: " + correctAnswers),

        $("<div/>")
            .addClass('b')
            .html("Loses: " + wrongAnswers),

        $("<div/>")
            .addClass('b')
            .html("Unanswered: " + unanswered)

    );

    $("#box").append(
        $("<div/>")
            .attr('id', 'startButton')
            .addClass('x')

    );

    $("#startButton").append(
        $("<p/>").text("Start")
    );

    function startButtonReset() {
        $("#startButton").on("click", function () {
            reset();

        });

    }
    startButtonReset();


}

function reset() {
    timer = 21;
    backgroundTimer = 28;
    $("#timerDiv").html("Time Remaining: " + timer + " Seconds");
    $("#stats").remove();
    $("#startButton").remove();
    $("#questionsDiv").remove();
    $("#box").append(
        $("<div/>")
            .attr('id', 'questionWrapper')
    );
    questionOnePage();
    timerStart();
    pageCounter = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    unanswered = 0;


}





