// JavaScript Document
//hide the submit
$(document).ready(function(){
    $('#btnDone').hide();
});


var question1 = {
    qString: 'Which is the most predominant element in the Sun?',
    qChoices: ['Helium', 'Iron', 'Sulphur', 'Hydrogen'],
    qName: 'qObject1',
    qAnswer: 3,
    qClass: '.q1',
    qLevel: 'lvl1'
}
var question2 = {
    qString: 'Which is the closest active galaxy to the Milky Way?',
    qChoices: ['Sagittarius A', 'Cygnus 11', 'Orionis A', 'Centaurus A'],
    qName: 'qObject2',
    qAnswer: 3,
    qClass: '.q2',
    qLevel: 'lvl1'
}
var question3 = {
    qString: 'How many (official) planets are in our solar system?',
    qChoices: ['Twenty-Seven', 'Nine', 'Eight', 'Fourteen'],
    qName: 'qObject3',
    qAnswer: 2,
    qClass: '.q3',
    qLevel: 'lvl1'
}
var question4 = {
    qString: 'What is the closest star to our planet?',
    qChoices: ['Sun', 'Alpha Centuari', 'Proxima Centuari', 'Jupiter'],
    qName: 'qObject4',
    qAnswer: 0,
    qClass: '.q4',
    qLevel: 'lvl1',
    qgif: '<img src="https://media.giphy.com/media/ctGFLebG1AqK4/giphy.gif">'
}
var question5 = {
    qString: 'What is the product of Hydrogen fusion?',
    qChoices: ['Oxygen', 'Helium', 'Carbon', 'Gold'],
    qName: 'qObject5',
    qAnswer: 1,
    qClass: '.q5',
    qLevel: 'lvl3'
}

var timeRemaining = 60;

var currentQuestion = 0;

//when player is ready they clcik button that logs the action and runs the gameRun function
$('#btnStart').on('click', function () {
    console.log('Player clicked start button');
    startTimer();
});

//click function for done button
$('#btnDone').on('click', function(){
    
});


//variable to hold timer start value

    
function startTimer() {
    $('#divTimer').text('Time Remaining: ' + timeRemaining);
    setInterval(countDown, 1000);
    $('#btnStart').hide();
    displayQuestion();
}

function countDown() {
    timeRemaining--;
    $('#divTimer').text('Time Remaining: ' + timeRemaining);
    if (timeRemaining <= 0) {
        stopTimer();
        $('#divTimer').empty();
    }
}

function showResults(){
        
}


function displayQuestion(){
    $('#btnDone').show();
    $('#qText').html()
}

function checkAnswer() {

}

function stopTimer(){
    clearInterval();
    checkAnswer();
}