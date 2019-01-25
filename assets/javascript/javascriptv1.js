$(document).ready(function () {
    getTrivia();
    console.log(gameStats.correct);
    console.log(gameStats.incorrect);
    console.log(gameStats.unanswered);
    console.log(currentQuestion);
});

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

var isRunning = false;

var timerInterval;

var isAnswered = false;

var currentQuestion = 0;

var time = 5;

var gameStats = {
    correct: 0,
    incorrect: 0,
    unanswered: 0
}

$('#start').on('click', function () {
    console.log('start clicked');
    showTrivia();
    console.log('showTrivia() called');
    timerSet();
});

$('#list').on('click', '.list-group-item', function () {
    console.log('player selected: ' + $(this).text());
    $('#header').empty();
    $('#title').empty();
    $('#list').empty();
    isAnswered = true;
    var c = parseInt($(this).attr('value'));
    var a = parseInt(currentTrivia.answer);
    if (c !== a) {
        console.log('Player selected wrong answer: ' + $(this).text());
        $('#header').html('Incorrect!');
        gameStats.incorrect++;
    } else {
        console.log('Player selected correct answer: ' + $(this).text());
        $('#header').html('Good Job!');
        gameStats.correct++;
    }
    resetTimer();
});

function getTrivia() {
    if (gameStats.correct + gameStats.incorrect >= questionArray.length) {
        gameOver();
    } else {
        var q = questionArray[currentQuestion];
        currentTrivia.question = q.qString;
        currentTrivia.choice0 = q.qChoice[0];
        currentTrivia.choice1 = q.qChoice[1];
        currentTrivia.choice2 = q.qChoice[2];
        currentTrivia.choice3 = q.qChoice[3];
        currentTrivia.answer = q.qAnswer;
        currentTrivia.image0 = q.qImage;
        currentTrivia.image1 = q.aImage;
        console.log('Current Question Index: ' + currentQuestion);
        console.log('Current Question: ' + currentTrivia.question);
        console.log('Answer Choice #1: ' + currentTrivia.choice0);
        console.log('Answer Choice #2: ' + currentTrivia.choice1);
        console.log('Answer Choice #3: ' + currentTrivia.choice2);
        console.log('Answer Choice #4: ' + currentTrivia.choice3);
        console.log('Correct Answer: ' + currentTrivia.answer);
    }
}

function showTrivia() {
    $('#start').hide();
    var a1 = '<a href="#" class="list-group-item" value=0 id="aChoice1">' + currentTrivia.choice0 + '</a>';
    var a2 = '<a href="#" class="list-group-item" value=1 id="aChoice2">' + currentTrivia.choice1 + '</a>';
    var a3 = '<a href="#" class="list-group-item" value=2 id="aChoice3">' + currentTrivia.choice2 + '</a>';
    var a4 = '<a href="#" class="list-group-item" value=3 id="aChoice4">' + currentTrivia.choice3 + '</a>';
    $('#header').html('Time Remaining: ');
    $('#title').html(currentTrivia.question);
    $('#list').append(a1, a2, a3, a4);
}

function timerSet() {
    if (!isRunning){
        timerInterval = setInterval(timerRun, 1000);
    }
}

function timerRun() {
    if (time > 0 || !isAnswered) {
        time--;
        $('#header').html('Time Remaining: ' + time);
        console.log('Time Remaining: ' + time);
    }
    else {
        timerExpired();
    }
}

function timerExpired() {
    resetTimer();
    gameStats.unanswered++;
    $('#header').html('Time is Up!');
}

function resetTimer() {
    clearInterval(timerRun);
}

function gameOver() {

}


function resetTrivia() {

}

function nextTrivia() {
    currentQuestion++;
    console.log('Current Question Index: ' + currentQuestion);
}