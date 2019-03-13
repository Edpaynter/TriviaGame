var time
var score = 0
var losses = 0
var gameQuestion
var gameAnswer

var trivia = {
    questions: [
        {
            question: "What is the world's largest island named?",
            answer: "Greenland"
        },

        {
            question: "What is the Earth's diameter in miles?",
            answer: "8000"
        },

        {
            question: "What's the capital of Germany?",
            answer: "Berlin"
        },
        
        {
            question: "What is the second largest Continent on Earth?",
            answer: "Africa"
        },

    ]
}

function checkLoss(checkWins, checkLosses){
    if (checkWins === 3){
        $('#gamestats').attr('class', 'container font-weight-bold text-success text-center display-9')
        $('#gamestats').text("YOU WIN!")
        setTimeout(function(){location.reload()}, 1000 * 5)
        
        
    }else if(checkLosses === 3){
        $('#gamestats').attr('class', 'container font-weight-bold text-danger text-center display-9')
        $('#gamestats').text("YOU LOSE!")
        setTimeout(function(){location.reload()}, 1000 * 5)
        
        
    }

}
$('#timer').text(time)

function counter() {
    if (time === 0) {
        losses++;
        $("#loss").text("Losses: " + losses)
        checkLoss(score, losses)
        setQuestion()
    } else {
        time--;
        $('#timer').text(time)
        console.log(time);
    }

}

function random() {
    var number = 0 + Math.floor(Math.random() * 4)
    console.log(number)
    return number
}

function start() {
    b = setInterval(counter, 1000)
    checkLoss(score, losses)
    setQuestion()
    console.log(setQuestion.gameAnswer)

}

function setQuestion() {
    time = 10
    checkLoss(score, losses)
    $('#timer').text(time)
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
        
        start()
    } else {
        losses++
        
        $("#loss").text("Losses: " + losses)
        
        start()
    }
    
}


$(document).ready(function () {
    start()
    
    $("#game-form").submit(function (event) {
        var userAttempt = $("#answer-question").val().toLowerCase()
        event.preventDefault();

        console.log("user" + userAttempt);
        console.log("game" + gameAnswer);
        runCheck(userAttempt, gameAnswer)
        
    })
});
