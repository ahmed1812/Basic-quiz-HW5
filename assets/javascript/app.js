



var number = 30;

var intervalId;

var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;

        // Questions array
        var questions = [{
            question: "What is the first level of Halo: Combat Evolved called?",
            answerList: ["Sierra 117", "343 Guilty Spark", "Prologue", "The Pillar of Autumn"],
            answer: "The Pillar of Autumn"

        }, {

            question: "What is the Arbiter's name?",
            answerList: ["Thel Vadam", "Usze Taham", "Igido Nosa Fasu", "Rtas Vadum"],
            answer: "Thel Vadam"

        }, {

            question: "What us the Installation number of The Ark?",
            answerList: ["Installation 04", "Installation 00", "Installation 05", "Installation 01"],
            answer: "Installation 00"

        }, {

            question: "How many main groups of Flood are there in Halo 3?",
            answerList: ["Three", "Two", "Five", "Four"],
            answer: "Four"

        }, {

            question: "Where is the portal to The Ark located?",
            answerList: ["Europe", "Asia", "America", "Africa"],
            answer: "Asia"

        }];


////////////////
    $("#start").on("click", function() {
        $("#start").hide();
            $("#time").html("<h2>Time Remaining: 30 Seconds</h2>" + "<br>");
            run();
            for(var i=0; i<questions.length; i++){
                $("#boss").append("<h1>" + questions[i].question +"</h1>");
                for( var j=0; j<questions[i].answerList.length; j++){
            $("#boss").append("<input type='radio' name='question-"+i+"' value='"+questions[i].answerList[j]+"'>"+questions[i].answerList[j]);
          }
      }
// ///////////////   
        $("#submit").html("<button id='done' class='btn'>Done</button>");

        $("#done").on("click", function() {

            appDone();

            hideResults();
            
        });
    });
///////////////////
        function run() {

            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);
        }

//////////////////
    function decrement() {

        number--;

        $("#time").html("<h2>Time Remaining: " + number + " Seconds</h2>" + "<br>");

        if (number === 0) {

            stop();

            hideResults();
        }
    }
///////////////////
     function stop() {

            clearInterval(intervalId);
        }
        function hideResults() {

            $("#time").hide();
            $("#boss").hide();
            $("#submit").hide();
            $("#resultsMessage").html("<h3>All Done!</h3>");
            $("#correct").html("Correct Answers: " + correctAnswers);
            $("#incorrect").html("Incorrect Answers: " + incorrectAnswers);
            $("#unanswered").html("Unanswered: " + unanswered);
     }
////////////////
   function appDone() {

  
        var userAnswer1 = $("input[name='question-0']:checked").val();
        var userAnswer2 = $("input[name='question-1']:checked").val();
        var userAnswer3 = $("input[name='question-2']:checked").val();
        var userAnswer4 = $("input[name='question-3']:checked").val();
        var userAnswer5 = $("input[name='question-4']:checked").val();

    // Question 1
    if (userAnswer1 === undefined) {

        unanswered++;
    }
    else if (userAnswer1 == questions[0].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }

    // Question 2
    if (userAnswer2 === undefined) {

        unanswered++;
    }
    else if (userAnswer2 == questions[1].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }

    // Question 3
    if (userAnswer3 === undefined) {

        unanswered++;
    }
    else if (userAnswer3 == questions[2].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }
    // Question 4
    if (userAnswer4 === undefined) {

    unanswered++;
    }
    else if (userAnswer4 == questions[3].answer) {

    correctAnswers++;
    }
    else {

    incorrectAnswers++;
    }
    // Question 5
    if (userAnswer5 === undefined) {

    unanswered++;
    }
    else if (userAnswer5 == questions[4].answer) {

    correctAnswers++;
    }
    else {

    incorrectAnswers++;
    }
}