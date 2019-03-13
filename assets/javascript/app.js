var time = 30
var score = 0
var losses = 0
var gameQuestion
var gameAnswer
var b =  setInterval(counter, 1000)

$('#timer').text(time)

function counter() {


    if (time === 0) {
        losses++
        setQuestion()

    } else {
        time--;
        $('#timer').text(time)
        console.log(time);
    }

}

var trivia = {

    questions: [
        {
            question: "Who's on the hundred dollar bill?",
            answer: "Ben Franklin"
        },

        {
            question: "Who's on the one dollar bill?",
            answer: "George Washington"
        }


    ]
}

function random() {
    var number = 0 + Math.floor(Math.random() * ((1 - 0) + 1))
    console.log(number)
    return number
}

function start() {
    setQuestion()
    console.log(setQuestion.gameAnswer)

}


function setQuestion() {
    
    a = trivia.questions[random()];
    gameQuestion = a.question
    gameAnswer = a.answer.toLowerCase()
    $('#game-question').text(gameQuestion)
}



function runCheck(var1, var2) {
    clearInterval(b)
    if (var1 === var2) {
        score++;
        $("#wins").text("Wins: " + score)
        setQuestion()
    } else {
        losses++
        $("#loss").text("Losses: " + losses)
        setQuestion()
    }
}


$(document).ready(function () {
    setQuestion()
    
   
    $("#game-form").submit(function (event) {
        var userAttempt = $("#answer-question").val().toLowerCase()
        event.preventDefault();
        console.log("user" + userAttempt);
        console.log("game" + gameAnswer);
        runCheck(userAttempt, gameAnswer)
    })



});
