// JavaScript Document
//hide the submit
$(document).ready(function(){
    console.log(questionList);
    console.log(timeRemaining);
    console.log(messages);
    console.log(qCount);
});


var questionList = [
    {
    qString: 'Which is the most predominant element in the Sun?',
    qChoices: ['Helium', 'Iron', 'Sulphur', 'Hydrogen'],
    qName: 'qObject1',
    qAnswer: 3,
    qClass: '.q1',
    qLevel: 'lvl1',
    qImage: 'assets/images/1x/img100place-holder.png'
    },
    
    {
    qString: 'Which is the closest active galaxy to the Milky Way?',
    qChoices: ['Sagittarius A', 'Cygnus 11', 'Orionis A', 'Centaurus A'],
    qName: 'qObject2',
    qAnswer: 3,
    qClass: '.q2',
    qLevel: 'lvl1',
    qImage: 'assets/images/1x/img100place-holder.png'
    },
    
    {
    qString: 'How many (official) planets are in our solar system?',
    qChoices: ['Twenty-Seven', 'Nine', 'Eight', 'Fourteen'],
    qName: 'qObject3',
    qAnswer: 2,
    qClass: '.q3',
    qLevel: 'lvl1',
    qImage: 'assets/images/1x/img100place-holder.png'
    },
    
    {
    qString: 'What is the closest star to our planet?',
    qChoices: ['Sun', 'Alpha Centuari', 'Proxima Centuari', 'Jupiter'],
    qName: 'qObject4',
    qAnswer: 0,
    qClass: '.q4',
    qLevel: 'lvl1',
    qImage: 'assets/images/1x/img100place-holder.png'
    },
        
    {
    qString: 'What is the product of Hydrogen fusion?',
    qChoices: ['Oxygen', 'Helium', 'Carbon', 'Gold'],
    qName: 'qObject5',
    qAnswer: 1,
    qClass: '.q5',
    qLevel: 'lvl3',
    qImage: 'assets/images/1x/img100place-holder.png'
    }
];
var timeRemaining = 5;



var messages = {
    correct: 'Good Job!',
    incorrect: 'Good try...',
    endTime: 'Opps...Time is Up!',
    finished: 'Your Done'
}

var answerCorrect = 0;

var answerIncorrect = 0;

var unanswered = 0;

var intervalId;

var playerGuess = '';

var running = false;

var qCount = questionList.length;

var pick;

var index;

var newArray = [];

var holder = [];

$('#btnReset').hide();

$('#btnStart').on('click', function(){
    $('#btnStart').hide();
    displayQuestion();
    runTimer();
    for (var i = 0; i < questionList.length; i++){
        holder.push(questionList[i]);
    }
    
});

function runTimer(){
    if (!running){
        intervalId = setInterval(decrement, 1000);
        running = true;
    }
}

function decrement(){
    $('#divTimer').html('<h3>Time Remaining: ' + timeRemaining + '</h3>');
    timeRemaining--;
    
    if (timeRemaining === 0){
        unanswered++;
        stop();
        $('#qInfo').html('<p>Time is up!  The correct answer is ' + pick.qChoices[pick.qAnswer] + '</p>');
        hideImage();
    }
}

function stop(){
    running = false;
    clearInterval(intervalId);
    
}

function displayQuestion(){
    index = Math.floor(Math.random()*questionList.length);
    pick = questionList[index];
    $('#qText').html('<h2>' + pick.qString + '</h2');
    for (var i = 0; i < pick.qChoices.length; i++){
        var userChoice = $('<div>');
        userChoice.addClass('answer-choice');
        userChoice.html(pick.qChoices[i]);
        userChoice.attr('data-guessvalue', i);
        $('#qText').append(userChoice);
    }
}
$('.answer-choice').on('click', function(){
    playerGuess = parseInt($(this).attr('data-guessvalue'));
    
    if (playerGuess === pick.qAnswer){
        stop();
        answerCorrect++;
        playerGuess = '';
        $('#qInfo').html('<p>Correct!</p>');
        hideImage();
    }
    else {
        stop();
        answerIncorrect++;
        playerGuess='';
        $('#qInfo').html('<p>Opps! the correct answer is' + pick.qChoices[pick.qAnswer] +  '</p>');
        hideImage();
    }
});
function hideImage(){
    $('#imgTop').attr('src', pick.qImage);
    newArray.push(pick);
    questionList.splice(index, 1);
    
    var imgHide = setTimeout(function(){
        $('#imgTop').empty();
        timeRemaining = 5;
        
        if ((answerIncorrect + answerCorrect + unanswered) === qCount){
            $('#qText').empty();
            $('#qText').html('<h3>Game Over</h3>');
            $('#answer-block').append('<h4>Correct: ' + answerCorrect + '</h4>');
            $('#answer-block').append('<h4>Incorrect: ' + answerIncorrect + '</h4>');
            $('#answer-block').append('<h4>Not Answered: ' + unanswered + '</h4>');
            $('#reset').show();
            answerCorrect = 0;
            answerIncorrect = 0;
            unanswered = 0;
        }
        else {
            runTimer();
            displayQuestion();
        }
    }, 3000);
}

$('#reset').on('click', function(){
    $('#reset').hide();
    $('#answer-block').empty();
    $('#qText').empty();
    for (var i = 0; holder.length; i++){
        questionList.push(holder[i]);
    }
    runTimer();
    displayQuestion();
});