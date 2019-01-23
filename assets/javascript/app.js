// JavaScript Document
//hide the submit
$(document).ready(function(){
    console.log('**********function**********');
    console.log('document ready');
    $('#btnReset').hide();
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



$('#btnStart').on('click', function(){
    console.log('**********click**********');
    $('#btnStart').hide();
    console.log('Player clicked btnStart');
    displayQuestion();
    runTimer();
    for (var i = 0; i < questionList.length; i++){
        holder.push(questionList[i]);
    }
    
});

function runTimer(){
    console.log('**********function**********');
    console.log('runTimer was called');
    if (!running){
        intervalId = setInterval(decrement, 1000);
        console.log('decrement interval set to 1 second from runTimer() function if statement');
        running = true;
        console.log('running set to true from runTimer() function if statement');
    }
}

function decrement(){
    console.log('**********function**********');
    console.log('Time Remaining: ' + timeRemaining);
    $('#cellTimer').html('<h3>Time Remaining: ' + timeRemaining + '</h3>');
    timeRemaining--;
    
    if (timeRemaining === 0){
        unanswered++;
        console.log('unanswered increased by 1');
        stop();
        console.log('stop() called from decrement() function if statement');
        $('#cellMessage').html('<p>Time is up!  The correct answer is ' + pick.qChoices[pick.qAnswer] + '</p>');
        hideImage();
    }
}

function stop(){
    console.log('**********function**********');
    console.log('stop() called');
    running = false;
    console.log('running set to false from stop() function');
    clearInterval(intervalId);
    console.log('clearInterval() called from stop() function');
    
}

function displayQuestion(){
    console.log('**********function**********');
    console.log('displayQuestion() called');
    index = Math.floor(Math.random()*questionList.length);
    pick = questionList[index];
    $('#cellQuestion').html('<h2>' + pick.qString + '</h2');
    for (var i = 0; i < pick.qChoices.length; i++){
        var userChoice = $('<div>');
        userChoice.addClass('answer-choice');
        userChoice.html(pick.qChoices[i]);
        userChoice.attr('data-guessvalue', i);
        $('#cellQuestion').append(userChoice);
    }
}
$('.answer-choice').on('click', function(){
    console.log('**********click**********');
    console.log('player clicked .answer-choice');
    playerGuess = parseInt($(this).attr('data-guessvalue'));
    
    if (playerGuess === pick.qAnswer){
        stop();
        console.log('stop() called from answer-choice click event if statement');
        answerCorrect++;
        console.log('answerCorrect increased by 1');
        playerGuess = '';
        $('#cellMessage').html('<p>Correct!</p>');
        hideImage();
        console.log('hideImage() called from answer-choice click event');
    }
    else {
        stop();
        console.log('stop() called from answer-choice click event else statement');
        answerIncorrect++;
        console.log('answerIncorrect increased by 1');
        playerGuess='';
        $('#cellMessage').html('<p>Opps! the correct answer is' + pick.qChoices[pick.qAnswer] +  '</p>');
        hideImage();
    }
});
function hideImage(){
    console.log('**********function**********');
    console.log('hideImage() called');
    $('#imgTop').attr('src', pick.qImage);
    newArray.push(pick);
    questionList.splice(index, 1);
    
    var imgHide = setTimeout(function(){
        $('#imgTop').empty();
        console.log('imgTop emptied');
        timeRemaining = 5;
        console.log('timeRemaining set to 5');
        
        if ((answerIncorrect + answerCorrect + unanswered) === qCount){
            $('#cellQuestion').empty();
            $('#cellQuestion').html('<h3>Game Over</h3>');
            $('#answer-block').append('<h4>Correct: ' + answerCorrect + '</h4>');
            $('#answer-block').append('<h4>Incorrect: ' + answerIncorrect + '</h4>');
            $('#answer-block').append('<h4>Not Answered: ' + unanswered + '</h4>');
            $('#btnReset').show();
            answerCorrect = 0;
            console.log('');
            answerIncorrect = 0;
            console.log('');
            unanswered = 0;
            console.log('');
        }
        else {
            runTimer();
            console.log('runTimer() called from hideImage() function');
            displayQuestion();
            console.log('displayQuestion() called from hideImage() function');
        }
    }, 3000);
}

$('#btnReset').on('click', function(){
    console.log('**********click**********');
    $('#btnReset').hide();
    console.log('btnReset hidden');
    $('#answer-block').empty();
    console.log('answer-block emptied');
    $('#cellQuestion').empty();
    console.log('cellQuestion emptied');
    for (var i = 0; holder.length; i++){
        questionList.push(holder[i]);
    }
    runTimer();
    console.log('runTimer() called from btnReset click');
    displayQuestion();
    console.log('displayQuestion() called from btnReset click');
    console.log('');
});