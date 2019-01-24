// JavaScript Document
//hide the submit
$(document).ready(function(){
    console.log('**********function**********');
    console.log('document ready');
    $('#btnReset').hide();
    $('#btnDone').hide();
    $('#game').hide();
});

var qList = [
    {
    qString: 'Which is the most predominant element in the Sun?',
    qChoices: ['Helium', 'Iron', 'Sulphur', 'Hydrogen'],
    qName: 'qObject1',
    qAnswer: 'Hydrogen',
    qLevel: 'lvl1',
    qImage: 'assets/images/1x/img100place-holder.png',
    aImage: 'assets/images/1x/img100place-holder.png'
    },
    
    {
    qString: 'Which is the closest active galaxy to the Milky Way?',
    qChoices: ['Sagittarius A', 'Cygnus 11', 'Orionis A', 'Centaurus A'],
    qAnswer: 'Centaurus A',
    qImage: 'assets/images/1x/img100place-holder.png',
    aImage: 'assets/images/1x/img100place-holder.png'
    },
    
    {
    qString: 'How many (official) planets are in our solar system?',
    qChoices: ['Twenty-Seven', 'Nine', 'Eight', 'Fourteen'],
    qAnswer: 'Eight',
    qImage: 'assets/images/1x/img100place-holder.png',
    aImage: 'assets/images/1x/img100place-holder.png'
    },
    
    {
    qString: 'What is the closest star to our planet?',
    qChoices: ['Sun', 'Alpha Centuari', 'Proxima Centuari', 'Jupiter'],
    qAnswer: 'Sun',
    qImage: 'assets/images/1x/img100place-holder.png',
    aImage: 'assets/images/1x/img100place-holder.png'
    },
        
    {
    qString: 'What is the product of Hydrogen fusion?',
    qChoices: ['Oxygen', 'Helium', 'Carbon', 'Gold'],
    qAnswer: 'Helium',
    qImage: 'assets/images/1x/img100place-holder.png',
    aImage: 'assets/images/1x/img100place-holder.png'
    }
];
var timeRem;

var messages = {
    correct: 'Good Job!',
    incorrect: 'Good try...',
    endTime: 'Opps...Time is Up!',
    finished: 'Your Done'
}

var gameStats = {
    correct: 0,
    incorrect: 0,
    unanswered: 0
}

var timerRunning = false;

var timerInt;

var qNum;

var currentQuestion;

var aChoice0;

var aChoice1;

var aChoice2;

var aChoice3;

var currentImage;

var correctAnswer;

var selectedAnswer;

$('#btnStart').on('click', function(){
    qNum = 0;
    getTrivia();
    timer();
    console.log('Player clicked Start button');
});

$('#btnDone').on('click', function(){
    stop();
    setTimeout(clear, 1000);
    console.log('Player clicked Done button');
    console.log('Question Number = ' + qNum);
});

$('.answer-block input:radio').on('checked', function(){
    var text = $('input:radio').text();
    selectedAnswer = $(this).val(text);
    console.log(selectedAnswer);
})


//uses qNum as the index as the next question in the sensquence
function getTrivia(){
    $('.question').empty();
    $('.answer-block').empty();
    var n = qList[qNum];
    currentQuestion = n.qString;
    aChoice0 = n.qChoices[0];
    aChoice1 = n.qChoices[1];
    aChoice2 = n.qChoices[2];
    aChoice3 = n.qChoices[3];
    currentImage = n.qImage;
    correctAnswer = n.qAnswer;
    console.log('qNum = ' + qNum);
    console.log('Current Question: ' + currentQuestion);
    console.log('Answer Choice 1: ' + aChoice0);
    console.log('Answer Choice 2: ' + aChoice1);
    console.log('Answer Choice 3: ' + aChoice2);
    console.log('Answer Choice 4: ' + aChoice3);
    console.log('path to image: ' + currentImage);
    $('.timer').html('<h5>Time Remaining: 5</h5>');
    $('#game').show();
    $('#btnDone').show();
    $('#btnStart').hide();
    displayQuestion();
    displayAnswers();
    displayImage();
}
function displayQuestion(){
    $('.question').html('<h3>' + currentQuestion + '</h3>');
}

function displayAnswers(){
    $('.answer-block').append('<input type="radio"  name="answer-group" id="answer-group_0">' + '<label><h4>' + aChoice0 + '</h4></label><br>');
    $('.answer-block').append('<input type="radio"  name="answer-group" id="answer-group_1">' + '<label><h4>' + aChoice1 + '</h4></label><br>');
    $('.answer-block').append('<input type="radio"  name="answer-group" id="answer-group_2">' + '<label><h4>' + aChoice2 + '</h4></label><br>');
    $('.answer-block').append('<input type="radio"  name="answer-group" id="answer-group_3">' + '<label><h4>' + aChoice3 + '</h4></label><br>');
}

function displayImage(){
    $('.trivia-image').html('<img src="' + currentImage + '" alt="image">');
}

//time set to 5 for testing
function timer(){
    timeRem = 5;
    if (!timerRunning){
        timeRem = 5;
        timerInt = setInterval(countDown, 1000);
    }
    console.log('Time Remaining: ' + timeRem);
}

function countDown(){
    timeRem--;
    console.log('Time Remianing: ' + timeRem);
    $('.timer').html('<h5>Time Remaining: ' + timeRem + '</h5>');
    if (timeRem === 0){
        gameStats.unanswered++;
        stop();
        $('#btnDone').text('Next');
    }
}

function stop(){
    timerRunning = false;
    clearInterval(timerInt);
    qNum++;
    //setTimeout(next, 2000);
}

function clear(){
    if (qNum <= qList.length){
        next();
    }
    else{
        $('.timer').empty();
        $('.question').empty();
        $('.answer-block').empty();
    }
    
}

function next(){
        getTrivia();
        timer();
}

