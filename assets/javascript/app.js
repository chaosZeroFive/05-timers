$(document).ready(function () {
    currentQuestion = -1;
    getTrivia();
    console.log('@ document.ready | timerInterval: ' + timerInterval);
    $('#next').hide();
});
//array of questions
var questionArray = [{
        qString: 'Which is the most predominant element in the Sun?',
        qChoice: ['Helium', 'Iron', 'Sulphur', 'Hydrogen'],
        qAnswer: 3,
        qImage: 'assets/images/1x/img100place-holder.png',
        aImage: 'assets/images/1x/img100place-holder.png'
    },

    {
        qString: 'Which is the closest active galaxy to the Milky Way?',
        qChoice: ['Sagittarius A', 'Cygnus 11', 'Orionis A', 'Centaurus A'],
        qAnswer: 3,
        qImage: 'assets/images/1x/img100place-holder.png',
        aImage: 'assets/images/1x/img100place-holder.png'
    },

    {
        qString: 'How many (official) planets are in our solar system?',
        qChoice: ['Twenty-Seven', 'Nine', 'Eight', 'Fourteen'],
        qAnswer: 2,
        qImage: 'assets/images/1x/img100place-holder.png',
        aImage: 'assets/images/1x/img100place-holder.png'
    },

    {
        qString: 'What is the closest star to our planet?',
        qChoice: ['Sun', 'Alpha Centuari', 'Proxima Centuari', 'Jupiter'],
        qAnswer: 0,
        qImage: 'assets/images/1x/img100place-holder.png',
        aImage: 'assets/images/1x/img100place-holder.png'
    },

    {
        qString: 'What is the product of Hydrogen fusion?',
        qChoice: ['Oxygen', 'Helium', 'Carbon', 'Gold'],
        qAnswer: 1,
        qImage: 'assets/images/1x/img100place-holder.png',
        aImage: 'assets/images/1x/img100place-holder.png'
    }
];

//object to hold the current question & answers
var currentTrivia = {
    question: '',
    choice0: '',
    choice1: '',
    choice2: '',
    choice3: '',
    answer: '',
    image0: '',
    image1: ''
}


var isRunning = false; //boolean to test if timer is running

var timerInterval; //holds the setInterval for timerRun

var isAnswered = false; //boolean to test if player has answered

var currentQuestion = 0; //var to hold the current question index -- 0 is starting value

var time = 5; //var to hold the start time

var gameStats = {
    correct: 0,    //number of correct answers
    incorrect: 0,  //number of incorrect answers
    unanswered: 0  //number of questions not answered
}

var clickVal; //var to hold the players answer selection


$('#start').on('click', function () {
    currentQuestion++;
    $('#start').hide();
    console.log('@ start click | start clicked');
    showTrivia();
    timerSet();
});

$('#list').on('click', '.list-group-item', function () {
    console.log('player selected: ' + $(this).text());
    isAnswered = true;
    console.log('@ answer click | isAnswered: ' + isAnswered);
    clickVal = parseInt($(this).attr('value'));
    answerEval();
});

$('#next').on('click', function(){
    $('#next').hide();
    showTrivia();
    timerSet();
})

var timerRun = function() {
    if (isRunning && time > 0) { //isRunning default value is false
        time--;
        $('#header').html('Time Remaining: ' + time);
        console.log('@ var timerRun | Time Remaining: ' + time);
    }
    else timerExpired();
}

function timerExpired() {
    console.log('timerExpired() called');
    resetTimer();
    isRunning = false;
    console.log('@ timerExpired() | isRunning: ' + isRunning)
    gameStats.unanswered++;
    console.log('@ timerExpired() | gameStats.unanswered: ' + gameStats.unanswered);
    $('#header').html('Time is Up!');
    $('#numMissed').html('Missed: ' + gameStats.unanswered);
}

function resetTimer() {
    console.log('resetTimer() called');
    clearInterval(timerInterval);
    console.log('@ resetTimer() | timerInterval: ' + timerInterval);
}

function timerSet() {
    console.log('timerSet() called')
    timerInterval = setInterval(timerRun, 1000);
    console.log('@ timerSet() | timerInterval: ' + timerInterval);
    isRunning = true;
    console.log('@ timerSet() | isRunning: ' + isRunning);
    
}
//if the difference between the sum of answers and the number of questions equal to or greater game over
function nextTrivia() {
    console.log('nextTrivia() called')
    if (gameStats.correct + gameStats.incorrect >= questionArray.length) {
        console.log('@ if | nextTrivia() called')
        gameOver();
    }
    else {
        console.log('@ else | nextTrivia() called')
        $('#next').show();
    }
}

//

function answerEval(){
    currentQuestion++;
    console.log('answerEval() called');
    var a = parseInt(currentTrivia.answer);
    var c = clickVal;
    if (c !== a) {
        console.log('@ answerEval() | Player selected wrong answer: ' + $(this).text());
        $('#header').html('Good Try!');
        $('#numIncorrect').html('Incorrect: ' + gameStats.incorrect);
        gameStats.incorrect++;
    } else {
        console.log('@ answerEval() | Player selected correct answer: ' + $(this).text());
        $('#header').html('Good Job!');
        $('#numCorrect').html('Correct: ' + gameStats.correct);
        gameStats.correct++;
    }
}

function getTrivia() {
    console.log('getTrivia() called');
    $('#header').empty();
    $('#title').empty();
    $('#list').empty();
    var q = questionArray[currentQuestion];
    currentTrivia.question = q.qString;
    currentTrivia.choice0 = q.qChoice[0];
    currentTrivia.choice1 = q.qChoice[1];
    currentTrivia.choice2 = q.qChoice[2];
    currentTrivia.choice3 = q.qChoice[3];
    currentTrivia.answer = q.qAnswer;
    currentTrivia.image0 = q.qImage;
    currentTrivia.image1 = q.aImage;
    console.log('@ getTrivia() | currentQuestion: ' + currentQuestion);
    console.log('@ getTrivia() | currentTrivia.question: ' + currentTrivia.question);
    console.log('@ getTrivia() | currentTrivia.choice0: ' + currentTrivia.choice0);
    console.log('@ getTrivia() | currentTrivia.choice1: ' + currentTrivia.choice1);
    console.log('@ getTrivia() | currentTrivia.choice2: ' + currentTrivia.choice2);
    console.log('@ getTrivia() | currentTrivia.choice3: ' + currentTrivia.choice3);
    console.log('@ getTrivia() | currentTrivia.answer: ' + currentTrivia.answer);
}

function showTrivia() {
    console.log('showTrivia() called');
    var a1 = '<a href="#" class="list-group-item" value=0 id="aChoice1">' + currentTrivia.choice0 + '</a>';
    var a2 = '<a href="#" class="list-group-item" value=1 id="aChoice2">' + currentTrivia.choice1 + '</a>';
    var a3 = '<a href="#" class="list-group-item" value=2 id="aChoice3">' + currentTrivia.choice2 + '</a>';
    var a4 = '<a href="#" class="list-group-item" value=3 id="aChoice4">' + currentTrivia.choice3 + '</a>';
    $('#header').html('Time Remaining: ');
    $('#title').html(currentTrivia.question);
    $('#list').append(a1, a2, a3, a4);
    
}

function gameOver() {
    console.log('gameOver() called');
    $('#game-card').html('<strong>Game Over</strong>')
}

