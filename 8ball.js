//All possible answers to queries are defined below

var answers = ["It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes - definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes", "Signs point to yes",        //x10 affirmative answers
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",        //x5 non-commital answers
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again"];       //x5 negative answers

window.onload = function () 
{
    var eight = document.getElementById("eight");
    var answer = document.getElementById("answer");
    var eightball = document.getElementById("eight-ball");
    var question = document.getElementById("question");

    eightball.addEventListener("click", function () 
    {
        if (question.value.length < 1)      //When textbox is empty, display dialog box 
        {
            alert('Enter a question!');
        } 
        else 
        {
            eight.innerText = "";
            var num = Math.floor(Math.random() * Math.floor(answers.length));       //Display answers, from selected 20, at random
            answer.innerText = answers[num];
        }
    });
};
