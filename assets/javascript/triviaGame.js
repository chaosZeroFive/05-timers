///////////////////////
///    Trivia       ///
///     Game        ///
///  Alton Carroll  ///
///      2019       ///
///////////////////////


/*Psuedo Code
    document ready
        -
    
******************************this is what is what happens before the player clicks start******************************
condition that exist:
    -document is ready
    -global variables declared
    -questions are held in an object
    
events & actions:

        -button click event
        
        
******************************this is what is what happens after the player clicks starts******************************
condition that exist:

events & actions:
    -timer begins counting down
    
******************************this is what is what happens during the game ********************************************
condition that exist:

events & actions:

    player answers questions as fast as possible
        -only one answer can be selected
        
    if player finishes before timer reaches zero they can click submit
    otherwise the game ends at 00:00
    
******************************this is what is what happens after the game ends*****************************************
condition that exist:
    -timer is 00:00
    -player clicks submit
events & actions:
    -game resets
        calculate number correct | append html
        calculate number incorrect | append html
        calculate score | append html
*/
    
//game = period from document ready to close
//round = period from player clicking begin until player answers question or time reaches 00:00

$(document).ready(function(){
    $('#timerDiv').hide();
    
})

var showQuestion;

var qCount = 0;

var timerObject = {
    timerId: '',
    timerOn: false,
    time: 60,
    timerCurrent: 0
}

var gameStats = {
    numCorrect: 0,
    numIncorrect: 0,
    numUnanswered: 0,
    averageTime: 0,
    averageTimePer: 0,
    numTimeExpired: 0,
    
    
}

//need a function to start the game
$('#btnPlay').on('click', function(){
    $('#timerDiv').show();
    $('#btnPlay').hide();
    nextQuestion();
})
//need a function to display and change the questions

//need a function to evaluate the responses

//need a function to generate game statistics

//need a function to run timer
    //***conditions:
        //timer is is greater than zero
        //question is not answered
        //timer is equal to zero
        //question is answered
//need a function to reset the game

function runTimer(){
    
}

function nextQuestion(){
    qCount++;
    $('#qCnt').html(qCount);
    $('#qElem').html(triviaQuestions.question1.qString);
    
    
    
    /*$('#answerOne').append(' ' + triviaQuestions.question1.qChoices[0]);
    $('#answerTwo').append(' ' + triviaQuestions.question1.qChoices[1]);
    $('#answerThree').append(' ' + triviaQuestions.question1.qChoices[2]);
    $('#answerFour').append(' ' + triviaQuestions.question1.qChoices[3]);*/
}